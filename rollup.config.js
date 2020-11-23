import { createRollupConfigs } from "./scripts/base.config.js";
import slug from "remark-slug";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import replace from "@rollup/plugin-replace";

const production = !process.env.ROLLUP_WATCH;

export const config = {
  staticDir: "static",
  distDir: "dist",
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: (cfg) => cfg,
  svelteWrapper: (svelte) => {
    svelte.preprocess = [
      preprocess(),
      mdsvex({
        remarkPlugins: [slug],
        layout: {
          blog: "src/components/BlogPost.svelte",
          works: "src/components/WorksPost.svelte",
        },
        extension: "svx",
      }),
    ];
    svelte.extensions = [".svelte", ".md", ".svx"];
    return svelte;
  },
  swWrapper: (cfg) => cfg,
  plugins: [
    replace({
      process: JSON.stringify({
        env: {
          API_KEY: process.env.API_KEY,
          APP_NAME: process.env.APP_NAME,
          APP_ID: process.env.APP_ID,
          MSG_ID: process.env.MSG_ID,
          MEASUREMENT_ID: process.env.MEASUREMENT_ID,
          ENVS_WORK: process.env.ENVS_WORK
        }
      }),
    })
  ]
}; 

const configs = createRollupConfigs(config);

export default configs;

/** wrapper example 1 */
// svelteWrapper: (cfg, ctx) => ({
//   ...cfg,
//   preprocess: mdsvex({ extension: '.md' }),
// })

/** wrapper example 2 */
// rollupWrapper: cfg => {
//   cfg.plugins = [...cfg.plugins, myPlugin()]
//   return cfg
// }
