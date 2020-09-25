<script>
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>

<style type="text/scss">
  @import "scss/config";
  @import "scss/Main.scss";

  main {
    text-align: center;
    margin: 0 auto;
  }
</style>

<header>
  <nav>
    <a href="#/">Home</a>
    <a href="#/about">About</a>
    <a href="#/works">Works</a>
    <a href="#/blog">Bytes & Snippets</a>
    <a href="#/support">support</a>
  </nav>
</header>
<main>
  <Router {routes} restoreScrollState={true} />
</main>
