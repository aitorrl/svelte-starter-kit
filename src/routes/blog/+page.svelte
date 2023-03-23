<script>
  import { goto } from "$app/navigation";
  import { convertDateToString } from "$lib/utils.js";
  export let data;
</script>

<div class="blog-posts">
  {#each data.sortedPosts as post}
    <div
      class="blog-post"
      on:click={goto(`/blog/${post.slug}`)}
      on:keydown={goto(`blog/${post.slug}`)}
    >
      <p>{convertDateToString(post.date)}</p>
      <a href={`blog/${post.slug}`}>{post.title}</a>
      {#if post.image}
        <img src={`${post.image}`} alt="blog post" />
      {:else}
        <p>{post.description}</p>
      {/if}
      <div class="tags">
        {#each post.tags as tag}
          <p class="tag">#{tag}</p>
        {/each}
      </div>
    </div>
    <br />
  {/each}
</div>
