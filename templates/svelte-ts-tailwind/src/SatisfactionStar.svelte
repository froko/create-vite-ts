<script lang="ts">
  import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
  import { createEventDispatcher } from 'svelte';
  import Fa from 'svelte-fa';

  import type { ProductRatingEventArgs } from './RatingAppModel';

  const icon = faStar;
  const dispatch = createEventDispatcher<{ starClick: ProductRatingEventArgs }>();

  const handleStarClick = () => {
    if (clickable) {
      dispatch('starClick', { productId, rating: position });
    }
  };

  export let productId: string;
  export let position: number;
  export let checked: boolean;
  export let clickable: boolean;

  $: dataTestId = `${productId}-${position}`;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="outline-none"
  data-testid="{dataTestId}"
  aria-label="{dataTestId}"
  role="button"
  tabindex="0"
  on:click="{handleStarClick}"
>
  <Fa
    {icon}
    class="text-3xl {checked ? 'text-orange-500' : ''} {clickable
      ? 'cursor-pointer hover:text-orange-700'
      : !checked
        ? 'text-white'
        : ''}"
  />
</div>
