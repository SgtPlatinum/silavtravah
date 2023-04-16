import { Token } from "../database";
import { email, emailUser } from "../email";
import { tokenLink } from "./token-link";

export async function sendVerificationEmail(token: Token) {
  await email.sendMail({
    from: `"${emailUser.name}" ${emailUser.email}`,
    to: token.user.email,
    subject: "Email Verification",
    text: `Please verify your email at\n${tokenLink(token)}`,
  });
}
