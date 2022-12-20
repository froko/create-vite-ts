<script lang="ts" setup>
import OverallSatisfaction from './OverallSatisfaction.vue';

const initState = () => {
  return {
    rating: 3
  };
};
</script>

<template>
  <Story title="Components/Overall Satisfaction" :init-state="initState" auto-props-disabled>
    <template #default="{ state }">
      <OverallSatisfaction :rating="state.rating" />
    </template>
    <template #controls="{ state }">
      <HstNumber v-model="state.rating" title="Rating" />
    </template>
  </Story>
</template>
