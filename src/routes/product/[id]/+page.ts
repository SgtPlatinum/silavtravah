import {client} from "../../../lib/client";

export async function load({ params }: any) {
  const id = params.id;
  const { data: product } = await client.get(`/products/${id}`);
  return {
    product
  };
}