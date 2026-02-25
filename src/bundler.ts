import { build } from "bun"

await build({
  entrypoints: ["src/index.tsx"],
  outdir: "build"
})