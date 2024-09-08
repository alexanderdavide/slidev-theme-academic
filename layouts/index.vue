<template>
  <div class="slidev-layout">
    <slot> <h1>Index</h1> </slot>
    <ol>
      <li v-for="{ uri, title } in indexEntries" :key="title">
        <Link v-if="indexRedirectType === 'internal'" :to="uri">{{ title }}</Link>
        <TextWithOptionalLink v-else :link="uri" :text="title" />
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';

const { indexEntries, indexRedirectType = 'internal' } = defineProps({
  indexEntries: {
    type: Array as PropType<{ title: string; uri?: number | string }[]>,
    required: true,
  },
  indexRedirectType: {
    type: String as PropType<'external' | 'internal'>,
    validator: (value) => value === 'external' || value === 'internal',
  },
});
</script>
