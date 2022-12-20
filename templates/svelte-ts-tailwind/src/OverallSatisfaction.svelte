<script lang="ts">
  import RatingContainer from './RatingContainer.svelte';

  export let rating: number;
</script>

<section data-testid="overall-satisfaction" class="flex flex-col rounded-lg bg-indigo-900 p-4 drop-shadow-lg lg:p-8">
  <h2 class="mb-4 text-center text-2xl font-medium text-indigo-50 lg:text-[1.8rem]">Overall Satisfaction</h2>
  <span class="grow lg:h-10"></span>
  <RatingContainer productId="overall-satisfaction" rating="{rating}" />
</section>
