// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import {client} from "../lib/client";

export const prerender = true;

export async function load() {
  const { data: products } = await client.get("/products");
  return { products };
}