import { createStore, deriveStore } from "@propero/easy-store";
import { getContext, setContext } from "svelte";
import type { User } from "../../server/database";
import { client } from "./client";

const USER_CONTEXT = Symbol("user");

export function createUserStore(user?: User | { guest: true }) {
  const store = createStore(user ?? { guest: true });
  const loggedIn = deriveStore([store], user => !!(user as any).username);
  async function logout() {
    await client.post("/auth/logout");
    await refresh();
  }

  async function login(username: string, password: string) {
    await client.post("/auth/login", { username, password });
    await refresh();
  }

  async function register(username: string, password: string, email: string, bio?: string, avatar?: string) {
    await client.post("/auth/register", { username, password, email, bio, avatar });
    await refresh();
  }

  async function sendValidationEmail() {
    await client.post("/auth/send-email-verification");
  }

  async function sendPasswordResetEmail(username: string) {
    await client.post("/auth/send-password-reset", { username });
  }

  async function verify(uuid: string, token: string) {
    await client.post("/auth/verify", {}, { params: { uuid, token } });
    await refresh();
  }

  async function refresh() {
    const { data } = await client.get("/auth/me");
    store.set(data);
  }

  return {
    user: store,
    loggedIn,
    refresh,
    verify,
    sendPasswordResetEmail,
    sendValidationEmail,
    register,
    login,
    logout,
  };
}

export function initUserContext(user?: User | { guest: true }) {
  const store = createUserStore(user);
  setContext(USER_CONTEXT, store);
  return store;
}

export function getUserContext() {
  return getContext<ReturnType<typeof createUserStore>>(USER_CONTEXT);
}
