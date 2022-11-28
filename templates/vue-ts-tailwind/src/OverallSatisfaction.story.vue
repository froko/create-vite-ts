<script lang="ts">
import { defineComponent } from 'vue';

import OverallSatisfaction from './OverallSatisfaction.vue';

const args = {
  rating: 3
};

export default defineComponent({
  components: { OverallSatisfaction },
  setup() {
    return { args };
  }
});
</script>

<template>
  <Story title="Components/Overall Satisfaction">
    <Variant title="Default">
      <OverallSatisfaction v-bind="args" />
    </Variant>
  </Story>
</template>
