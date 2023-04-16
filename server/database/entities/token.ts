import {Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";

export enum TokenPurpose {
  EMAIL_VERIFICATION = "email-verification",
  PASSWORD_RESET = "password-reset",
}

@Entity("token")
export class Token {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ enum: TokenPurpose, type: "enum", default: TokenPurpose.EMAIL_VERIFICATION })
  purpose: TokenPurpose;

  @Column("timestamp")
  expires: Date;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User, user => user.tokens)
  user: User;
}
