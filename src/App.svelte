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
    }
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
</main>
