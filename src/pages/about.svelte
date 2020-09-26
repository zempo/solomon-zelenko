<script>
  import { fade } from "svelte/transition";
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Main.scss";
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<section class="pg about-pg" in:fade={{ duration: 500 }}>
  <h1>Who is Solomon?</h1>
</section>
