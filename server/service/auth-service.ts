import { Body, Get, Post, Query, ResponseStatus, Service, Session } from "@propero/easy-api";
import { Password } from "@propero/security";
import z from "zod";
import { db, Role, Token, TokenPurpose, User } from "../database";
import { sendPasswordResetEmail } from "../emails/reset-password";
import { sendVerificationEmail } from "../emails/verification";
import { UserRegistrationSchema } from "../schemas/user-schemas";
import { relativeDate } from "../util/timing";

@Service("/auth")
export class AuthService {
  readonly users = db.getRepository(User);
  readonly tokens = db.getRepository(Token);

  @Post("/login")
  async login(
    @Body("password") password: string,
    @Body("username") username: string,
    @Session() session: any,
  ) {
    console.log("login", username, password);
    const user = await this.users.findOne({
      where: [{username}, {email: username}]
    });
    if (!user) return {status: ResponseStatus.NOT_FOUND, data: {success: false}};
    if (!await user.hash.verifyAndUpgrade(password))
      return {status: ResponseStatus.UNAUTHORIZED, data: {success: false}};
    await this.users.save(user);
    session.user = user;
    return {status: 200, data: {success: true}};
  }

  @Post("/register")
  async register(
    @Body() data: z.infer<typeof UserRegistrationSchema>,
    @Session() session: any,
  ) {
    await UserRegistrationSchema.parseAsync(data);

    const user = this.users.create({
      username: data.username,
      email: data.email,
      bio: data.bio,
      hash: await Password.hash(data.password),
      role: Role.GUEST,
    });

    await this.users.save(user);
    session.user = user;
    return { status: 200, data: { success: true } };
  }

  @Post("/logout")
  async logout(@Session() session: any) {
    delete session.user;
    return {status: 200, data: {success: true}};
  }

  @Get("/me")
  async me(@Session("user") user?: User) {
    if (!user) return { status: 200, data: { guest: true } };
    const {username, email, bio, avatar, role} = await this.users.findOneBy({ uuid: user.uuid });
    return {status: 200, data: {guest: role === Role.GUEST, username, email, bio, avatar, role}};
  }

  @Post("/verify")
  async verifyEmail(
    @Query("uuid") uuid: string,
    @Query("token") token: string,
    @Session() session: any,
  ) {
    if (!uuid || !token) return {
      status: 400,
      data: { success: false },
    }

    const tokenData = await this.tokens.findOne({
      where: { uuid: token, user: { uuid } },
      withDeleted: false,
    });
    if (!tokenData || tokenData.expires < new Date()) return {
      status: 400,
      data: { success: false },
    };

    const user = await this.users.findOne({ where: { uuid } });
    if (user.role === Role.GUEST) user.role = Role.USER;
    await this.users.save(user);
    session.user = user;

    await this.tokens.softDelete(tokenData.uuid);
    return { status: 200, data: { success: true } };
  }

  @Post("/send-email-verification")
  async sendVerification(@Session("user") user?: User) {
    if (!user) return {
      status: 401,
      data: { success: false },
    };

    const token = this.tokens.create({
      purpose: TokenPurpose.EMAIL_VERIFICATION,
      expires: relativeDate("5 days"),
      user,
    });
    await this.tokens.save(token);
    await sendVerificationEmail(token).catch(console.error);

    return { status: 200, data: { success: true } };
  }

  @Post("/send-password-reset")
  async sendPasswordReset(@Body("username") username: string) {
    const user = await this.users.findOne({
      where: [{username}, {email: username}]
    });
    if (!user) return {status: ResponseStatus.NOT_FOUND, data: {success: false}};

    const token = this.tokens.create({
      purpose: TokenPurpose.PASSWORD_RESET,
      expires: relativeDate("1 day"),
      user,
    });
    await this.tokens.save(token);
    await sendPasswordResetEmail(token);

    return { status: 200, data: { success: true } };
  }
}