<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  import type { ProductRatingEventArgs } from './RatingAppModel';
  import SatisfactionStar from './SatisfactionStar.svelte';
  import './RatingContainer.css';

  const dispatch = createEventDispatcher<{ productRatingChange: ProductRatingEventArgs }>();

  export let productId: string;
  export let rating: number;
  export let clickable = false;

  $: starProps = [1, 2, 3, 4, 5].map((position) => ({
    productId,
    position,
    clickable,
    checked: position <= rating
  }));

  const handleStarClick = (event: CustomEvent<ProductRatingEventArgs>) => dispatch('productRatingChange', event.detail);
</script>

<div>
  <div class="rating">
    {#each starProps as star}
      <SatisfactionStar {...star} on:starClick="{handleStarClick}" />
    {/each}
  </div>
</div>
