<template>
  <div class="burger-toggle">
    <div class="header-main__burger" :class="{'active': isActive}" @click="isActive = !isActive"></div>
    <transition name="slide">
        <nav v-if="isActive" class="header-main__burger-menu">
          <router-link to="/">Home</router-link>
          <router-link to="/about-us">About Us</router-link>
          <router-link to="/history">History</router-link>
        </nav>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BurgerToggle",
  data () {
    return {
      isActive: false
    }
  }
});

</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: transform .3s ease;
}
.slide-leave-active {
  transition: transform .5s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-100%);
}

.header-main {
  &__burger {
      position: relative;
      display: none;
      width: 24px;
      height: 3px;
      cursor: pointer;
      z-index: 2;

      @include viewport--md {
        display: block;
      }

      &::before {
        content: '';
        position: absolute;
        top: 3px;
        left: 0;
        width: 24px;
        height: 2px;
        background-color: $color-green;
        transition-duration: 0.4s;
      }

      &::after {
        content: '';
        position: absolute;
        top: -2px;
        left: 0;
        width: 24px;
        height: 2px;
        background-color: $color-green;
        transition-duration: 0.4s;
      }

      &.active::before {
        top: 0;
        transform: rotate(45deg);
      }

      &.active::after {
        top: 0;
        transform: rotate(135deg);
      }
  }

  &__burger-menu {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 60%;
    height: 100%;
    padding: 72px 32px 32px;
    background-color: $color-pink;

    a {
      font-size: 24px;
    }
  }
}
</style>
