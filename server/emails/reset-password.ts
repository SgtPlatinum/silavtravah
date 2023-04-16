import { Token } from "../database";
import { email, emailUser } from "../email";
import { tokenLink } from "./token-link";

export async function sendPasswordResetEmail(token: Token) {
  await email.sendMail({
    from: `"${emailUser.name}" ${emailUser.email}`,
    to: token.user.email,
    subject: "Password Reset",
    text: `Reset your password at\n${tokenLink(token)}`,
  });
}
