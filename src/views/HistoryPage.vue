<template>
  <div class="history">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HistoryPage",
  components: {},
});
</script>

<style lang="scss" scoped>
  .history {
    width: 100%;
    height: calc(100% - 80px);
    background: url("@/assets/image/zombie-5.jpeg")  center no-repeat;
  }
</style>
