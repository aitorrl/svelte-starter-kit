import { defineMDSveXConfig as defineConfig } from "mdsvex";
import { fileURLToPath } from "url";
import * as path from "path";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: { 
    mds: path.join(dirname, "./src/routes/mdsvex/+layout.svelte") },
});

export default config;
