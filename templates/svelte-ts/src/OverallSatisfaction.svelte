<script lang="ts">
  import RatingContainer from './RatingContainer.svelte';
  import './OverallSatisfaction.css';

  export let rating: number;
</script>

<section data-testid="overall-satisfaction" class="overall-satisfaction">
  <h2>Overall Satisfaction</h2>
  <span></span>
  <RatingContainer productId="overall-satisfaction" {rating} />
</section>
