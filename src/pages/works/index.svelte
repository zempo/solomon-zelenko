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
  @import "../../scss/utils.scss";

  .pg {
    @extend %page;
    .pg-header {
      @extend %pageheader;
    }
    h1 {
      @extend %header1;
    }
    h2 {
      @extend %header2;
    }
    ul {
      // TODO, make content list utility
      @extend %list1;
    }
  }
</style>

<section class="pg blog-pg">
  <header class="pg-header">
    <h1>What does Solomon build?</h1>
    <h2 class="sub-h2">
      I build responsive apps with all the
      <strong>works</strong>
    </h2>
  </header>

  <ul class="works">
    {#each works as { meta, path }}
      <li class="work">
        <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
        {@html marked(meta.frontmatter.overview)}
      </li>
    {/each}
  </ul>
</section>
