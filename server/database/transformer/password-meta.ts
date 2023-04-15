import {ValueTransformer} from "typeorm";
import {PasswordMeta} from "../../security/password";


export function passwordMeta(): ValueTransformer {
  return {
    to: (meta?: PasswordMeta) => meta && [
      meta.digest,
      meta.iterations,
      meta.saltLength,
      meta.passwordLength,
      meta.hash,
      meta.salt,
    ].join(":"),
    from: (str?: string) => {
      if (!str) return;
      const [digest, iterationsStr, saltLengthStr, passwordLengthStr, hash, salt] = str.split(":");
      return {
        digest,
        iterations: parseInt(iterationsStr, 10),
        saltLength: parseInt(saltLengthStr, 10),
        passwordLength: parseInt(passwordLengthStr, 10),
        hash,
        salt,
      };
    }
  }
}