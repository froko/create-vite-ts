<script lang="ts">
  import OverallSatisfaction from './OverallSatisfaction.svelte';
  import type { Product } from './ProductModel';
  import ProductSatisfaction from './ProductSatisfaction.svelte';
  import type { ProductRatingEventArgs } from './RatingAppModel';
  import './RatingApp.css';

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

<h1>{products.map((p) => p.title).join(' - ')}</h1>
<main data-testid="products" class="responsive-container">
  {#each products as product}
    <ProductSatisfaction {product} on:productRatingChange="{handeProductRatingChange}" />
  {/each}
  <OverallSatisfaction rating="{overallRating}" />
</main>
