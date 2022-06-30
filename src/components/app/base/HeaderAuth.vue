<template>
  <header class="header-auth">
      <app-button type="button" @click="$router.push('/authorisation')">Login</app-button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/app/app-button/AppButton.vue";


export default defineComponent({
  name: "HeaderMain",
  components: {
    AppButton,
  },
});
</script>

<style lang="scss" scoped>
  .header-auth {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 14px;
    max-width: 1344px;
    height: 80px;
    padding: 0 32px;
    margin: 0 auto;

    .app-button {
      height: 48px;
      width: 90px;
    }
  }
</style>
