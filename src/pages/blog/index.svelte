<script>
  // import { blogPosts } from "../../global/functions/getFiles.js";
  import { fade } from "svelte/transition";
  import { url } from "@sveltech/routify";
</script>

<style type="text/scss">
  @import "../../scss/config";
  @import "../../scss/Main.scss";
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<section class="pg blog-pg" in:fade={{ duration: 500 }}>
  <h1>Snippets.md</h1>
  <p>Perspective && Markdown</p>
  <ul>
    <li>
      <a href={$url('blog/foo')}>Foo</a>
    </li>
    <li>
      <a href={$url('blog/bar')}>Bar</a>
    </li>
    <li>
      <a href={$url('blog/lum')}>Lum</a>
    </li>
  </ul>
</section>
