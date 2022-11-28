<script setup lang="ts">
import { allProducts } from './ProductModel';
import RatingApp from './RatingApp.vue';
</script>

<template>
  <RatingApp :products="allProducts" />
</template>
