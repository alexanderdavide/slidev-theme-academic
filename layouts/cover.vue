<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layout-helper";

const { backgroundUrl } = withDefaults(
  defineProps<{
    author?: string;
    authorUrl?: string;
    date?: string | Date;
    backgroundUrl?: string;
    backgroundSource?: string;
    backgroundSourceUrl?: string;
  }>(),
  { date: new Date().toLocaleDateString() }
);

const style = computed(() => handleBackground(backgroundUrl, true));
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full">
      <slot />
    </div>
    <div class="absolute bottom-12" v-if="author || date">
      <span class="font-bold">
        <a
          :href="authorUrl"
          rel="noreferrer"
          target="_blank"
          v-if="author && authorUrl"
          >{{ author }}</a
        >
        <span v-else-if="author && !authorUrl">{{ author }}</span>
        <span v-if="date">{{ author && date ? `, ${date}` : date }}</span>
      </span>
    </div>

    <div class="fixed bottom-0 right-0 mb-1 mr-2" v-if="backgroundSource">
      <span class="text-xs">
        background:
        <a
          :href="backgroundSourceUrl"
          rel="noreferrer"
          target="_blank"
          v-if="backgroundSourceUrl"
        >
          {{ backgroundSource }}
        </a>
        <span v-else>{{ backgroundSource }}</span>
      </span>
    </div>
  </div>
</template>
