import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "./assets/style/main.scss";
import {baseToastConfig} from "@/compositions/notification";

createApp(App)
  .use(store)
  .use(router)
  .use(Toast, baseToastConfig)
  .mount("#app");
