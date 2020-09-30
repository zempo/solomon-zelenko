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
    figure {
      text-align: center;
      img {
        margin: auto;
        max-width: 500px;
      }
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
  <header role="banner">
    <figure>
      <img src="https://i.imgur.com/l7nuNN8.png" alt="Solomon" />
    </figure>
    <h2>Codes {codesAnimation()}</h2>
    <img
      class="sol-img"
      src="https://i.imgur.com/l7nuNN8.png"
      alt="Solomon striking a dramatic pose" />
  </header>
</section>

<!-- routify:options index=10 -->
<!-- routify:options title="home" -->
