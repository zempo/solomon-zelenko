<script>
  import { fade } from "svelte/transition";

  export let blogPosts;
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Main.scss";
</style>

<svelte:head>
  <title>Bytes and Snippets</title>
</svelte:head>

<section class=".blog-pg pg" in:fade={{ duration: 500 }}>
  <h1>Bytes & Snippets</h1>
  <h2>Welcome to my blog</h2>
  <ul>
    {#each blogPosts as post}
      <li>{post.title}</li>
    {/each}
  </ul>
</section>
