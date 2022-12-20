<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';

  import OverallSatisfaction from './OverallSatisfaction.svelte';

  export let Hst: HstType;

  let rating = 3;
</script>

<Hst.Story title="Components/Overall Satisfaction">
  <div style="margin: 1rem;">
    <OverallSatisfaction rating="{rating}" />
  </div>

  <svelte:fragment slot="controls">
    <Hst.Number bind:value="{rating}" title="Rating" />
  </svelte:fragment>
</Hst.Story>
