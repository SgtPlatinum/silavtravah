import z from "zod";
import {uniqueField} from "../util/unique-field";
import {User} from "../database";

export const UserRegistrationSchema = z.object({
  email: z.string().email().refine(uniqueField(() => User, "email", "email already registered")),
  username: z.string().min(3).max(20).refine(uniqueField(() => User, "email", "username already taken")),
  password: z.string().min(8),
  bio: z.string().optional(),
});

export const UserUpdateSchema = z.object({
  password: z.string().min(8).optional(),
  bio: z.string().optional(),
})