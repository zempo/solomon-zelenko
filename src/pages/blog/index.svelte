<script>
  import { url, layout } from "@sveltech/routify";
  import marked from "marked";

  const posts = $layout.parent.children
    .filter(c => c.meta["frontmatter"])
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );

  // apply random color to blog post tiles
  // save in state?
  // add color attribute to markdowns?
</script>

<style type="text/scss">
  @import "../../scss/config";
  @import "../../scss/Main.scss";
</style>

<section class="pg blog-pg">
  <h1>Bytes & Snippets</h1>
  <!-- categories 
    Reference

     news - bird holding newspaper (https://thenounproject.com/search/?q=news+updates&i=2389910)
     
     satire - rubber duck (https://thenounproject.com/term/rubber-duck/3402572/) 
                        this, but with a top-hat or something
     
     tutorials - duck hatchling (https://thenounproject.com/search/?q=ducklings&i=372707)
     
     snippets - bird eating (https://thenounproject.com/search/?q=feed+bird&i=3363831)

     life - duck swimming  (https://thenounproject.com/search/?q=duck&i=1994419)

    Type Keyword
    ____________________________

    -radio buttons
    all | news | satire | tutorials | snippets | life

    - sort by
    Recent ^  Popularity ^ 

    https://medium.com/search?q=this
    Reference
 -->

  <h2 class="sub-h2">
    Welcome to my
    <strong>blog</strong>
  </h2>

  <!-- then, add categories menu & search bar, here -->

  <ul class="blog-posts">
    {#each posts as { meta, path }}
      <li class="blog-preview">
        <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
        {@html marked(meta.frontmatter.summary)}
      </li>
    {/each}
  </ul>
</section>
