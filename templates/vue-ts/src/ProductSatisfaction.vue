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
  <section class="product-satisfaction">
    <a :href="props.product.url">{{ props.product.title }}</a>
    <span>{{ props.product.description }}</span>
    <RatingContainer
      :product-id="props.product.id"
      :rating="props.product.rating"
      clickable
      @product-rating-change="handleRatingContainerChange"
    />
  </section>
</template>

<style scoped="true">
.product-satisfaction {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.product-satisfaction a {
  display: block;
  color: var(--indigo900);
  font-weight: 500;
  font-size: 1.5rem;
  text-decoration: none;
  margin-bottom: 1rem;
}

.product-satisfaction span {
  flex: 1 1 auto;
}

@media screen and (min-width: 1024px) {
  .product-satisfaction {
    padding: 2rem;
  }

  .product-satisfaction a {
    font-size: 1.8rem;
  }

  .product-satisfaction span {
    height: 2.5rem;
  }
}
</style>
