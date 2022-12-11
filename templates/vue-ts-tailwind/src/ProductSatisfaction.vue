<script setup lang="ts">
import { Product } from './ProductModel';
import { ProductRatingEventArgs } from './RatingAppModel';
import RatingContainer from './RatingContainer.vue';

const props = defineProps<{
  product: Product;
}>();

const emit = defineEmits<{
  (e: 'productRatingChange', args: ProductRatingEventArgs): void;
}>();

const handleRatingContainerChange = (eventArgs: ProductRatingEventArgs) => {
  emit('productRatingChange', eventArgs);
};
</script>

<template>
  <section class="flex flex-col rounded-xl bg-indigo-100 p-4 drop-shadow-lg lg:p-8">
    <a :href="props.product.url" class="mb-4 text-center text-2xl font-medium text-indigo-900 lg:text-[1.8rem]">
      {{ props.product.title }}
    </a>
    <span class="grow text-center lg:h-10">{{ props.product.description }}</span>
    <RatingContainer
      :product-id="props.product.id"
      :rating="props.product.rating"
      clickable
      @product-rating-change="handleRatingContainerChange"
    />
  </section>
</template>
