<template>
  <div class="fixed bottom-0 left-0 w-full">
    <hr v-if="separator" />
    <ul
      class="flex flex-wrap !list-none p-2"
      v-bind:class="{
        'justify-start': x === 'l',
        'justify-end': x === 'r',
      }"
    >
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  x: {
    default: 'r',
    type: String as PropType<'l' | 'r'>,
    validator: (value) => value === 'l' || value === 'r',
  },
  separator: {
    default: false,
    type: Boolean,
  },
});
</script>
