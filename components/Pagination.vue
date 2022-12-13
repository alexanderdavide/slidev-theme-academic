<template>
  <div class="absolute p-2 text-xs" :class="classNames"><SlideCurrentNo /> / <SlidesTotal /></div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

const {
  classNames: classNamesTransferred,
  x,
  y,
} = defineProps({
  classNames: {
    type: [Array, String] as PropType<string[] | string>,
  },
  x: {
    default: 'r',
    type: String as PropType<'l' | 'r'>,
    validator: (value) => value === 'l' || value === 'r',
  },
  y: {
    default: 't',
    type: String as PropType<'b' | 't'>,
    validator: (value) => value === 'b' || value === 't',
  },
});

const classNames = computed(() => [
  ...(classNamesTransferred
    ? Array.isArray(classNamesTransferred)
      ? classNamesTransferred
      : [classNamesTransferred]
    : []),
  x === 'l' && 'left-0',
  x === 'r' && 'right-0',
  y === 't' && 'top-0',
  y === 'b' && 'bottom-0',
]);
</script>
