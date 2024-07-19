<script lang="ts">
  import './ProductSatisfaction.css';

  import type { Product } from './ProductModel';
  import RatingContainer from './RatingContainer.svelte';

  export let product: Product;
</script>

<section data-testid="{product.id}" class="product-satisfaction">
  <a href="{product.url}">{product.title}</a>
  <span>{product.description}</span>
  <RatingContainer productId="{product.id}" rating="{product.rating}" clickable="{true}" on:productRatingChange />
</section>
