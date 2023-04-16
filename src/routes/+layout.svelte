<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>

	</footer>
</div>

<style>
	.app {
		@apply flex flex-col h-screen overflow-y-scroll;
	}

	main {
		@apply flex flex-col p-1 w-full max-w-[64rem] mx-auto flex-1;
	}

	footer {
		@apply flex flex-col justify-center items-center p-0.5;
	}

	footer a {
		@apply font-bold;
	}
</style>
