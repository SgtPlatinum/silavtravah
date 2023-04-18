import { client } from "../lib/client";

export async function load() {
  const { data: user } = await client.get("/auth/me");
  const { data: cart } = await client.get("/cart");
  return { user, cart };
}
