<script>
	import "../app.css";
	import './styles.css';
</script>


<svelte:head>
  <title>Title</title>
  <meta name="title" content="Title | Bikolabs" />
  <meta name="description" content="Description" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&display=swap" rel="stylesheet" />
</svelte:head>

<div>
	<main>
		<slot />
	</main>
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}


</style>
