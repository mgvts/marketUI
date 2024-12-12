<script lang="ts">
import {defineComponent} from 'vue'
import NavigationTile from "@/components/Aside/NavigationTile.vue";
import {AsidePath, pathId} from "@/types.ts";
import MyInput from "@/components/myInput.vue";
import Scrollable from "@/components/scrollable.vue";
import TextBtn from "@/components/btns/TextBtn.vue";


export default defineComponent({
  name: "NavigationAside",
  components: {TextBtn, Scrollable, MyInput, NavigationTile},
  data() {
    return {
      data: this.getPath(),
      actualPath: [] as pathId[],
      priceFrom: '' as string ,
      priceTo: '' as string,
      brandSearch: '' as string,
    }
  },
  methods: {
    changePath(ids: pathId[]) {
      this.actualPath = ids
    },
    getPath(): AsidePath {
      return {
        name: 'Название категории 1',
        content: [
          this.createPath(),
          this.createPath(),
          {
            name: 'nested 1',
            content: [this.createPath(), this.createPath(), this.createPath()],
            count: 3,
            id: this.generateId(),
          },
          {
            name: 'nested 2',
            content: [this.createPath(), this.createPath(), this.createPath()],
            count: 3,
            id: this.generateId(),
          },
        ],
        count: 9,
        id: 0,
      };
    },
    createPath(): AsidePath {
      return {
        name: `Название ${this.generateId()}`,
        id: this.generateId(),
        content: [],
        count: 3
      };
    },
    generateId(): number {
      if (!this._idCounter) this._idCounter = 1; // Локальный счётчик
      return this._idCounter++;
    },
  },
})
</script>

<template>
  <aside>
    <div class="block navigation">
      <scrollable >
        <NavigationTile
            :item="data"
            v-model:actualPath="actualPath"
        />
      </scrollable>
    </div>
    <div class="block">
      <div class="title center">Цена</div>
      <div class="price-container">
        <my-input
            v-model="priceFrom"
            placeholder="0"
            width="98px"
            height="36px"
        >
          <template v-slot:prepend>
            <div class="text-x-sm">От</div>
          </template>
        </my-input>
        -
        <my-input
            v-model="priceTo"
            placeholder="999 999"
            width="98px"
            height="36px"
        >
          <template v-slot:prepend>
            <div class="text-x-sm">До</div>
          </template>
        </my-input>
      </div>
    </div>

    <div class="block brand">
      <div class="header">
        <div class="title">Бренд</div>
        <TextBtn text="Очистить" text-decoration="underline" @click="brandSearch =''"/>
      </div>
      <div>
        <my-input v-model="brandSearch" placeholder="Поиск" width="258px"/>
      </div>
      <scrollable class="scrollable-content">
        <div v-for="_ in Array(20)" class="attribute">
          <label class="container">Атрибут
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <div class="count">3</div>
        </div>
      </scrollable>
    </div>
    <div class="block size">
      <div class="title center">Размер</div>
      <scrollable class="scrollable-content" >
        <div v-for="_ in Array(20)" class="attribute">
          <label class="container">Атрибут
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
          <div class="count">3</div>
        </div>
      </scrollable>
    </div>
  </aside>
</template>

<style scoped lang="scss">
@use '@/styles/base.scss' as *;

.center {
  width: fit-content;
  margin: 0 auto;
}

$scrollable_height: calc((100%  - 3*28px - 72px - 10px)/11);
aside {
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-bottom: 10px;
  height: calc(100vh - $header-height);

  .price-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; /* Компоненты будут размещены по краям контейнера */
    width: 100%;
    gap: 10px; /* Расстояние между элементами */
  }

  .block {
    display: flex;
    flex-direction: column;
    gap: 16px;
    &.navigation {
      max-height: calc($scrollable_height*4);
    }

    &.brand{
      max-height: calc($scrollable_height*4);
    }
    &.size {
      max-height: calc($scrollable_height*3);
    }

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .title {
    @include text-md;

    & {
      font-weight: bold;
    }
  }
  .scrollable-content {
    display: flex;
    gap: 12px;
    flex-direction: column;
  }
  .attribute {
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .container {
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 16px;
      user-select: none;
      padding-left: 32px; // 20px + 12px
    }

    input {
      display: none;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: $color-white;
      border: thin solid $color-border;
      border-radius: 2px;
    }

    .container:hover input ~ .checkmark {
      background-color: $color-icons;
    }

    .container input:checked ~ .checkmark {
      background-color: $color-brand;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .container input:checked ~ .checkmark:after {
      display: block;
    }

    .container .checkmark:after {
      left: 4px;
      top: 3.5px;
      width: 6px;
      height: 8px;
      border-radius: 2px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }

  .clear {
    color: $color-font-second;
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>