import {defineConfig} from "tsup";

export default defineConfig(({watch}) => ({
  entry: ["server/index.ts"],
  sourcemap: !!watch,
  onSuccess: watch ? "pnpm run server:start" : undefined,
  clean: !watch,
  minify: !watch,
  dts: !watch,
  format: ["cjs", "esm"],
  target: "node16",
  outDir: "dist",
  esbuildOptions: options => Object.assign(options, {
    tsconfig: "tsconfig.node.json"
  })
}));