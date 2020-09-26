<script>
  import { url, isActive, route } from "@sveltech/routify";

  const links = [
    ["./index", "home"],
    ["./about", "about"],
    ["./works", "works"],
    ["./blog", "blog"],
    ["./merch", "merch"],
    ["./help", "help"]
  ];
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Main.scss";
  .err-nav {
    padding-top: 2rem;
    ul {
      text-transform: capitalize;
      li {
        margin: 1rem;
        display: inline-block;
      }
    }
  }
</style>

<section class="pg err-pg">
  <h1 class="marker">Oops!</h1>
  <p>
    I can't find the
    <strong>{$route.leftover}</strong>
    page...
  </p>
  <br />
  <p>Would these links cheer you up?</p>

  <nav class="err-nav" role="navigation">
    <ul>
      {#each links as [path, name]}
        <li>
          <a href={`${path}`} class:selected={$isActive(path)}>{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</section>
