<script>
  import { url, isActive } from "@sveltech/routify";

  const links = [
    ["./index", "home"],
    ["./about", "about"],
    ["./works", "works"],
    ["./blog", "blog"],
    ["./merch", "merch"],
    ["./contact", "contact"]
  ];

  // add privacy policy?
  //
</script>

<style type="text/scss">
  @import "./scss/config";
  @import "./scss/Main.scss";

  nav {
    ul {
    }
  }
</style>

<header>
  <!-- to do: toggle mobile nav with screen width hook, 
apparently, we should only be hiding the link lists,
 not the nav -->
  <nav role="navigation">
    <!-- <a=”#menu” id=”menu-toggle” class=”menu-toggle” aria-label=”Open the menu”>
    <i>Your icon goes here</i>
    accessible burger menu icon
    hides on mobile
    -->
    <ul class="main-links">
      {#each links as [path, name]}
        <li>
          <a href={$url(path)} class:selected={$isActive(path)}>{name}</a>
        </li>
      {/each}
      <!-- current top projects links below here  -->
    </ul>
    <!-- <ul class="mobile-links">
         display me on bottom, with icons
          {#each links as [path, name]}
        <li>
          <a href={$url(path)} class:selected={$isActive(path)}>{name}</a>
        </li>
      {/each}
    </ul> -->
  </nav>
  <!-- smaller logo goes here,
         moves to right in mobile
       -->

  <!-- center text, shows which page user is on, goes center in mobile    -->

  <!-- search button/bar goes here 
         moves to left side, in mobile -->
</header>
