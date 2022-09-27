<template>
  <div class="user-container">
    <header-main></header-main>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderMain from "@/components/app/base/HeaderMain.vue";

export default defineComponent({
  name: "UserContainer",
  components: {
    HeaderMain
  },

});
</script>

<style lang="scss" scoped>
.user-container {
  width: 100%;
  height: 100vh;
}
</style>