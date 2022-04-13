<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
    <div class="absolute bottom-12 font-bold" v-if="author || date">
      <TextWithOptionalLink :link="authorUrl" :text="author" />
      <span v-if="date">{{ author && date ? `, ${date}` : date }}</span>
    </div>
    <div class="fixed bottom-0 mb-1 mr-2 right-0 text-xs" v-if="coverSource">
      <TextWithOptionalLink :link="coverSourceUrl" :text="coverSource" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layout-helper';

const { coverUrl } = withDefaults(
  defineProps<{
    author?: string;
    authorUrl?: string;
    coverUrl?: string;
    coverSource?: string;
    coverSourceUrl?: string;
    date?: string | Date;
  }>(),
  { date: new Date().toLocaleDateString() },
);

const style = computed(() => handleBackground(coverUrl, true));
</script>
