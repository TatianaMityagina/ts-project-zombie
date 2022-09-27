<template>
  <div class="about-us">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUs",
  components: {},
});
</script>

<style lang="scss" scoped>
  .about-us {
    width: 100%;
    height: calc(100% - 80px);
    background: url("@/assets/image/zombie-3.jpeg")  center no-repeat;
  }
</style>
