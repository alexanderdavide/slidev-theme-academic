<template>
  <li class="text-xs whitespace-nowrap">
    <sup v-if="number">{{ number }}</sup>
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
    },
  },
};
</script>
