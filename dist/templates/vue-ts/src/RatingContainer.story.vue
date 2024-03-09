<script lang="ts" setup>
import { logEvent } from 'histoire/client';

import { ProductRatingEventArgs } from './RatingAppModel';
import RatingContainer from './RatingContainer.vue';

const initState = () => {
  return {
    productId: 'histoire',
    rating: 3,
    clickable: false,
    onProductRatingChange: (e: ProductRatingEventArgs) => logEvent('productRatingChange', e)
  };
};
</script>

<template>
  <Story title="Components/Rating Container" :layout="{ type: 'grid', width: 200 }" :init-state="initState">
    <Variant title="Default" auto-props-disabled>
      <template #default="{ state }">
        <RatingContainer
          :product-id="state.productId"
          :rating="state.rating"
          :clickable="state.clickable"
          @product-rating-change="state.onProductRatingChange"
        />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.productId" title="Product Id" />
        <HstNumber v-model="state.rating" title="Rating" />
        <HstCheckbox v-model="state.clickable" title="Clickable" />
      </template>
    </Variant>
    <Variant title="Disappointed" auto-props-disabled>
      <template #default="{ state }">
        <RatingContainer :product-id="state.productId" :rating="1" :clickable="state.clickable" />
      </template>
    </Variant>
    <Variant title="Very Satisfied" auto-props-disabled>
      <template #default="{ state }">
        <RatingContainer :product-id="state.productId" :rating="5" :clickable="state.clickable" />
      </template>
    </Variant>
    <Variant title="Clickable" auto-props-disabled>
      <template #default="{ state }">
        <RatingContainer
          :product-id="state.productId"
          :rating="state.rating"
          :clickable="true"
          @product-rating-change="state.onProductRatingChange"
        />
      </template>
    </Variant>
  </Story>
</template>
