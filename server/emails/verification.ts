import { Token } from "../database";
import { email, emailUser } from "../email";
import { tokenLink } from "./token-link";

export async function sendVerificationEmail(token: Token) {
  await email.sendMail({
    from: `"${emailUser.name}" ${emailUser.email}`,
    to: token.user.email,
    subject: "Подтверждение электронной почты",
    text: `Здравствуйте, наш новый клиент магазина "Аленький Цветочек"! Чтобы подтвердить Вашу электронную почту, пройдите по ссылке далее: \n${tokenLink(token)} .
    Если вы не регистрировались в магазине "Аленький цветочек", ничего не делайте.`,
  });
}
