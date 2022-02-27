<template>
  <figure class="flex flex-col items-center justify-center">
    <img :alt="caption" class="max-h-full" :src="url" />
    <figcaption class="mt-3 text-center text-xs" v-if="caption">
      {{ caption }}<sup v-if="footnoteNumber">{{ footnoteNumber }}</sup>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
defineProps<{ caption?: string; footnoteNumber?: number; url: string }>();
</script>
