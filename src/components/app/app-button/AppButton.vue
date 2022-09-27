<template>
  <button
      v-bind="attributes"
      class="app-button"
      :class="{'app-button--pink' : $attrs.pink}"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AppButton',

  computed: {
    attributes() {
      return this.$attrs;
    },
  },
});
</script>

<style lang="scss" scoped>
  .app-button {
    @include btn-reset;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 0 16px;

    font-family: $main-font-family;
    font-size: 18px;
    color: $color-green;
    border: 2px solid $color-green;
    border-radius: 12px;
    transition: color $default-transition-duration, border $default-transition-duration, background-color $default-transition-duration;

    &:hover {
      color: $white;
      background-color: $color-pink;
      border: 2px solid $color-pink;
      transition: color $default-transition-duration, border $default-transition-duration, background-color $default-transition-duration;
    }

    &[aria-disabled='true'] {
      color: $white;
      background-color: $light-gray;
      border-color: $light-gray;
      pointer-events: none;
    }

    &--pink {
      color: $white;
      background-color: $color-pink;
      border: 2px solid $color-pink;

      &:hover {
        background-color: $color-brilliant-rose;
        border: 2px solid $color-brilliant-rose;
      }
    }

    @include viewport--lg {
      height: 52px;
      font-size: 16px;
    }
  }
</style>