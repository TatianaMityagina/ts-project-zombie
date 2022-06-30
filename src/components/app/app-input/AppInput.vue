<template>
  <div class="app-input">
    <label class="app-input__label">
      <span><slot></slot></span>
      <input v-bind="$attrs" :value="$attrs.modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
    </label>
    <span class="app-input__error">{{ $attrs.errorText }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppInput",
});
</script>

<style lang="scss" scoped>
  .app-input {
    position: relative;

    width: 100%;
    padding-bottom: 20px;

    &.app-input--error {
      input {
        border-color: $color-error;
        box-shadow: 0 0 8px rgb(255, 147, 147);
      }
    }

    &[disabled] {
      input {
        pointer-events: none;
      }
    }

    &__label {
      position: relative;
      display: block;

      span {
        display: inline-block;

        margin-bottom: 8px;
        padding-left: 16px;

        font-weight: 600;
        font-size: 14px;
        line-height: 130%;
        color: $color-green;
        letter-spacing: -0.01em;
      }

      input {
        width: 100%;
        height: 60px;
        padding: 20px 16px;

        font-size: 16px;
        line-height: 100%;
        font-weight: 700;
        color: $color-pink;
        background-color: rgba(44, 44, 44, 0.99);
        border: 1px solid $black;
        border-radius: 8px;
        outline: none;

        &:focus {
          border: 1px solid $color-green;
        }
      }

      i {
        color: $pomegranate;
      }
    }

    &__error {
      display: inline-block;
      padding: 6px 16px 0;
      font-size: 12px;
      color: $color-error;
    }
  }
</style>