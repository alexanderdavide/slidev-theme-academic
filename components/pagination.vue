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

<script>
export default {
  props: {
    paginationX: {
      default: "r",
      type: String,
      validator: (value) => value === "l" || value === "r",
    },
    paginationY: {
      default: "b",
      type: String,
      validator: (value) => value === "t" || value === "b",
    },
  },
};
</script>
