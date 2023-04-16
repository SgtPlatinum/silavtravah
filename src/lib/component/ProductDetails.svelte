<script lang="ts">
import Button, {Label} from "@smui/button";

export let title = "Product";
export let price = 1000;
export let image = "https://picsum.photos/256/256"
export let description = "Описание писать сюда..." // text is "put description here"

</script>

<article>
  <h2>{title}</h2>
  <div>
    <img src="{image}" alt="Изображение продукта">
    <p>Цена: {price.toLocaleString("ru", {useGrouping: true})} ₽</p>
    <Button><Label>В корзину</Label></Button>
  </div>
  <p>{description}</p>
</article>

<style lang="postcss">

  h2 {
      @apply text-lg py-0 my-1;
      font-family: "Roboto Condensed";
  }

  article {
      @apply bg-white px-1 shadow-lg rounded text-stone-900
  }

  div{
      @apply flex flex-row items-baseline justify-between;
  }

  img{
      @apply pr-4
  }

</style>