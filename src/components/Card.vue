<script lang="ts">
import {defineComponent} from 'vue';
import box from '@/assets/box.svg'
import fire from '@/assets/fire.svg'
import PlainBtn from "@/components/btns/PlainBtn.vue";

export default defineComponent({
  name: 'ProductCard',
  components: {PlainBtn},
  data() {
    return {
      box,
      fire
    }
  }
});
</script>

<template>
  <div class="card">
    <div class="card__image">
      <div class="card__image__overlay">
        <div class="card__image__overlay__label">Хит продаж <span class="card__icon"><img :src="fire"/></span></div>
        <div class="card__image__overlay__discount">25%</div>
      </div>
      <img class="card__image__icon" :src="box" alt="icon img"/>
    </div>
    <div class="card__info">
      <div class="card__info__brand">Бренд</div>
      <div class="card__info__title">
        Полное название товара в несколько строк для вида с обрывом в конце
        Полное название товара в несколько строк для вида с обрывом в конце
        Полное название товара в несколько строк для вида с обрывом в конце
      </div>
    </div>
    <div class="card__price">
      <span class="card__price-current">5 990 ₽</span>
      <s class="card__price-old">5 990 ₽</s>
    </div>
    <plain-btn text="Купить" padding="12px 16px"></plain-btn>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base' as *;

.card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: 'PT Sans', sans-serif;
  transition: box-shadow 0.2s;
  padding: 5px; // without padding box shadow doesnt looks well

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &__image {
    background: $color-image-bg;
    position: relative;
    height: 200px;

    &__icon {
      display: flex;
      justify-content: center;
      width: 60px;
      transform: translateY(100%);
      margin: 0 auto;
    }

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;

      &__label {
        position: absolute;
        top: 12px;
        left: 12px;
        width: fit-content;

        padding: 0 8px;
        background: $color-white;
        border-radius: 4px;
        display: flex;
        align-items: stretch;
        gap: 4px;
      }

      &__discount {
        position: absolute;

        bottom: 12px;
        left: 12px;
        width: fit-content;

        color: $color-white;
        background: $color-brand;
        border-radius: 4px;
        padding: 6px 10px;
      }
    }
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__brand {
      @include text-secondary;
    }

    &__title {
      @include text-sm;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      @media (width > 1920px) {
        -webkit-line-clamp: 2;
        line-clamp: 2;
      }
    }
  }

  &__price {
    display: flex;
    align-items: center;
    gap: 8px;

    &-current {
      @include text-md;
      font-weight: bold;
    }

    &-old {
      @include text-secondary;
      text-decoration: line-through;
    }
  }
}
</style>
