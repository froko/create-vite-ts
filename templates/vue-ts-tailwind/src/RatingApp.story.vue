<script lang="ts">
import { defineComponent } from 'vue';

import RatingApp from './RatingApp.vue';

const args = {
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

export default defineComponent({
  components: { RatingApp },
  setup() {
    return { args };
  }
});
</script>

<template>
  <Story title="Rating App">
    <Variant title="Default">
      <RatingApp v-bind="args" />
    </Variant>
  </Story>
</template>
