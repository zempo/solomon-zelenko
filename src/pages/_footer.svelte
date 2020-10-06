<script>
  import { layout, url, isActive } from "@sveltech/routify";

  const entities = ["&trade;", "&copy;"];

  const footerLinks = [
    { path: "/index", title: "home" },
    { path: "/about", title: "about" },
    { path: "/blog", title: "blog" },
    { path: "/works", title: "works" },
    { path: "/merch", title: "merch" },
    { path: "/contact", title: "contact" }
  ];
</script>

<style type="text/scss">
  @import "../scss/config";
  @import "../scss/Footer.scss";
</style>

<footer class="app-footer">
  <h1>solomon zelenko</h1>
  <h2>
    code your vision
    {@html entities[0]}
  </h2>
  <nav role="navigation">
    <ul class="footer-links">
      {#each footerLinks as { path, title }}
        <li>
          <a href={$url(path)} class:active={$isActive(path)}>{title}</a>
        </li>
      {/each}
    </ul>
  </nav>
</footer>

<!-- <header> -->
<!-- to do: toggle mobile nav with screen width hook, 
apparently, we should only be hiding the link lists,
 not the nav -->
<!-- <nav role="navigation"> -->
<!-- <a=”#menu” id=”menu-toggle” class=”menu-toggle” aria-label=”Open the menu”>
    <i>Your icon goes here</i>
    accessible burger menu icon
    hides on mobile
    -->
<!-- <ul class="main-links"> -->
<!-- {#each links as [path, name]}
        <li>
          <a href={$url(path)} class:selected={$isActive(path)}>{name}</a>
        </li>
      {/each} -->
<!-- current top projects links below here  -->
<!-- </ul> -->
<!-- <ul class="mobile-links">
         display me on bottom, with icons
          {#each links as [path, name]}
        <li>
          <a href={$url(path)} class:selected={$isActive(path)}>{name}</a>
        </li>
      {/each}
    </ul> -->
<!-- </nav> -->
<!-- smaller logo goes here,
         moves to right in mobile
       -->

<!-- center text, shows which page user is on, goes center in mobile    -->

<!-- search button/bar goes here 
         moves to left side, in mobile -->
<!-- </header> -->
