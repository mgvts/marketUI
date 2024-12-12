<script lang="ts">
import {defineComponent} from "vue";
import NavHeader from "./components/NavHeader.vue";
import NavigationAside from "./components/Aside/NavigationAside.vue";
import MainContent from "./components/MainContent.vue";

export default defineComponent({
  name: "App",
  components: {NavHeader, NavigationAside, MainContent}
})
</script>

<template>
  <NavHeader/>
  <div class="content">
    <NavigationAside class="aside"/>
    <MainContent class="main-content"/>
  </div>
</template>

<style lang="scss">
@use '@/styles/main.scss' as *;
@use "@/styles/variables.scss" as *;
@use '@/styles/base.scss' as *;

.content {
  @include adaptive_width;

  & {
    display: flex;
    height: $content-height;
    margin: 0 auto;
    overflow: hidden;
    gap: 36px;
  }

  .aside {
    max-width: $aside-width;
    //overflow: hidden;
  }
}


.main {
  flex: 1;
  //overflow: hidden;

  .main-content {
    height: 100%;
    overflow-y: auto;
    padding: 16px;
    overflow-x: hidden;
  }
}

@media (width < 1240px) {
  .aside {
    display: none !important;
  }
}

</style>
