import {Get, Service} from "@propero/easy-api";
import {db} from "../database";


@Service("/metadata")
export class CmsMetadataService {
  @Get()
  async findEntities() {
    return [...db.entityMetadatasMap.entries()].map(([entity, metadata]) => {
      return {
        name: metadata.name,
        properties: metadata.columns.map(col => {
          const { propertyName, isVirtualProperty, type, isArray, isGenerated, transformer, enum: en, isNullable } = col;
          const propType = Reflect.getOwnMetadata("design:type", (entity as any).prototype, propertyName);
          const mapped = this.typeMap.get(propType) ?? propType?.name;
          return {
            name: propertyName,
            virtual: isVirtualProperty,
            columnType: type,
            propertyType: mapped,
            array: isArray,
            generated: isGenerated,
            optional: isNullable,
            transformed: !!transformer,
            enum: en
          }
        })
      }
    });
  }

  readonly typeMap = new Map<unknown, string>([
    [String, "string"],
    [Object, "object"],
    [Number, "number"],
    [BigInt, "bigint"],
    [Date, "date"],
  ]);
}