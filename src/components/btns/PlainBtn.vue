<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlainBtn",
  props: {
    text: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: "48px",
    },
    width: {
      type: String,
      default: "104px",
    },
    rounded: {
      type: String,
      default: "8px",
    },
    padding: {
      type: String,
      default: "0",
    }
  },
});
</script>

<template>
  <button
      class="btn"
      :style="{
      height,
      width,
      borderRadius: rounded,
      padding
    }"
      v-bind="$attrs"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
@use 'sass:color';

.btn {
  border: 1px solid $color-brand;
  background-color: $color-white;
  color: $color-brand;
  padding: 8px 16px;
  font-size: rem(16);
  line-height: rem(20);
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: $color-font-bg;
  }

  &:active {
    background-color: $color-brand;
    color: $color-white;
  }
}
</style>
