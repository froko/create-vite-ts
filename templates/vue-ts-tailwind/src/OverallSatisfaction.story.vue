<script lang="ts" setup>
import OverallSatisfaction from './OverallSatisfaction.vue';

const initState = () => {
  return {
    rating: 3
  };
};
</script>

<template>
  <Story title="Components/Overall Satisfaction" :init-state="initState">
    <template #default="{ state }">
      <OverallSatisfaction :rating="state.rating" />
    </template>
  </Story>
</template>
