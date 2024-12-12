<script lang="ts">
import {defineComponent} from 'vue';
import cross from '@/assets/delete.svg'

export default defineComponent({
  name: 'myInput',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: 'auto',
    },
    bordered: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get(): string {
        return this.modelValue;
      },
      set(val: string) {
        this.$emit('update:modelValue', val);
      },
    },
  },
  data() {
    return {
      isFocused: false,
      showClearIcon: false,
      cross
    };
  },
  watch: {
    value(newVal) {
      this.showClearIcon = newVal.length > 0;
    },
  },
  methods: {
    clearInput() {
      this.value = '';
    },
    onFocus() {
      this.isFocused = true;
    },
    onBlur() {
      this.isFocused = false;
    },
  },
});
</script>

<template>
  <div class="input"
       :class="{ focused: isFocused, bordered }"
       :style="{ width, height }"
  >
    <div class="input__prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input
        type="text"
        v-model="value"
        :placeholder="placeholder"
        @focus="onFocus"
        @blur="onBlur"
        v-bind="$attrs"
    />
    <div class="input__append">
      <img
          v-show="showClearIcon && !$slots.append"
          @click="clearInput"
          :src="cross"
          style="cursor:
          pointer" alt="default delete btn"
      />
      <slot name="append"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base.scss' as *;

.bordered {
  border: thin solid $color-border;
  border-radius: 24px;
}

.input {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;

  &.focused {
    border-color: $color-brand;
  }

  input {
    border: none;
    flex-grow: 1;
    padding: 8px 0;
    width: 100%;
    border-radius: 24px;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  &__prepend {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__append {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .delete-icon {
    cursor: pointer;
    color: $color-icons;
    transition: all 0.15s ease-in-out;

    &:hover {
      color: #333;
    }
  }
}
</style>