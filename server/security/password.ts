import crypto from "node:crypto";
import { promisify } from "node:util";
import {env} from "../util";

export interface PasswordMeta extends AlgoMeta{
  hash: string;
  salt: string;
}

export interface AlgoMeta {
  digest: string;
  iterations: number;
  passwordLength: number;
  saltLength: number;
}

function metaFromEnv(): AlgoMeta {
  return {
    digest: env("security_digest", "sha512"),
    iterations: env("security_iterations", 10000),
    passwordLength: env("security_password_length", 256),
    saltLength: env("security_password_length", 128)
  };
}

export async function hashAndSalt(password: string): Promise<PasswordMeta> {
  const meta = metaFromEnv();
  const salt = generateSalt(meta.saltLength);
  return hash(password, salt, meta);
}

export async function hash(password: string, salt: string, meta: AlgoMeta): Promise<PasswordMeta> {
  const hash = await promisify(crypto.pbkdf2)(
    password,
    salt,
    meta.iterations,
    meta.passwordLength,
    meta.digest
  ).then(it => it.toString("base64"));
  return { ...meta, hash, salt };
}

export async function verify(password: string, meta: PasswordMeta) {
  const attempt = await hash(password, meta.salt, meta);
  return attempt.hash === meta.hash;
}

export function generateSalt(length: number) {
  return crypto.randomBytes(length).toString("base64");
}