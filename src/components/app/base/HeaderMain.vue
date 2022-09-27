<template>
  <header class="header-main">
    <burger-toggler></burger-toggler>
    <nav>
      <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'AboutUs'}">About Us</router-link> |
      <router-link to="/history">History</router-link>
    </nav>
    <div class="header-main__btn-wrapper">
      <app-button type="button" @click="submit">Logout</app-button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "@/components/app/app-button/AppButton.vue";
import BurgerToggler from "@/components/app/base/BurgerToggler.vue";
import {mapActions} from "vuex";
import { ActionTypes } from "@/store/types";

export default defineComponent({
  name: "HeaderMain",
  components: {
    AppButton,
    BurgerToggler
  },
  methods: {
    ...mapActions({ logout: ActionTypes.LOGOUT }),
    submit(): void {
      this.logout()
    }
  }
});
</script>

<style lang="scss" scoped>
  .header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1344px;
    height: 80px;
    padding: 0 32px;
    margin: 0 auto;

    nav {
      display: flex;
      gap: 24px;
      
      a {
        font-size: 24px;
        transition: color $default-transition-duration;
        
        @media (min-width: $viewport--xl) {
          &:hover {
            color: $color-green;
            transition: color $default-transition-duration;
          }
        }
      }

      .router-link-active {
        color: $color-green;
      }
    }

    .burger-toggle {
      display: none;
    }

    &__btn-wrapper {
      display: flex;
      gap: 14px;

      .app-button {
        height: 48px;
        width: 90px;
      }
    }

    @include viewport--lg {
      nav {
        display: flex;
        gap: 16px;
      }
    }

    @include viewport--md {
      nav {
        display: none;
      }

      .burger-toggle {
        display: block;
      }
    }
  }
</style>