<script setup lang="ts">
import { reactive, ref } from 'vue';

import OverallSatisfaction from './OverallSatisfaction.vue';
import { Product } from './ProductModel';
import ProductSatisfaction from './ProductSatisfaction.vue';
import { ProductRatingEventArgs } from './RatingAppModel';

const props = defineProps<{ products: Product[] }>();
const totalRating = (total: number, product: Product) => total + product.rating;
const averageRating = (products: Product[]): number => Math.floor(products.reduce(totalRating, 0) / products.length);

let products = reactive(props.products);
let overallRating = ref(averageRating(products));

const handleProductRatingChange = (e: ProductRatingEventArgs) => {
  const newProducts = [...products];
  const index = newProducts.findIndex((p) => p.id === e.productId);
  newProducts[index].rating = e.rating;

  products = newProducts;
  overallRating.value = averageRating(products);
};
</script>

<template>
  <h1>{{ products.map((p) => p.title).join(' - ') }}</h1>
  <main data-testid="products" class="responsive-container">
    <ProductSatisfaction
      v-for="product in products"
      :key="product.id"
      :data-testid="product.id"
      :product="product"
      @product-rating-change="handleProductRatingChange"
    />
    <OverallSatisfaction data-testid="overall-satisfaction" :rating="overallRating" />
  </main>
</template>

<style scoped="true">
h1 {
  margin-top: 1rem;
  color: var(--indigo900);
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  text-align: center;
}

.responsive-container {
  display: grid;
  grid-auto-flow: row;
  row-gap: 1rem;
  margin-top: 1rem;
  margin-inline: auto;
  max-width: 72rem;
  padding: 1rem;
}

@media screen and (min-width: 1024px) {
  h1 {
    margin-top: 3rem;
    font-size: 3rem;
    line-height: 1;
  }

  .responsive-container {
    grid-auto-flow: column;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1rem;
  }
}
</style>
