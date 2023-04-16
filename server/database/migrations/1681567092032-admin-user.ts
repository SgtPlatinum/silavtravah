import {MigrationInterface, QueryRunner} from "typeorm"
import {Role, User} from "../entities";
import {hashAndSalt} from "../../security/password";

export class AdminUser1681567092032 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const repo = queryRunner.manager.getRepository(User);
    const admin = repo.create({
      username: "admin",
      email: "admin@localhost",
      role: Role.ADMIN,
      bio: "website administrator",
      avatar: "/person-circle.svg",
      hash: await hashAndSalt("admin"),
    });
    await repo.save(admin);
    console.log(`admin user created. ${admin.username}:admin`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const repo = queryRunner.manager.getRepository(User);
    await repo.delete({
      username: "admin",
      email: "admin@localhost"
    });
  }

}
