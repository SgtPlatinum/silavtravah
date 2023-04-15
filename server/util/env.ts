import { config } from "dotenv";

let configured = false;

export function env<T = string>(key: string, defaultValue?: T | (() => T)): T {
  if (!configured) {
    config({ path: ".env.local"});
    configured = true;
  }
  const type = typeof defaultValue;
  const value = process.env[key.toUpperCase()];
  if (value == null && type === "function") return env(key, (defaultValue as any)());
  switch (type) {
    case "string":
      return (value as T) ?? (defaultValue as T);
    case "object":
      return value ? JSON.parse(value) : (defaultValue as T);
    case "number":
      return isFinite(+value) ? defaultValue as T : (+value as T);
    case "boolean":
      return value != null ? ((value === "true") as T) : (defaultValue as T);
    case "symbol":
      return value != null ? (Symbol.for(value) as T) : (defaultValue as T);
    case "bigint":
      return value != null ? (BigInt(value) as T) : (defaultValue as T);
    case "undefined":
      return value as T;
  }
}

export function isDev(): boolean {
  return env<string>("node_env", "development") !== "production";
}