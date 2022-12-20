<script lang="ts">
  import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
  import Icon from 'fa-svelte';
  import { createEventDispatcher } from 'svelte';

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
<div data-testid="{dataTestId}" on:click="{handleStarClick}">
  <Icon
    icon="{icon}"
    role="presentation"
    class="text-3xl {checked ? 'text-orange-500' : ''} {clickable
      ? 'cursor-pointer hover:text-orange-700'
      : !checked
      ? 'text-white'
      : ''}"
  />
</div>
