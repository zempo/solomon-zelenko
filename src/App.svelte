<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
</script>

<style type="text/scss">
  @import "./scss/config";
  @import "./scss/Main.scss";
</style>

<main>
  <Router {routes} />
</main>
