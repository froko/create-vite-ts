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
  <h1 class="my-4 text-center text-3xl font-semibold text-indigo-900 lg:my-12 lg:text-5xl">
    {{ products.map((p) => p.title).join(' - ') }}
  </h1>
  <main
    data-testid="products"
    class="mx-auto mt-4 grid max-w-6xl grid-flow-row gap-4 p-4 lg:grid-flow-col lg:grid-cols-3"
  >
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
