<template>
  <div class="grid grid-cols-2 h-full">
    <div class="slidev-layout default">
      <slot />
    </div>
    <FigureWithOptionalCaption
      class="m-auto px-4"
      :class="{
        'order-first': figureX === 'l',
      }"
      :caption="figureCaption"
      :footnoteNumber="figureFootnoteNumber"
      :url="figureUrl"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layout-helper";

const { figureUrl } = withDefaults(
  defineProps<{
    figureCaption?: string;
    figureFootnoteNumber?: number;
    figureUrl: string;
    figureX?: "l" | "r";
  }>(),
  { figureX: "r" }
);
const style = computed(() => handleBackground(figureUrl));
</script>
