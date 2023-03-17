<script>
  export let title;
</script>

<svelte:head>
  <title>{title} | Title </title>
</svelte:head>

<div class="max-w-xl mx-auto py-6">
  <div>
    <a href="/mdsvex">Atras</a>
  </div>
  <h1>
    MDSVEX layout
  </h1>
  <slot />
</div>
