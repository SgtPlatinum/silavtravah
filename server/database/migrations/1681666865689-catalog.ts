import { MigrationInterface, QueryRunner } from "typeorm"
import {Product} from "../entities";
import {faker} from "@faker-js/faker";

export class Catalog1681666865689 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const repo = queryRunner.manager.getRepository(Product);
    faker.setLocale("ru");
    const products = Array(100).fill(undefined).map(this.fakeProduct);
    await repo.save(products);
  }

  fakeProduct(): Partial<Product> {
    return {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      tags: ["fake"],
      price: +faker.commerce.price(),
      image: faker.image.imageUrl(512, 512),
    };
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const repo = queryRunner.manager.getRepository(Product);
    await repo.createQueryBuilder().delete().from(Product).where({
      tags: ["fake"]
    }).execute();
  }

}
