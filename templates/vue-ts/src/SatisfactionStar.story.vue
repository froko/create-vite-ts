<script lang="ts">
import { logEvent } from 'histoire/client';
import { defineComponent } from 'vue';

import { ProductRatingEventArgs } from './RatingAppModel';
import SatisfactionStar from './SatisfactionStar.vue';

const args = {
  productId: 'histoire',
  position: 2,
  checked: false,
  clickable: false,
  onStarClick: (e: ProductRatingEventArgs) => logEvent('starClick', e)
};

export default defineComponent({
  components: { SatisfactionStar },
  setup() {
    return { args };
  }
});
</script>

<template>
  <Story title="Components/Satisfaction Star">
    <Variant title="Default">
      <SatisfactionStar v-bind="args" />
    </Variant>
    <Variant title="Checked">
      <SatisfactionStar v-bind="{ ...args, checked: true }" />
    </Variant>
    <Variant title="Clickable">
      <SatisfactionStar v-bind="{ ...args, clickable: true }" />
    </Variant>
    <Variant title="Checked and Clickable">
      <SatisfactionStar v-bind="{ ...args, checked: true, clickable: true }" />
    </Variant>
  </Story>
</template>
