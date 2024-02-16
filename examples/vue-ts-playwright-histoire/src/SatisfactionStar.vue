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
    :class="{ checked: props.checked, action: props.clickable }"
    icon="fa-solid fa-star"
    size="2x"
    @click="handleStarClick"
  />
</template>

<style scoped="true">
.checked {
  color: var(--orange500);
}

.action {
  cursor: pointer;
}

.action:hover {
  color: var(--orange700);
}
</style>
