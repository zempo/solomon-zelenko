<script>
  import { fade } from "svelte/transition";
  console.log("works");
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Main.scss";
</style>

<svelte:head>
  <title>Works</title>
</svelte:head>

<section class=".works-pg" in:fade={{ duration: 500 }}>
  <h1>Works</h1>
</section>
