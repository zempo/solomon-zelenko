import { wrap } from "svelte-spa-router/wrap";
// components
import Home from "./routes/Home.svelte";
import About from "./routes/About.svelte";
import Loading from "./tools/utils/Loading.svelte";
import NotFound from "./tools/utils/NotFound.svelte";

// <!-- to-do: add pulsing logo loader,
// check if it takes too long
// 'cd /solomon/the_good_stuff...'
// 'Fetching my life story...'
// 'Compiling Bytes & Snippets...'
// 'Calling Tech Support...'
// 'cd /solomon...' -->

export default {
  // exact
  "/": Home,
  "/about": About,
  // wrap works
  "/works/:slug": wrap({
    asyncComponent: () =>
      import("./routes/Works.svelte").then((component) => {
        return new Promise((resolve) => {
          // Wait .5 seconds before returning
          setTimeout(() => resolve(component), 500);
        });
      }),
    loadingComponent: Loading,
    loadingParams: {
      message: "Compiling the_good_stuff...",
    },
  }),
  // wrap bytes and snippets
  "/blog/:slug": wrap({
    asyncComponent: () =>
      import("./routes/Blog.svelte").then((component) => {
        return new Promise((resolve) => {
          // Wait .5 seconds before returning
          setTimeout(() => resolve(component), 500);
        });
      }),
    loadingComponent: Loading,
    loadingParams: {
      message: "Fetching Bytes & Snippets...",
    },
  }),
  // wrap support
  "/support": wrap({
    asyncComponent: () =>
      import("./routes/Support.svelte").then((component) => {
        return new Promise((resolve) => {
          // Wait .5 seconds before returning
          setTimeout(() => resolve(component), 500);
        });
      }),
    loadingComponent: Loading,
    loadingParams: {
      message: "Calling Tech Support...",
    },
  }),
  // Catch-all
  "*": NotFound,
};
