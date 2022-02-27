<template>
  <figure class="grid gap-3">
    <img :alt="caption" :src="url" />
    <figcaption class="text-center text-xs" v-if="caption">
      {{ caption }}<sup v-if="footnoteNumber">{{ footnoteNumber }}</sup>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layout-helper";

const props =
  defineProps<{ caption?: string; footnoteNumber?: number; url: string }>();
const style = computed(() => handleBackground(props.url));
</script>
