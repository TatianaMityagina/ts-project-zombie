<template>
  <div class="registration-form" @submit.prevent="register">
    <h1 class="registration-form__title">Registration</h1>
    <form class="registration-form__form" action="">
      <app-input v-model="registrationBody.name" aria-required="true" required>Name</app-input>
      <app-input type="password" v-model="registrationBody.password">Password</app-input>
      <app-input type="email" v-model="registrationBody.email" required>Email</app-input>
      <app-input type="password" v-model="registrationBody.password_confirmation">Repeat password</app-input>
      <app-checkbox type="checkbox" v-model="registrationBody.isAdmin">I'm a platform administrator</app-checkbox>
      <app-button tag="button" type="submit" :aria-disabled="isDisabled">Sign up</app-button>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import AppInput from "@/components/app/app-input/AppInput.vue";
import AppButton from "@/components/app/app-button/AppButton.vue";
import AppCheckbox from "@/components/app/app-checkbox/AppCheckbox.vue";
import {RegistrationBody, RoleType} from "@/interfaces/registration/registrationBody";
import {mapActions} from "vuex";

const registrationBody: RegistrationBody & {isAdmin: boolean} = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  isAdmin: false,
  role: RoleType.User,
}


export default defineComponent({
  name: "RegistrationForm",
  components: {
    AppInput,
    AppButton,
    AppCheckbox
  },
  data() {
    return {
      registrationBody,
    }
  },
  computed: {
    isDisabled(): boolean {
      return !this.registrationBody.password || this.registrationBody.password !== this.registrationBody.password_confirmation;
    },
  },
  methods: {
    ...mapActions( ["singUp"]),
    register() {
      const { isAdmin, ...formData } = this.registrationBody
      formData.role = isAdmin ? RoleType.Admin : RoleType.User;
      this.singUp(formData);
    }
  }
});
</script>

<style lang="scss" scoped>
  .registration-form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 42%;
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
      justify-content: space-between;
      flex-wrap: wrap;

      .app-input {
        width: 48%;
      }

      .app-button {
        width: 48%;
      }

      .app-checkbox {
        display: flex;
        align-items: center;
        width: 48%;
        padding-bottom: 0;
      }
    }

    @include viewport--lg {
      width: 60%;
    }

    @include viewport--md {
      width: 80%;
    }

    @include viewport--sm {
      width: 90%;
    }
  }

</style>
