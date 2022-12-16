<script lang="ts" setup>
import RatingApp from './RatingApp.vue';

const initState = () => {
  return {
    products: [
      {
        id: 'vite',
        title: 'Vite',
        url: 'https://vitejs.dev/',
        description: 'Next Generation Frontend Tooling',
        rating: 3
      },
      {
        id: 'histoire',
        title: 'Histoire',
        url: 'https://histoire.dev/',
        description: 'A new way to write stories',
        rating: 3
      }
    ]
  };
};
</script>

<template>
  <Story title="Rating App" :init-state="initState" auto-props-disabled>
    <template #default="{ state }">
      <RatingApp :products="state.products" />
    </template>
  </Story>
</template>
