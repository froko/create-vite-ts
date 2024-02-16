<script lang="ts">
  import OverallSatisfaction from './OverallSatisfaction.svelte';
  import type { Product } from './ProductModel';
  import ProductSatisfaction from './ProductSatisfaction.svelte';
  import type { ProductRatingEventArgs } from './RatingAppModel';

  const totalRating = (total: number, product: Product) => total + product.rating;
  const averageRating = (products: Product[]) => Math.floor(products.reduce(totalRating, 0) / products.length);

  export let products: Product[];

  $: overallRating = averageRating(products);

  const handeProductRatingChange = (event: CustomEvent<ProductRatingEventArgs>) => {
    const payload: { productId: string; rating: number } = event.detail;
    const index = products.findIndex((p) => p.id === payload.productId);

    products[index].rating = payload.rating;
  };
</script>

<h1 class="my-4 text-center text-3xl font-semibold text-indigo-900 lg:my-12 lg:text-5xl">
  {products.map((p) => p.title).join(' - ')}
</h1>
<main
  data-testid="products"
  class="mx-auto mt-4 grid max-w-6xl grid-flow-row gap-4 p-4 lg:grid-flow-col lg:grid-cols-3"
>
  {#each products as product}
    <ProductSatisfaction {product} on:productRatingChange="{handeProductRatingChange}" />
  {/each}
  <OverallSatisfaction rating="{overallRating}" />
</main>
