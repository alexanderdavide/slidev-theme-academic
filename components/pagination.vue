<template>
  <div
    class="fixed p-2 text-xs"
    v-bind:class="{
      'left-0': $slidev.themeConfigs.paginationX === 'left',
      'right-0': $slidev.themeConfigs.paginationX === 'right',
      'top-0': $slidev.themeConfigs.paginationY === 'top',
      'bottom-0': $slidev.themeConfigs.paginationY === 'bottom',
    }"
  >
    <SlideCurrentNo /> / <SlidesTotal />
  </div>
</template>
