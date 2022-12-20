<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';

  import RatingApp from './RatingApp.svelte';

  export let Hst: HstType;

  let products = [
    {
      id: 'vite',
      title: 'Vite',
      url: 'https://vitejs.dev/',
      description: 'Next Generation Frontend Tooling',
      rating: 3
    },
    {
      id: 'histoire',
      title: 'Histoire',
      url: 'https://histoire.dev/',
      description: 'A new way to write stories',
      rating: 3
    }
  ];
</script>

<Hst.Story title="Rating App">
  <RatingApp products="{products}" />

  <svelte:fragment slot="controls">
    <Hst.Json bind:value="{products}" title="Products" />
  </svelte:fragment>
</Hst.Story>
