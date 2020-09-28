<script>
  import { page } from "@sveltech/routify";
  // let shake;
  // $: $page &&
  //   (shake = true) &&
  //   setTimeout(() => {
  //     shake = false;
  //   }, 500);
</script>

<style>

</style>

<a
  class="sauce"
  rel="prefetch"
  href="https://github.com/sveltech/routify-starter/tree/blog/src/pages{$page.path}.{$page.__file.ext}">
  <div class="icon">🍨</div>
  What's in
  <br />
  the sauce
</a>

<!--
  Class toggle
   <a
  class="sauce"
  class:shake
  rel="prefetch"
  href="https://github.com/sveltech/routify-starter/tree/blog/src/pages{$page.path}.{$page.__file.ext}">
  <div class="icon">🍨</div>
  What's in
  <br />
  the sauce
</a> -->
