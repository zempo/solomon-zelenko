<script>
  let Logo = "svgs/Logo.svg";
  let Hero = "images/assets/hero-img.png";

  const codesAnimation = () => {
    return "Things";
  };
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/utils";

  .pg {
    @extend %homepage;
    .pg-header {
      background: map-get($colors, app-gray-lighter);
      overflow: hidden;
      @include mq("desktop") {
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        padding: 14rem 2rem 0;
      }
      .wrapper {
        width: 100%;
        text-align: center;
        margin: auto;
        padding: 10vh 0 0;
        figure {
          width: 85%;
          max-width: 400px;
          margin: auto;
          text-align: right;
          img {
            width: 100%;
            margin-right: 1rem;
            margin-bottom: 0.5rem;
          }
        }
        @include mq("tablet") {
          padding: 15vh 0 0;
          figure {
            width: 85%;
            max-width: 500px;
          }
        }
        @include mq("desktop") {
          padding: 0 auto;
          width: 55%;
          position: relative;
          top: -11rem;
          figure {
            max-width: 550px;
            margin: auto;
            position: relative;
            left: -10%;
          }
        }
      }
      figcaption {
        @extend %homeheader;
      }
      .sol-img {
        margin: 5vh auto 0;
        width: 80%;
        max-width: 600px;
        position: relative;
        bottom: -1rem;
        @include mq("desktop") {
          margin: 0 auto;
          width: 45%;
          max-width: 700px;
        }
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
  <header class="pg-header" role="banner" aria-label="Hero Image">
    <div class="wrapper">
      <figure>
        <img src={Logo} alt="Solomon" />
        <figcaption>Codes {codesAnimation()}</figcaption>
      </figure>
    </div>
    <img class="sol-img" src={Hero} alt="Solomon striking a dramatic pose" />
  </header>
  <section>
    <h2 class="light">Blog Posts</h2>
  </section>
</section>

<!-- routify:options index=10 -->
<!-- routify:options title="home" -->
