<script>
  import { fade } from "svelte/transition";
  import { cubicIn } from "svelte/easing";
</script>

<div transition:fade={{ duration: 400, easing: cubicIn }}>
  <slot />
</div>
