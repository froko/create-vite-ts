<script lang="ts">
  import type { Hst as HstType } from '@histoire/plugin-svelte';
  import { logEvent } from 'histoire/client';

  import SatisfactionStar from './SatisfactionStar.svelte';

  export let Hst: HstType;

  let productId = 'histoire';
  let position = 1;
  let checked = false;
  let clickable = false;
</script>

<Hst.Story title="Components/Satisfaction Star" layout="{{ type: 'grid', width: 200 }}">
  <Hst.Variant title="Default">
    <SatisfactionStar
      {productId}
      {position}
      {checked}
      {clickable}
      on:starClick="{(event) => logEvent('starClick', event)}"
    />

    <svelte:fragment slot="controls">
      <Hst.Text bind:value="{productId}" title="Product Id" />
      <Hst.Number bind:value="{position}" title="Position" />
      <Hst.Checkbox bind:value="{checked}" title="Checked" />
      <Hst.Checkbox bind:value="{clickable}" title="Clickable" />
    </svelte:fragment>
  </Hst.Variant>

  <Hst.Variant title="Checked">
    <SatisfactionStar {productId} {position} checked="{true}" {clickable} />
  </Hst.Variant>

  <Hst.Variant title="Clickable">
    <SatisfactionStar
      {productId}
      {position}
      {checked}
      clickable="{true}"
      on:starClick="{(event) => logEvent('starClick', event)}"
    />
  </Hst.Variant>

  <Hst.Variant title="Checked and Clickable">
    <SatisfactionStar
      {productId}
      {position}
      checked="{true}"
      clickable="{true}"
      on:starClick="{(event) => logEvent('starClick', event)}"
    />
  </Hst.Variant>
</Hst.Story>
