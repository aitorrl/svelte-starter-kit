<script>
    export let data;
    import { convertDateToString } from '$lib/utils.js'
</script>
  
  <article>
      <p>{convertDateToString(data.date)}</p>
      <h1>{ data.title }</h1>
      <div class="tags">
        {#each data.tags as tag}
            <p class="tag">#{tag}</p>
        {/each}
      </div>
      <svelte:component this={data.content} />
  </article>

  <style lang="scss">
    article {
      margin: 0 auto;
      max-width: 42rem;
      margin-top: 4rem;
    }

    .tags {
        @include tags();
        margin-top: -1rem;
    }
  </style>