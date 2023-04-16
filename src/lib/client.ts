import axios from "axios";

export const client = axios.create({
  baseURL: `${import.meta.env.SSR ? "http://localhost:3000/" : import.meta.env.BASE_URL}api`
});
