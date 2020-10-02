<script>
  import { metatags, page } from "@sveltech/routify";
  import FadeRoute from "./_fadeRoute.svelte";
  import Navigation from "./_navigation.svelte";
  // import SrcOnGithub from "../components/SrcOnGithub.svelte";

  $: metatags.title = `SZ - ${$page.title}`;
  metatags.description = "Description coming soon...";
</script>

<Navigation />
<main>
  <slot decorator={FadeRoute} />
</main>

<!-- <SrcOnGithub /> -->
