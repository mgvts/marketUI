<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "scrollable",
  props: {
    maxHeight: {
      type: String,
      default: '100%'
    }
  }
})
</script>

<template>
<div class="scrollable" :style="{maxHeight}">
  <slot></slot>
</div>
</template>

<style scoped lang="scss">
@use '@/styles/base.scss' as *;

.scrollable {
  overflow-y: auto;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb,
  &::-webkit-scrollbar-thumb {
    background-color: $scroll-bar;
    border-radius: 1px;
  }

  &::-webkit-scrollbar-thumb:hover,
  &::-webkit-scrollbar-thumb:hover {
    background-color: $color-border;
  }
}
</style>