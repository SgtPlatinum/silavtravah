import nodemailer from "nodemailer";
import {env} from "./util";

export const emailUser = {
  email: env("main_username"),
  name: "No Reply"
};
export function createEmailTransport() {
  return nodemailer.createTransport({
    secure: false,
    service: "Zoho",
    host: env("mail_host"),
    port: env("mail_port", 25),
    auth: {
      user: env("mail_username"),
      pass: env("mail_password"),
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export const email = createEmailTransport();
