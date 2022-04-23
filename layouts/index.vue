<template>
  <div class="slidev-layout">
    <slot> <h1>Index</h1> </slot>
    <TocList v-if="indexEntriesInternal" :level="1" :list="indexEntriesInternal" />
    <ol v-else>
      <li v-for="{ uri, title } in indexEntries" :key="title">
        <TextWithOptionalLink :link="uri" :text="title" />
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

const { indexEntries, indexRedirectType } = defineProps({
  indexEntries: {
    type: Array as PropType<{ title: string; uri?: number | string }[]>,
    required: true,
  },
  indexRedirectType: {
    default: 'internal',
    type: String as PropType<'external' | 'internal'>,
    validator: (value) => value === 'external' || value === 'internal',
  },
});

const indexEntriesInternal =
  indexRedirectType === 'internal' &&
  computed(() =>
    indexEntries.map(({ title, uri }) => ({
      children: [],
      level: 1,
      path: uri.toString(),
      title,
    })),
  );
</script>
