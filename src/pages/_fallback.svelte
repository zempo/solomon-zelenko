<script>
  import { url, isActive, route } from "@sveltech/routify";

  const links = [
    ["./index", "home"],
    ["./about", "about"],
    ["./works", "works"],
    ["./blog", "blog"],
    ["./merch", "merch"],
    ["./contact", "contact"]
  ];
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Main.scss";
  .err-nav {
    margin-top: 1rem;
    ul {
      text-transform: capitalize;
      li {
        margin: 1rem;
        display: inline-block;
      }
    }
  }

  p {
    line-height: 3;
  }
</style>

<section class="pg err-pg">
  <h1 class="marker">Oops!</h1>
  <p>
    I can't find the
    <strong>{$route.leftover}</strong>
    page...
  </p>
  <p>Would any of these links cheer you up?</p>
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
