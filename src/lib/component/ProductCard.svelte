<script lang="ts">
import Button, { Label } from "@smui/button";
export let title = "Product";
export let price = 1000;
export let image = "https://picsum.photos/256/256"
export let id = "unknown";

</script>


<article>
  <h3><a href="/product/{id}">{title}</a></h3>
  <a href="/product/{id}"><img src={image} alt="{title}" /></a>
  <div>
    <span>{price.toLocaleString("ru", {useGrouping: true})} ₽</span>
    <Button><Label>В корзину</Label></Button>
  </div>
</article>

<style lang="postcss">
article {
    @apply w-60 h-80 bg-white px-1 py-2 shadow-lg rounded text-stone-900 flex flex-col items-center relative;
}

h3 {
    @apply text-lg py-0 my-1 px-1 truncate w-full;
    font-family: "Roboto Condensed";
}

div {
    @apply flex flex-row items-baseline justify-between w-full pr-2 pl-3 pt-2;
}

img {
    @apply w-56 h-56;
}
</style>