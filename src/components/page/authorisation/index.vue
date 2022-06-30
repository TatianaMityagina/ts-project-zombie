<template>
  <div class="authorisation-form">
    <h1 class="authorisation-form__title">Authorisation</h1>
    <form class="authorisation-form__form" @submit.prevent="submit">
      <app-input type="email" v-model="authBody.email" required>Email</app-input>
      <app-input type="password" v-model="authBody.password">Password</app-input>
      <p class="authorisation-form__text">Don't have an account yet? <router-link to="/registration">Register now</router-link></p>
      <app-button tag="button" type="submit">Sign in</app-button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useToast } from "vue-toastification";
import AppInput from "@/components/app/app-input/AppInput.vue";
import AppButton from "@/components/app/app-button/AppButton.vue";
import { AuthBody } from "@/interfaces/auth/authBody";
import {mapActions} from "vuex";

const authBody: AuthBody = {
  email: '',
  password: '',
}

export default defineComponent({
  name: "RegistrationForm",
  components: {
    AppInput,
    AppButton
  },
  setup() {
    const toast = useToast();
    return { toast }
  },
  data() {
    return {
      authBody
    }
  },
  methods: {
    ...mapActions( ["login"]),
    async submit () {
      try {
        await this.login(this.authBody)
      } catch (e) {
        this.toast.error((e as Error).toString(), {
          timeout: 5000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false
        })
      }
    }
  }
});
</script>

<style lang="scss" scoped>
  .authorisation-form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 30%;
    padding: 24px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 18px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), 2px 4px 12px rgba(0, 0, 0, 0.15),
    inset -2px 2px 2px rgba(255, 255, 255, 0.1),
    inset 1px 1px 2px rgba(255, 255, 255, 0.3);
    transition: width $default-transition-duration;

    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: -120px;
      width: 100%;
      height: 100px;
      background: url("@/assets/image/zombie-logo.png") center / contain no-repeat;
    }

    &__title {
      margin: 16px 0;
      font-weight: 700;
      font-size: 32px;
      line-height: 1.5;
      text-align: center;

      background: -webkit-linear-gradient(left, $color-pink, $color-pink, $color-green);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &__form {
      display: flex;
      flex-direction: column;
    }

    &__text {
      margin: 8px auto 32px;
      color: $color-pink;

      a {
        text-decoration: underline;
        transition: color $default-transition-duration;

        &:hover {
          color: $color-green;
          transition: color $default-transition-duration;
        }
      }
    }

    @include viewport--lg {
      width: 50%;
    }

    @include viewport--md {
      width: 80%;
    }

    @include viewport--sm {
      width: 90%;
    }
  }

</style>
