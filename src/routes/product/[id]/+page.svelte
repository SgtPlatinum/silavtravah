<script lang="ts">
import ProductDetails from "$lib/component/ProductDetails.svelte";

export let data: any;
</script>

<ProductDetails
  title={data.product.title}
  image={data.product.image}
  description={data.product.description}
  price={data.product.price}/>