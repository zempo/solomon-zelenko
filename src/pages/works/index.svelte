<script>
  import { url, layout } from "@sveltech/routify";
  import marked from "marked";

  const works = [
    {
      title: "Above the Line",
      path: "atl",
      content: `# Hello World`,
      summary: "Build using technology"
    },
    {
      title: "Just the Occasion",
      path: "jto",
      content: `# Hello World`,
      summary: "Build using technology"
    }
  ];
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
    {#each works as { title, path, content, summary }}
      <li class="work">
        <a class="title" href={$url()}>{title}</a>
        {@html marked(summary)}
      </li>
    {/each}
  </ul>
</section>
