<script lang="ts">
  import './OverallSatisfaction.css';

  import RatingContainer from './RatingContainer.svelte';

  export let rating;
</script>

<section data-testid="overall-satisfaction" class="overall-satisfaction">
  <h2>Overall Satisfaction</h2>
  <span></span>
  <RatingContainer productId="overall-satisfaction" {rating} />
</section>
