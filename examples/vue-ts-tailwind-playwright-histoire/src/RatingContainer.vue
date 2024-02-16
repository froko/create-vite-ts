<script setup lang="ts">
import { computed } from 'vue';

import { ProductRatingEventArgs } from './RatingAppModel';
import SatisfactionStar from './SatisfactionStar.vue';

const props = defineProps<{
  productId: string;
  rating: number;
  clickable: boolean;
}>();

const emit = defineEmits<{
  (event: 'productRatingChange', args: ProductRatingEventArgs): void;
}>();

const starProps = computed(() =>
  [1, 2, 3, 4, 5].map((position) => ({
    productId: props.productId,
    position,
    checked: position <= props.rating,
    clickable: props.clickable,
    starClick: (eventArgs: ProductRatingEventArgs) => emit('productRatingChange', eventArgs)
  }))
);
</script>

<template>
  <div>
    <div class="mx-auto mt-4 flex max-w-xs justify-around">
      <SatisfactionStar
        v-for="starProp in starProps"
        :key="`${starProp.productId}-${starProp.position}`"
        :product-id="starProp.productId"
        :position="starProp.position"
        :checked="starProp.checked"
        :clickable="starProp.clickable"
        @star-click="starProp.starClick"
      />
    </div>
  </div>
</template>
