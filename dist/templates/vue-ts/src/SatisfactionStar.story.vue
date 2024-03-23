<script lang="ts" setup>
import { logEvent } from 'histoire/client';

import { ProductRatingEventArgs } from './RatingAppModel';
import SatisfactionStar from './SatisfactionStar.vue';

const initState = () => {
  return {
    productId: 'histoire',
    position: 2,
    checked: false,
    clickable: false,
    onStarClick: (e: ProductRatingEventArgs) => logEvent('starClick', e)
  };
};
</script>

<template>
  <Story title="Components/Satisfaction Star" :layout="{ type: 'grid', width: 200 }" :init-state="initState">
    <Variant title="Default" auto-props-disabled>
      <template #default="{ state }">
        <SatisfactionStar
          :product-id="state.productId"
          :position="state.position"
          :checked="state.checked"
          :clickable="state.clickable"
          @star-click="state.onStarClick"
        />
      </template>
      <template #controls="{ state }">
        <HstText v-model="state.productId" title="Product Id" />
        <HstNumber v-model="state.position" title="Position" />
        <HstCheckbox v-model="state.checked" title="Checked" />
        <HstCheckbox v-model="state.clickable" title="Clickable" />
      </template>
    </Variant>
    <Variant title="Checked" auto-props-disabled>
      <template #default="{ state }">
        <SatisfactionStar
          :product-id="state.productId"
          :position="state.position"
          :checked="true"
          :clickable="state.clickable"
        />
      </template>
    </Variant>
    <Variant title="Clickable" auto-props-disabled>
      <template #default="{ state }">
        <SatisfactionStar
          :product-id="state.productId"
          :position="state.position"
          :checked="state.checked"
          :clickable="true"
          @star-click="state.onStarClick"
        />
      </template>
    </Variant>
    <Variant title="Checked and Clickable" auto-props-disabled>
      <template #default="{ state }">
        <SatisfactionStar
          :product-id="state.productId"
          :position="state.position"
          :checked="true"
          :clickable="true"
          @star-click="state.onStarClick"
        />
      </template>
    </Variant>
  </Story>
</template>
