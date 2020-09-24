<script>
  export let name;
</script>

<style type="text/scss">
  @import "scss/config";

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    h1 {
      color: map-get($colors, focus);
      font-family: Inter, Source Sans Pro, Helvetica Neue, Arial, sans-serif;
      font-size: 4em;
      font-weight: 700;
      @include mq("tablet") {
        color: map-get($colors, success);
      }
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
</main>
