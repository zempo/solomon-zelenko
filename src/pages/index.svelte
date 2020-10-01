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
    header {
      // border: 1rem solid map-get($colors, app-gray-med);
      // border-radius: 0.5rem;
      // box-shadow: inset -1px 2px 2px map-get($colors, app-dark-light),
      //   0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
      //   0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);
      background: map-get($colors, app-gray-lighter);
      overflow: hidden;
      @include mq("desktop") {
        display: flex;
        justify-content: center;
        flex-direction: row-reverse;
        padding: 10vh 2rem 0;
      }
      .wrapper {
        width: 100%;
        text-align: center;
        margin: auto;
        padding: 10vh 0 0;
        figure {
          max-width: 90%;
          text-align: right;
          img {
            margin: auto;
            width: 100%;
          }
        }
        @include mq("tablet") {
          padding: 15vh 0 0;
          figure {
            max-width: 80%;
          }
        }
        @include mq("desktop") {
          padding: 0 auto;
          width: 50%;
          position: relative;
          top: -20vh;
          figure {
            max-width: 500px;
            margin: auto;
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
        @include mq("desktop") {
          margin: 0 auto;
          width: 50%;
          max-width: 700px;
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
    <div class="wrapper">
      <figure>
        <img src={Logo} alt="Solomon" />
        <figcaption>Codes {codesAnimation()}</figcaption>
      </figure>
    </div>
    <img class="sol-img" src={Hero} alt="Solomon striking a dramatic pose" />
  </header>
</section>

<!-- routify:options index=10 -->
<!-- routify:options title="home" -->
