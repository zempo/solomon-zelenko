<script>
  import { fade } from "svelte/transition";
  import { url } from "@sveltech/routify";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<section class="pg about-pg" in:fade={{ duration: 500 }}>
  <h1>Bytes & Snippets</h1>
  <h2>Welcome to my blog</h2>
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
