<template>
  <span v-if="!link">{{ text }}</span>
  <a :href="link" rel="noreferrer" target="_blank" v-else>{{ text }}</a>
</template>

<script setup lang="ts">
const { link, text } = defineProps<{ link?: string; text: string }>();
</script>
