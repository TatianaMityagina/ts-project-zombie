<template>
  <div class="home" :class="{'bg-pink' : bgChange}">
    <app-button @click="changeBG" :pink="bgChange">Change color</app-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import AppButton from "@/components/app/app-button/AppButton.vue";
import {ActionTypes} from "@/store/types";

export default defineComponent({
  name: "HomePage",
  components: {AppButton},
  computed: {
    ...mapState('user', ["bgChange"])
  },
  methods: {
    ...mapActions('user', { changeColor: ActionTypes.CHANGE_COLOR }),
    changeBG(): void {
      this.changeColor(!this.bgChange)
    }
  }
});
</script>

<style lang="scss" scoped>
  .home {
    position: relative;
    width: 100%;
    height: calc(100% - 80px);
    background: url("@/assets/image/zombie-logo.png") center/ 60% auto no-repeat;

    &.bg-pink {
      background-color: $color-error;
    }

    .app-button {
      position: absolute;
      right: 32px;
      bottom: 32px;
    }
  }
</style>
