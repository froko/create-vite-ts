<script lang="ts">
import { logEvent } from 'histoire/client';
import { defineComponent } from 'vue';

import ProductSatisfaction from './ProductSatisfaction.vue';
import { ProductRatingEventArgs } from './RatingAppModel';

const args = {
  product: {
    id: 'histoire',
    title: 'Histoire',
    url: 'https://histoire.dev/',
    description: 'A new way to write stories',
    rating: 3
  },
  onProductRatingChange: (e: ProductRatingEventArgs) => logEvent('productRatingChange', e)
};

export default defineComponent({
  components: { ProductSatisfaction },
  setup() {
    return { args };
  }
});
</script>

<template>
  <Story title="Components/Product Satisfaction">
    <Variant title="Default">
      <ProductSatisfaction v-bind="args" />
    </Variant>
  </Story>
</template>
