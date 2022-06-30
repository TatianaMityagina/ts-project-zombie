<template>
  <div class="auth-container">
    <header-auth></header-auth>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderAuth from "@/components/app/base/HeaderAuth.vue";


export default defineComponent({
  name: "AuthContainer",
  components: {
    HeaderAuth
  },
});
</script>

<style lang="scss" scoped>
.auth-container {
  width: 100%;
  height: 100vh;
}
</style>
