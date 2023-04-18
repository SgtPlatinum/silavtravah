<script lang="ts">
import {getCartContext} from "$lib/cart";

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

<!-- TODO: paying requirements
     1. if the total of the cart is < 500P, make an alert that the minimum is 500P
     2. if the total of the cart is < 3000P, make text above Purchase button
        that says "there must be prepayment of 300P according to Pochta Rossii's guidelines."
     3. there must be an automatic mail sent to the buyer their cart is <3000P,
        the mail is a cheque for the prepayment
     4. delivery address (Country, Region, City, ZIP, street, house/apartment+flat)
        no checks or anything required, just additional info
        maybe don't keep that info anywhere and just make these inputs irrelevant-->

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