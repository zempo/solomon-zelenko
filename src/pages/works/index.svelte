<script>
  import { fade } from "svelte/transition";
  import { url } from "@sveltech/routify";
</script>

<style type="text/scss">
  @import "../../scss/config";
  @import "../../scss/Main.scss";
</style>

<svelte:head>
  <title>Works</title>
</svelte:head>

<section class="pg about-pg" in:fade={{ duration: 500 }}>
  <h1>What does Solomon Code?</h1>
  <p>Apps which I have built or contributed to</p>
  <ul>
    <li>
      <a href={$url('works/foo')}>Foo</a>
    </li>
    <li>
      <a href={$url('works/bar')}>Bar</a>
    </li>
    <li>
      <a href={$url('works/lum')}>Lum</a>
    </li>
  </ul>
</section>
