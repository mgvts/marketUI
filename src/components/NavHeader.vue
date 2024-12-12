<script lang="ts">
import {defineComponent} from 'vue'
import logo from '@/assets/logo.svg'
import search from '@/assets/search.svg'
import back from '@/assets/back.svg'
import PlainBtn from "@/components/btns/PlainBtn.vue";
import MyInput from "@/components/myInput.vue";
import TonalBtn from "@/components/btns/TonalBtn.vue";

export default defineComponent({
  name: "NavHeader",
  components: {TonalBtn, MyInput, PlainBtn},
  data() {
    return {
      search: '',
      type: this.getType(),
      icons: {
        search,
        logo,
        back
      }
    }
  },
  computed: {
    isDesktop() {
      return this.type === "desktop"
    }
  },
  methods: {
    getType() {
      const width = window.innerWidth;

      return width <= 1240 ? 'mobile' : 'desktop'
    }
  }
})
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <div class="header__logo__img">
        <img :src="icons.logo" alt="Логотип"/>
        Логотип
      </div>
      <plain-btn
          class="header__logo__catalog"
          text="Каталог"
          height="48px"
          width="104px"
          rouned="8px"
          font-weight="500"
      />
    </div>
    <img :src="icons.back" alt="backIcon" v-if="!isDesktop"/>
    <div class="header__search">
      <my-input
          v-model="search"
          placeholder="Поиск по 100 000 товаров"
          :bordered="isDesktop"
          class="search-input"
      >
        <template v-slot:prepend v-if="isDesktop">
          <img :src="icons.search" alt="Поиск" class="search-icon"/>
        </template>
      </my-input>

      <TonalBtn text="Найти"/>
    </div>
    <nav class="header__links">
      <a href="#">Информация о компании</a>
      <a href="#">Контакты</a>
      <a href="#">Полезные ссылки</a>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/main.scss' as *;
@use "@/styles/variables.scss" as *;
@use '@/styles/base.scss' as *;
@use '@/styles/main.css' as *;

.header {
  @include adaptive_width;

  & {
    display: grid;
    grid-template-columns: 257px 1fr 400px;
    grid-gap: 24px;
    height: 48px;
    padding: 12px 0;
    font-family: 'Inter', sans-serif;
  }


  &__logo {
    width: 257px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__img {
      width: 145px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__search {
    display: flex;
    align-items: center;

    .search-icon {
      display: flex;
      align-items: center;
    }

    .search-button {
      display: none;
      background-color: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 18px;
    }
  }

  &__links {
    @include text-sm;

    display: flex;
    align-items: center;
    gap: 20px;

    a {
      @include link;
    }
  }
}

@media (width < 1240px) {
  .header {
    padding: 8px 16px;
    grid-template-columns: 20px 1fr;
    align-items: center;
    gap: 16px;

    &__logo {
      display: none;
    }

    &__search {
      display: flex;
      flex-direction: row;
      width: 100%;
      gap: 16px;

      padding-bottom: 6px;
      border-bottom: 1px solid $color-border;
    }

    &__links {
      display: none;
    }
  }

}
</style>
