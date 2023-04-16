<script lang="ts">
import ProductCard from "./ProductCard.svelte";
import type {Product} from "../../../server/database";

export let products: Product[] = [];
export let count = 12;
</script>

<section>
  {#each products.slice(0, count) as product (product.id)}
    <ProductCard title={product.title} image={product.image} price={product.price} id={product.id} />
  {/each}
</section>

<style lang="postcss">
section {
    @apply container mx-auto gap-3 flex flex-row flex-wrap;
}
</style>