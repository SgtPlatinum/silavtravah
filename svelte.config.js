import adapter from '@mankins/svelte-adapter-express';
import {vitePreprocess} from '@sveltejs/kit/vite';
import path from "node:path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      serverFile: path.join(path.resolve(), "./adapter/server.js"),
    }),
  },
};

export default config;
