<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "TonalBtn",
  props: {
    text: {
      type: String,
      required: true,
    }
  }
})
</script>

<template>
<button class="btn" v-bind="$attrs">
  {{text}}
</button>
</template>

<style scoped lang="scss">
@use '@/styles/base.scss' as *;

.btn {
  border: none;
  background-color: $color-brand;
  color: $color-white;
  padding: 8px 16px;
  font-size: rem(16);
  line-height: rem(20);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}
</style>