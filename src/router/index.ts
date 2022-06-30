import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";
import Home from "@/views/HomePage.vue";
import Registration from "@/views/RegistraionPage.vue";
import Authorisation from "@/views/AuthorisationPage.vue";
import AboutUs from "@/views/AboutUsPage.vue";
import HistoryPage from "@/views/HistoryPage.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import AuthContainer from "@/components/containers/AuthContainer.vue";
import UserContainer from "@/components/containers/UserContainer.vue";
import AuthService from "@/services/authService";

const routes: Array<RouteRecordRaw> = [
  {
    name: "auth",
    path: "",
    redirect: "/authorisation",
    component: AuthContainer,
    children: [
      {
        path: "/registration",
        name: "Registration",
        component: Registration,
        meta: {
          isAuthPage: true,
        }
      },
      {
        path: "/authorisation",
        name: "Authorisation",
        component: Authorisation,
        meta: {
          isAuthPage: true,
        }
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

export const rolesRoutes: Record<string, RouteRecordRaw> = {
  user: {
    name: "user",
        path: "",
        component: UserContainer,
        children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/about-us",
        name: "AboutUs",
        component: AboutUs,
      },
    ]
  },
  admin: {
    name: "user",
    path: "",
    component: UserContainer,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
      {
        path: "/about-us",
        name: "AboutUs",
        component: AboutUs,
      },
      {
        path: "/history",
        name: "HistoryPage",
        component: HistoryPage,
      },
    ]
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const authService = new AuthService()
const currentUser = authService.getCurrentUser()
if (currentUser) {
  router.addRoute(rolesRoutes[currentUser.role])
}
router.beforeEach((to) => {
  const { isAuth } = store.state;

  if (!isAuth && !to.meta.isAuthPage) {
    return { name: 'Authorisation' }
  }

  if (isAuth && to.meta.isAuthPage) {
    return { name: 'Home' }
  }
})

export default router;
