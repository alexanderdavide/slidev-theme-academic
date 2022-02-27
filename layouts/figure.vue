<template>
  <div class="slidev-layout default h-full">
    <slot />
    <FigureWithOptionalCaption
      class="h-5/6 p-4"
      :caption="figureCaption"
      :footnoteNumber="figureFootnoteNumber"
      :url="figureUrl"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  figureCaption?: string;
  figureFootnoteNumber?: number;
  figureUrl: string;
}>();
</script>
