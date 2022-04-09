<template>
  <div class="flex h-full">
    <div class="slidev-layout default flex-1">
      <slot />
    </div>
    <FigureWithOptionalCaption
      class="flex-1 h-4/5 m-auto px-4"
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
withDefaults(
  defineProps<{
    figureCaption?: string;
    figureFootnoteNumber?: number;
    figureUrl: string;
    figureX?: 'l' | 'r';
  }>(),
  { figureX: 'r' },
);
</script>
