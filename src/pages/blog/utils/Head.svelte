<script>
  export let title;
  export let thumbnail;
  export let color;
</script>

<style type="text/scss">
  @import "../../../scss/config";
  @import "../../../scss/utils.scss";

  header {
    box-sizing: border-box;
    width: 100%;
    padding: 20vh 1rem 40vh;
    margin-bottom: 4rem;
    h1 {
      color: map-get($colors, app-white);
      @extend %header1;
    }
  }
</style>

<svelte:head>
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="https://i.imgur.com/Z1feSqz.png" />
</svelte:head>

<header style={`background: ${color}`}>
  <h1>{title}</h1>
</header>
