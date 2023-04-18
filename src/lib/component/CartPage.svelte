<script lang="ts">
    import {getCartContext} from "../cart";

    const { products, total, add, remove } = getCartContext();

</script>

<div>
    {#each $products as product (product.id)}
        <article>
            <img src={product.image} alt={product.title} />
            <span class="title">{product.title}</span>
            <span class="amount">{product.amount}</span>
            <strong>{product.price.toLocaleString("ru", { useGrouping: true })}</strong>
        </article>
    {/each}
    <hr />
    <article>
        <span>&nbsp;</span>
        <strong>{$total.toLocaleString("ru", { useGrouping: true })}</strong>
    </article>
</div>

<!-- ok so there's info about the buying process, i could type it later ye do that -->

<style lang="postcss">
div {
    @apply flex flex-col container mx-auto;
}

article {
    @apply flex flex-row justify-between items-center;
}

img {
    @apply w-32 h-32 rounded;
}

.title {
    @apply text-base;
}

.amount {
    @apply text-base;
}
</style>