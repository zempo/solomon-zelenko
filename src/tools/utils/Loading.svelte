<script>
  import { fade } from "svelte/transition";
  // Prop exported that will be filled by the router
  export let params;
</script>

<style type="text/scss">
  @import "../../scss/config";
  @import "../../scss/Main.scss";
</style>

<section class="loader" in:fade={{ duration: 250 }}>
  <h2>{params && params.message}</h2>
</section>
