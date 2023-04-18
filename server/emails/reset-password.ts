import { Token } from "../database";
import { email, emailUser } from "../email";
import { tokenLink } from "./token-link";

export async function sendPasswordResetEmail(token: Token) {
  await email.sendMail({
    from: `"${emailUser.name}" ${emailUser.email}`,
    to: token.user.email,
    subject: "Сброс пароля",
    text: `Дорогой пользователь, от вашего аккаунта магазина "Аленький Цветочек" поступил запрос на восстановление пароля. Пожалуйста, пройдите по ссылке чтобы сбросить ваш пароль: \n${tokenLink(token)} .`,
  });
}
