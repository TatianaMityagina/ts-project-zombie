<template>
  <div class="authorisation-page">
    <authorisation-form></authorisation-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import authorisationForm from "@/components/page/authorisation/index.vue";

export default defineComponent({
  name: "AuthorisationPage",
  components: {
    authorisationForm
  },
});
</script>

<style lang="scss" scoped>
  .authorisation-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 80px);
    background-color: $black;
  }
</style>
