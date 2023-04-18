import { createStore, deriveStore } from "@propero/easy-store";
import { getContext, setContext } from "svelte";
import type { Product } from "../../server/database";
import { client } from "./client";

export interface ProductWithAmount extends Product {
  amount: number;
}

export interface ShoppingCart {
  products: ProductWithAmount[];
}

const CART_CONTEXT = Symbol("cart");
const cartKey = "subas:cart";

export function createCartStore(initialProducts: ProductWithAmount[] = [], withUser: () => boolean) {
  const store    = createStore<ShoppingCart>({ products: initialProducts }, { immediatelyNotify: true });
  const products = deriveStore([store], ({ products }) => products);
  const total    = deriveStore([products], products =>
    products.reduce((total, { price, amount }) => total + price * amount, 0)
  );

  if (!initialProducts.length && !import.meta.env.SSR) load().then().catch();
  const find = (product: Product) =>
    store.get().products.find(it => it.id === product.id);

  const replace = (product: ProductWithAmount) =>
    store.patch((cart: ShoppingCart) => {
      return {
        products: cart.products.map(it => it.id === product.id ? product : it),
      }
    });

  const add = async (product: Product, amount = 1) => {
    const match = find(product);
    if (match) await replace({ ...match, amount: match.amount + amount });
    else await store.patch(cart => ({ products: cart.products.concat({ ...product, amount }) }));
    await save();
  };

  const remove = async (product: Product, amount = Infinity) => {
    const match = find(product);
    if (!match) return;
    if (match.amount <= amount) await store.patch(cart => ({ products: cart.products.filter(it => it.id !== product.id) }));
    else await replace({ ...match, amount: match.amount - amount });
    await save();
  };

  async function load() {
    if (!withUser()) {
      if (typeof localStorage === "undefined") return;
      const item = localStorage.getItem(cartKey);
      const value: ShoppingCart = item ? JSON.parse(item) : { products: [] };
      store.set(value);
    } else {
      const { data: products } = await client.get("/cart");
      store.set({ products });
    }
  }

  async function save() {
    if (!withUser()) {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(cartKey, JSON.stringify(store.get()));
    }
    else await client.post("/cart", store.get().products);
  }

  return {
    store,
    products,
    total,
    find,
    replace,
    add,
    remove,
    load,
    save,
  }
}


export function initCartContext(products: ProductWithAmount[], withUser: () => boolean) {
  const store = createCartStore(products, withUser);
  setContext(CART_CONTEXT, store);
  return store;
}

export function getCartContext() {
  return getContext<ReturnType<typeof createCartStore>>(CART_CONTEXT);
}
