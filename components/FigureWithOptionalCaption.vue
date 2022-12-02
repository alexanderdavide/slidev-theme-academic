<template>
  <figure class="flex flex-col items-center justify-center">
    <img :alt="caption" class="max-h-full" :src="resolveAssetUrl(url)" />
    <figcaption class="mt-3 text-center text-xs" v-if="caption">
      {{ caption }}<sup v-if="footnoteNumber">{{ footnoteNumber }}</sup>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { resolveAssetUrl } from '../layout-helper';

defineProps<{ caption?: string; footnoteNumber?: number; url: string }>();
</script>
