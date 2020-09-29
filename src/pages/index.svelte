<script>
  const codesAnimation = () => {
    return "Things";
  };
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/utils";

  .pg {
    @extend %page;
    h1 {
      @extend %header1;
    }
    h2 {
      @extend %header2;
    }
    // TODO list some content
  }
</style>

<svelte:head>
  <title>Solomon Zelenko</title>
</svelte:head>

<section class="pg home-pg">
  <h1>Solomon</h1>
  <h2>Codes {codesAnimation()}</h2>
</section>

<!-- routify:options index=10 -->
<!-- routify:options title="home" -->
