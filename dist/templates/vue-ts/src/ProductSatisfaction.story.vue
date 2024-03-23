<script lang="ts" setup>
import { logEvent } from 'histoire/client';

import ProductSatisfaction from './ProductSatisfaction.vue';
import { ProductRatingEventArgs } from './RatingAppModel';

const initState = () => {
  return {
    product: {
      id: 'histoire',
      title: 'Histoire',
      url: 'https://histoire.dev/',
      description: 'A new way to write stories',
      rating: 3
    },
    onProductRatingChange: (e: ProductRatingEventArgs) => logEvent('productRatingChange', e)
  };
};
</script>

<template>
  <Story title="Components/Product Satisfaction" :init-state="initState" auto-props-disabled>
    <template #default="{ state }">
      <ProductSatisfaction :product="state.product" @product-rating-change="state.onProductRatingChange" />
    </template>
    <template #controls="{ state }">
      <HstText v-model="state.product.id" title="Product Id" />
      <HstText v-model="state.product.title" title="Title" />
      <HstText v-model="state.product.url" title="URL" />
      <HstText v-model="state.product.description" title="Description" />
      <HstNumber v-model="state.product.rating" title="Rating" />
    </template>
  </Story>
</template>

<style scoped>
.product-satisfaction {
  margin: 1rem;
}
</style>
