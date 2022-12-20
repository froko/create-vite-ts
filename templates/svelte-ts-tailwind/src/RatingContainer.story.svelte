<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  import { logEvent } from 'histoire/client';

  import RatingContainer from './RatingContainer.svelte';

  export let Hst: HstType;

  let productId = 'histoire';
  let rating = 3;
  let clickable = false;
</script>

<Hst.Story title="Components/Rating Container" layout="{{ type: 'grid', width: 400 }}">
  <Hst.Variant title="Default">
    <RatingContainer
      productId="{productId}"
      rating="{rating}"
      clickable="{clickable}"
      on:productRatingChange="{(event) => logEvent('productRatingChange', event)}"
    />

    <svelte:fragment slot="controls">
      <Hst.Text bind:value="{productId}" title="Product Id" />
      <Hst.Number bind:value="{rating}" title="Rating" />
      <Hst.Checkbox bind:value="{clickable}" title="Clickable" />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Disappointed">
    <RatingContainer productId="{productId}" rating="{1}" clickable="{clickable}" />
  </Hst.Variant>

  <Hst.Variant title="Very Satisfied">
    <RatingContainer productId="{productId}" rating="{5}" clickable="{clickable}" />
  </Hst.Variant>

  <Hst.Variant title="Clickable">
    <RatingContainer
      productId="{productId}"
      rating="{3}"
      clickable="{true}"
      on:productRatingChange="{(event) => logEvent('productRatingChange', event)}"
    />
  </Hst.Variant>
</Hst.Story>
