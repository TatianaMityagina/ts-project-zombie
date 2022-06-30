<template>
  <div class="app-checkbox">
    <input class="app-checkbox__input visually-hidden" id="checkbox" v-bind="$attrs"  @change="$emit('update:modelValue', $event.target.checked)" :checked="$attrs.modelValue"/>
    <label class="app-checkbox__label" for="checkbox"><slot></slot></label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppCheckbox",
});
</script>

<style lang="scss" scoped>
  .app-checkbox {
  width: 100%;
  padding-bottom: 20px;

  &[disabled] {
    input {
      pointer-events: none;
    }
  }

  &__label {
    position: relative;
    display: block;
    padding-left: 32px;

    font-weight: 600;
    font-size: 14px;
    line-height: 130%;
    color: $color-pink;

    &::before {
      position: absolute;
      content: '';
      top: -4px;
      left: 0;
      width: 22px;
      height: 22px;
      border-radius: 4px;
      background-color: rgba(44, 44, 44, 0.99);
      border: 1px solid $black;
    }
  }


  .app-checkbox__input:checked + .app-checkbox__label::before {
    background: rgba(44, 44, 44, 0.99) url("@/assets/image/icon/check-icon.svg") center / 80% auto no-repeat;
    border: 1px solid $color-pink;
  }
}
</style>