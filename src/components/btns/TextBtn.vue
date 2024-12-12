<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TextBtn",
  props: {
    text: {
      type: String,
      required: true,
    },
    textDecoration: {
      type: String,
      default: "none",
    }
  }
})
</script>

<template>
<div class="text" v-bind="$attrs" tabindex="0" :style="{textDecoration}">
  {{text}}
</div>
</template>

<style scoped lang="scss">
@use '@/styles/base.scss' as *;
.text {
  color: $color-font-second;
  cursor: pointer;
  user-select: none;

  &:active {
    color: $color-font-main;
  }
}
</style>