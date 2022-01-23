<template>
  <label
    class="lotto-ball text-center"
    :class="{ 'additional-number': isAdditionalNumber }"
    >{{ props.number }}</label
  >
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  number: { type: String, required: true },
  isAdditionalNumber: { type: Boolean, default: false },
});
</script>

<style scoped>
.lotto-ball {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: 0 1px;
  border-radius: 50%;
  border: 1px solid grey;
}
.additional-number {
  background-color: #ca7f26;
}
</style>
