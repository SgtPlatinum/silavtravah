import {db} from "../database";
import {EntityTarget} from "typeorm";


export function InjectRepo(entity: () => EntityTarget<unknown>) {
  return function(proto: unknown, propertyKey: string | symbol) {
    Object.defineProperty(proto, propertyKey, {
      get: () => {
        console.log("access");
        return db.getRepository(entity())
      },
    });
  }
}