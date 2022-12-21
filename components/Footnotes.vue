<template>
  <div
    class="absolute bottom-0 left-0 w-full"
    v-bind:class="{
      'bg-main': filled,
    }"
  >
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
  filled: {
    default: false,
    type: Boolean,
  },
  separator: {
    default: false,
    type: Boolean,
  },
  x: {
    default: 'r',
    type: String as PropType<'l' | 'r'>,
    validator: (value) => value === 'l' || value === 'r',
  },
});
</script>
