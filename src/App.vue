<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {mapActions} from "vuex";
import {ActionTypes} from "@/store/types";

export default defineComponent({
  name: "App",
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions( { init: ActionTypes.INIT } )
  }
});
</script>

<style lang="scss">
  #app {
    min-height: 100vh;
  }
</style>
