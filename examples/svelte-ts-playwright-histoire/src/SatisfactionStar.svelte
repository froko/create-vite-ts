<script lang="ts">
  import './SatisfactionStar.css';

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
<div data-testid="{dataTestId}" aria-label="{dataTestId}" role="button" tabindex="0" on:click="{handleStarClick}">
  <Fa {icon} class="{checked ? 'checked' : ''} {clickable ? 'action' : ''}" />
</div>
