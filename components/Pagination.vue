<template>
  <div
    class="fixed p-2 text-xs"
    v-bind:class="{
      'left-0': paginationX === 'l',
      'right-0': paginationX === 'r',
      'top-0': paginationY === 't',
      'bottom-0': paginationY === 'b',
    }"
  >
    <SlideCurrentNo /> / <SlidesTotal />
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  paginationX: {
    default: "r",
    type: String as PropType<"l" | "r">,
    validator: (value) => value === "l" || value === "r",
  },
  paginationY: {
    default: "t",
    type: String as PropType<"b" | "t">,
    validator: (value) => value === "b" || value === "t",
  },
});
</script>
