<script lang="ts">
	import { client } from "../lib/client";
	import { initUserContext } from "../lib/user";
	import Header from './Header.svelte';
	import './styles.css';
	import {initCartContext} from "../lib/cart.js";

	export let data: any;
	const user = initUserContext(data.user);
	const cart = initCartContext(data.cart, () => user.loggedIn.get());
	const { count } = cart;

	if (typeof window !== "undefined") Object.assign(window, { user, cart, client });
</script>

<div class="app">
	<Header count={$count} />

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
