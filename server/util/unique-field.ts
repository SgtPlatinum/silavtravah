import {EntityTarget} from "typeorm";
import {db} from "../database";


export function uniqueField<T = unknown>(entity: () => EntityTarget<T>, field: keyof T, message: string) {
  return async (value: string) => {
    if (await db.getRepository(entity()).exist({ [field]: value as never }))
      return message;
    return true;
  }
}
