<template>
  <div class="authorization-page">
    <authorization-form></authorization-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthorizationForm from "@/components/page/authorization/index.vue";

export default defineComponent({
  name: "AuthorizationPage",
  components: {
    AuthorizationForm
  },
});
</script>

<style lang="scss" scoped>
  .authorization-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 80px);
    background-color: $black;
  }
</style>
