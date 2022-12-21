<template>
  <Pagination
    v-if="
      $slidev.nav.currentPage !== $slidev.nav.total + 1 &&
      !$slidev.themeConfigs.paginationPagesDisabled?.includes($slidev.nav.currentPage) &&
      ($slidev.themeConfigs.paginationX || $slidev.themeConfigs.paginationY)
    "
    :x="$slidev.themeConfigs.paginationX"
    :y="$slidev.themeConfigs.paginationY"
  />
</template>
