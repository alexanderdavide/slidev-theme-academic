<template>
  <div class="slidev-layout">
    <slot> <h1>Index</h1> </slot>
    <TocList :level="1" :list="indexEntries" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { indexEntries: indexEntriesTransferred } = defineProps<{
  indexEntries: [{ pageNumber: number; title: string }];
}>();

const indexEntries = computed(() =>
  indexEntriesTransferred.map(({ pageNumber, title }) => ({
    children: [],
    level: 1,
    path: pageNumber.toString(),
    title,
  })),
);
</script>
