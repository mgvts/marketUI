<script lang="ts">
import {defineComponent, PropType} from 'vue';
import type {AsidePath, pathId} from "@/types.ts";


export default defineComponent({
  name: 'NavigationTile',
  props: {
    item: {
      type: Object as PropType<AsidePath>,
      required: true,
    },
    actualPath: {
      type: Array as PropType<pathId[]>,
      required: true,
    }
  },
  data() {
    return {
      computedHeight: 0
    }
  },
  computed: {
    actualPathComputed: {
      get() {
        return this.actualPath
      },
      set(ids: number[]) {
        this.$emit('update:actualPath', [...ids, this.item.id])
      }
    }
  },
  methods: {
    isOpen(id: number): boolean {
      return this.actualPath[0] == id;
    },
    isInPath(id:number): boolean {
      return  this.actualPath.includes(id)
    }
  }
});
</script>

<template>

  <div class="tile">
    <div
        class="tile__name"
        @click="actualPathComputed = []"
        :class="{ active: isOpen(item.id) }"
    >
      {{ item.name }} <span v-if="item.count" class="tile__name__cnt cnt">{{ item.count }}</span>
    </div>
    <transition-group name="slide-fade" tag="ul" class="tile__content">
      <li
          v-if="isInPath(item.id) && item.content.length > 0"
          v-for="content in item.content"
          :key="content.id"
      >
        <NavigationTile
            :item="content"
            v-model:actual-path="actualPathComputed"
        />
      </li>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/base.scss" as *;

.tile {
  padding: 0;

  &__name {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    padding: 7px 16px  7px 8px;

    &.active {
      background-color: $color-font-bg;
      .cnt {
        color: $color-font-main !important;
      }
    }

    &__cnt {
      color: $color-font-second;
    }
  }

  &__content {
    padding-left: 24px;
  }
}


.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  max-height: 0 !important;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-60px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  max-height: 100vh !important;
  overflow: hidden;
  opacity: 1;
  transform: translateY(0);
}

ul {
  margin: 0;
  display: block;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
}

</style>
