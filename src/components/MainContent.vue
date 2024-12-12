<script lang="ts">

import {defineComponent} from "vue";
import Card from "@/components/Card/Card.vue";
import Scrollable from "@/components/scrollable.vue";

export default defineComponent({
  name: "MainContent",
  components: {Scrollable, Card},
})
</script>

<template>
<main>
  <scrollable class="content">
    <Card v-for="_ in Array(20)"/>
  </scrollable>
</main>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (width < 1240px) {
    padding: 16px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>