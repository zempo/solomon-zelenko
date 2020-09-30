<script>
  import { fade } from "svelte/transition";
  import { metatags, page } from "@sveltech/routify";
  import Navigation from "./_navigation.svelte";
  import SrcOnGithub from "../components/SrcOnGithub.svelte";

  $: metatags.title = `SZ - ${$page.title}`;
  metatags.description = "Description coming soon...";
</script>

<Navigation />
<main>
  <slot />
</main>

<!-- <SrcOnGithub /> -->
