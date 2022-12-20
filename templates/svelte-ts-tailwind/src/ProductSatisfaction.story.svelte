<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';

  import ProductSatisfaction from './ProductSatisfaction.svelte';

  export let Hst: HstType;

  let product = {
    id: 'histoire',
    title: 'Histoire',
    url: 'https://histoire.dev/',
    description: 'A new way to write stories',
    rating: 3
  };
</script>

<Hst.Story title="Components/Product Satisfaction">
  <div style="margin: 1rem;">
    <ProductSatisfaction product="{product}" />
  </div>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value="{product.id}" title="Product Id" />
    <Hst.Text bind:value="{product.title}" title="Title" />
    <Hst.Text bind:value="{product.url}" title="URL" />
    <Hst.Text bind:value="{product.description}" title="Description" />
    <Hst.Number bind:value="{product.rating}" title="Rating" />
  </svelte:fragment>
</Hst.Story>
