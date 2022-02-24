<template>
  <div class="fixed bottom-0 left-0 w-full">
    <hr v-if="separator" />
    <ul
      class="flex flex-wrap !list-none p-2"
      v-bind:class="{
        'justify-start': footnotesX === 'l',
        'justify-end': footnotesX === 'r',
      }"
    >
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    footnotesX: {
      default: "r",
      type: String,
      validator: (value) => value === "l" || value === "r",
    },
    separator: {
      default: false,
      type: Boolean,
    },
  },
};
</script>
