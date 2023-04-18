import { Password } from "@propero/security";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import type {PasswordMeta} from "../../security/password";
import {passwordMeta} from "../transformer";
import {Token} from "./token";


export enum Role {
  ADMIN = "admin",
  CONTENT_MANAGER = "content_manager",
  USER = "user",
  GUEST = "guest",
}

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column("varchar")
  username: string;

  @Column("varchar", { unique: true })
  email: string;

  @Column("jsonb", { default: "{}" })
  cart: Record<number, number>;

  @Column("varchar", {
    transformer: {
      from: (it) => Password.parse(it),
      to: it => it instanceof Password ? it.toString() : Password.parse(it).toString(),
    },
  })
  hash: Password; // password hash and salt

  @Column("varchar", { nullable: true })
  avatar?: string;

  @Column("varchar", { nullable: true })
  bio?: string;

  @Column({ type: "enum", enum: Role, default: Role.GUEST })
  role: Role;

  @OneToMany(() => Token, token => token.user)
  tokens: Token[];
}
