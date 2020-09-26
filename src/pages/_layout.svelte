<script>
  import Nav from "../Nav.svelte";
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Main.scss";
</style>

<div class="container">
  <Nav />
  <main>
    <slot />
  </main>
</div>
