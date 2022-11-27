<script lang="ts">
import { logEvent } from 'histoire/client';
import { defineComponent } from 'vue';

import { ProductRatingEventArgs } from './RatingAppModel';
import RatingContainer from './RatingContainer.vue';

const args = {
  productId: 'histoire',
  rating: 3,
  clickable: false,
  onProductRatingChange: (e: ProductRatingEventArgs) => logEvent('productRatingChange', e)
};

export default defineComponent({
  components: { RatingContainer },
  setup() {
    return { args };
  }
});
</script>

<template>
  <Story title="Components/Rating Container">
    <Variant title="Default">
      <RatingContainer v-bind="args" />
    </Variant>
    <Variant title="Disappointed">
      <RatingContainer v-bind="{ ...args, rating: 1 }" />
    </Variant>
    <Variant title="Very Satisfied">
      <RatingContainer v-bind="{ ...args, rating: 5 }" />
    </Variant>
    <Variant title="Clickable">
      <RatingContainer v-bind="{ ...args, clickable: true }" />
    </Variant>
  </Story>
</template>
