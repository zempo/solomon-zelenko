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
      @include font-size($bigh-font-sizes);
    }
    p {
      @extend %paragraph;
    }
    strong {
      display: inline-block;
      font-style: italic;
      margin: auto 0.5rem;
    }
  }
</style>

<section class="pg err-pg">
  <h1>Fuck.</h1>
  <p>
    I don't have a
    <strong>/{$route.leftover}</strong>
    page, right now.
  </p>
  <p>
    Let's
    <a href={$url('/index')}>go back</a>
    ?
  </p>
</section>
