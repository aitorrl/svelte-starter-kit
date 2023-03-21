<script>
  export let title;
</script>

<svelte:head>
  <title>{title} | Title </title>
</svelte:head>

<div class="max-w-xl mx-auto py-6">
  <h1>
    MDSVEX layout
  </h1>
  <slot />
</div>
