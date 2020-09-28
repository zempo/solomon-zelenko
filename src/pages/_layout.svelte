<script>
  import { metatags, page } from "@sveltech/routify";
  import Navigation from "./_navigation.svelte";
  import SrcOnGithub from "../components/SrcOnGithub.svelte";

  $: metatags.title = `SZ - ${$page.title}`;
  metatags.description = "Description coming soon...";
</script>

<div class="app">
  <Navigation />
  <main>
    <slot />
  </main>
</div>

<!-- <SrcOnGithub /> -->
