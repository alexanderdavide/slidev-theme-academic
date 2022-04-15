<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
    <div class="absolute bottom-12 font-bold" v-if="author || date">
      <TextWithOptionalLink :link="authorUrl" :text="author" />
      <span v-if="date">{{ author && date ? `, ${date}` : date }}</span>
    </div>
    <div class="fixed bottom-0 mb-1 mr-2 right-0 text-xs" v-if="coverBackgroundSource">
      <TextWithOptionalLink :link="coverBackgroundSourceUrl" :text="coverBackgroundSource" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layout-helper';

const { coverBackgroundUrl } = withDefaults(
  defineProps<{
    author?: string;
    authorUrl?: string;
    coverBackgroundUrl?: string;
    coverBackgroundSource?: string;
    coverBackgroundSourceUrl?: string;
    date?: string | Date;
  }>(),
  { date: new Date().toLocaleDateString() },
);

const style = computed(() => handleBackground(coverBackgroundUrl, true));
</script>
