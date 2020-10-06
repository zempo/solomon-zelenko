<script>
  import { fade } from "svelte/transition";
</script>

<div transition:fade={{ duration: 450 }}>
  <slot />
</div>
