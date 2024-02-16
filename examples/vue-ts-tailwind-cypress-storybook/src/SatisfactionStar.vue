<script setup lang="ts">
import { ProductRatingEventArgs } from './RatingAppModel';

const props = defineProps<{
  productId: string;
  position: number;
  checked: boolean;
  clickable: boolean;
}>();

const emit = defineEmits<{
  (event: 'starClick', args: ProductRatingEventArgs): void;
}>();

const handleStarClick = () => {
  if (props.clickable) {
    emit('starClick', { productId: props.productId, rating: props.position });
  }
};
</script>

<template>
  <font-awesome-icon
    :data-testid="`${props.productId}-${props.position}`"
    :class="[
      props.checked ? 'text-orange-500' : '',
      props.clickable ? 'cursor-pointer hover:text-orange-700' : !props.checked ? 'text-white' : ''
    ]"
    icon="fa-solid fa-star"
    size="2x"
    role="presentation"
    @click="handleStarClick"
  />
</template>
