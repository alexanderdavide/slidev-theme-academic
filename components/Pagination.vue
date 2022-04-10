<template>
  <div class="fixed p-2 text-xs" :class="classNames"><SlideCurrentNo /> / <SlidesTotal /></div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

const {
  classNames: classNamesTransferred,
  paginationX,
  paginationY,
} = defineProps({
  classNames: {
    type: [Array, String] as PropType<string[] | string>,
  },
  paginationX: {
    default: 'r',
    type: String as PropType<'l' | 'r'>,
    validator: (value) => value === 'l' || value === 'r',
  },
  paginationY: {
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
  paginationX === 'l' && 'left-0',
  paginationX === 'r' && 'right-0',
  paginationY === 't' && 'top-0',
  paginationY === 'b' && 'bottom-0',
]);
</script>
