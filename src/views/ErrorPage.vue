<template>
  <div class="error-page">
    <h1>404</h1>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ErrorPage",
  });
</script>

<style lang="scss" scoped>
  .error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 80px);

    h1 {
      font-weight: 700;
      font-size: 172px;
      line-height: 1.5;
      text-align: center;

      background: -webkit-linear-gradient(left, $color-pink, $color-pink, $color-green);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
</style>