<script>
  // eslint-disable
  import { url, route } from "@sveltech/routify";
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/utils";

  .pg {
    @extend %page;
    h1 {
      @extend %header1;
    }
    p {
      @extend %paragraph;
    }
  }
</style>

<section class="pg err-pg">
  <h1 class="marker">Oops</h1>
  <p>
    I don't have a
    <strong>{$route.leftover}</strong>
    page, right now.
  </p>
  <p>
    Let's
    <a href={$url('../')}>go back</a>
    ?
  </p>
</section>
