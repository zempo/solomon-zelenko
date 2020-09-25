<script>
  import { fade } from "svelte/transition";
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Main.scss";
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<section class=".about-pg" in:fade={{ duration: 500 }}>
  <h1>Who is Solomon?</h1>
  <!-- to:do, give h3 font, add picture cutout here -->
  <h2>I am a Software Engineer living in Irvine, CA</h2>
  <!-- Humorist, Bread Baker, Writer, Singer, Slam Poet, A11y, Yogi, Human -->
  <!-- 3 icon menu, arranged around a circle (lightbulb for 'goals', monitor for
  'Tools', save icon for 'story') -->
</section>
