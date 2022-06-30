<template>
  <div class="registration">
    <registration-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import registrationForm from "@/components/page/registration/index.vue";

export default defineComponent({
  name: "RegistrationPage",
  components: {
    registrationForm,
  },
});
</script>

<style lang="scss" scoped>
  .registration {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100% - 80px);
    background-color: $black;
  }
</style>
