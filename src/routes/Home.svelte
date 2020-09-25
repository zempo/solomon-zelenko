<script>
  import { fade } from "svelte/transition";
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Main.scss";
</style>

<svelte:head>
  <title>Solomon Zelenko</title>
</svelte:head>

<section class=".home-pg pg" in:fade={{ duration: 500 }}>
  <h1>Home</h1>
  <!-- to:do,
     overview of some projects (random 3 in a tile),
    overview of some coding/tutorial snippets (random 3 in a tile),
     link to contact form on bottom -->
</section>
