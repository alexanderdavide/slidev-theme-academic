<template>
  <Pagination
    v-if="
      !$slidev.themeConfigs.paginationPagesDisabled?.includes($slidev.nav.currentPage) &&
      ($slidev.themeConfigs.paginationX || $slidev.themeConfigs.paginationY)
    "
    :paginationX="$slidev.themeConfigs.paginationX"
    :paginationY="$slidev.themeConfigs.paginationY"
  />
</template>
