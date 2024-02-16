<script lang="ts">
  import type { Product } from './ProductModel';
  import RatingContainer from './RatingContainer.svelte';

  export let product: Product;
</script>

<section data-testid="{product.id}" class="flex flex-col rounded-xl bg-indigo-100 p-4 drop-shadow-lg lg:p-8">
  <a href="{product.url}" class="mb-4 text-center text-2xl font-medium text-indigo-900 lg:text-[1.8rem]">
    {product.title}
  </a>
  <span class="grow text-center lg:h-10">{product.description}</span>
  <RatingContainer productId="{product.id}" rating="{product.rating}" clickable="{true}" on:productRatingChange />
</section>
