<script>
  import { url, layout } from "@sveltech/routify";
  import marked from "marked";

  const works = $layout.parent.children
    .filter(c => c.meta["frontmatter"])
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );
</script>

<style type="text/scss">
  @import "../../scss/config";
  @import "../../scss/Main.scss";
</style>

<section class="pg blog-pg">
  <h1>What does Solomon build?</h1>
  <h2 class="sub-h2">
    I build responsive apps with all the
    <strong>works</strong>
  </h2>

  <ul class="works">
    {#each works as { meta, path }}
      <li class="work">
        <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
        {@html marked(meta.frontmatter.overview)}
      </li>
    {/each}
  </ul>
</section>
