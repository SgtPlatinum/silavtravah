<script lang="ts">
	import CategoryGrid from "$lib/component/CategoryGrid.svelte";
	import Breadcrumbs from "$lib/component/Breadcrumbs.svelte";
	import ProductGrid from "$lib/component/ProductGrid.svelte";
	import PageReviewGrid from "$lib/component/PageReviewGrid.svelte";
	import AboutSection from "$lib/component/AboutSection.svelte";

	export let data: any;
</script>

<svelte:head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Магазин "Аленький Цветочек"</title>
	<meta name="description" content="Магазин Аленький Цветочек" />
</svelte:head>

<section>
	<Breadcrumbs title="Home" links={[{ name: "Home" }]} />
	<AboutSection />
	<CategoryGrid />
	<ProductGrid products={data.products} count={12} />
	<PageReviewGrid />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
