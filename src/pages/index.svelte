<script>
  let Logo = 'svgs/Logo.svg'
  let Hero = 'images/assets/hero-img.png'

  const codesAnimation = () => {
    return "Things";
  };
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/utils";

  .pg {
    @extend %homepage;
    header {
      background: map-get($colors, app-yellow);
          @include mq('desktop') {
            display: flex;
            justify-content: center;
            flex-direction: row-reverse;
            padding-top: 25vh;
      }
    figure {
      width: 100%;
      text-align: center;
      margin: auto;
      padding: 10vh 0 0;
      @include mq('tablet') {
        padding: 15vh 0 0;
      }
      @include mq('desktop') {
        padding: 0 auto;
        width: 55%;
        position: relative;
        top: -25vh;
      }
      img {
        margin: auto;
        width: 90%;
      }
    }
    figcaption {
      @extend %homeheader;
    }
    .sol-img {
      margin: 5vh auto 0;
      width: 80%;
      max-width: 600px;
      max-height: auto;  
      @include mq('desktop') {
        margin: 0 auto;
        width: 45%;
        max-width: 45%;
      }
      }
    }

    // TODO list some content
  }
</style>

<svelte:head>
  <title>Solomon Zelenko</title>
</svelte:head>

<section class="pg home-pg">
  <header role="banner" aria-label="Hero Image">
    <figure>
    <img src={Logo} alt="Solomon">
    <figcaption>Codes {codesAnimation()}</figcaption>
    </figure>
    <img
      class="sol-img"
      src={Hero}
      alt="Solomon striking a dramatic pose" />
  </header>
</section> 

<!-- routify:options index=10 -->
<!-- routify:options title="home" -->
