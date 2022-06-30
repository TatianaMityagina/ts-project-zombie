import { createStore } from "vuex";
import { useToast } from 'vue-toastification'
import modules from "@/store/modules/index";
import router, {rolesRoutes} from "@/router";
import AuthService, {UserData} from "@/services/authService";
import {AuthBody} from "@/interfaces/auth/authBody";
import {RegistrationBody, RoleType} from "@/interfaces/registration/registrationBody";
import {ActionType, ActionTypes, MutationTypes, RootState} from "@/store/types";

const toast = useToast();

const actionPermissions: { [key in ActionType]?: RoleType[]} = {
  [ActionTypes.CHANGE_COLOR]: [RoleType.Admin],
}
const authService = new AuthService();

export default createStore<RootState>({
  state: {
    isAuth: false,
    currentUser: null,
  },

  mutations: {
    [MutationTypes.SET_IS_AUTH](state, isAuth: boolean) {
      state.isAuth = isAuth
    },
    [MutationTypes.SET_CURRENT_USER](state, user: UserData) {
      state.currentUser = user;
    },
    [MutationTypes.REMOVE_CURRENT_USER](state) {
      state.currentUser = null;
    }
  },

  actions: {
    [ActionTypes.INIT] ({commit}) {
      const currentUser = authService.getCurrentUser();
      if (currentUser) {
        commit(MutationTypes.SET_IS_AUTH, true)
        commit(MutationTypes.SET_CURRENT_USER, currentUser)
      }
    },
    async [ActionTypes.LOGIN]({ dispatch }, data: AuthBody) {
      try {
        const currentUser = await authService.login(data)
        if (!currentUser) {
          return
        }
        dispatch(ActionTypes.INIT)
        router.addRoute(rolesRoutes[currentUser.role])

        await router.push("/home")
      } catch (error) {
        await router.push("/authorisation")
        throw error
      }
    },
    async [ActionTypes.SING_UP]({dispatch},  data: RegistrationBody) {
      const dataLogin: AuthBody = {
        email: data.email,
        password: data.password
      }

      try {
        await authService.singUp(data)
        await dispatch(ActionTypes.LOGIN, dataLogin)
      } catch (error) {
        console.error(error)
      }
    },
    [ActionTypes.LOGOUT]({commit}) {
      authService.logout();
      commit(MutationTypes.SET_IS_AUTH, false)
      commit(MutationTypes.REMOVE_CURRENT_USER)
      return router.push("/authorisation")
    },
    [ActionTypes.CHECK_PERMISSION]({ state }, action: ActionType) {
      const permissions = actionPermissions[action];
      if (!permissions) {
        return true
      }

      if (!state.currentUser) {
        throw new Error('Can\'t check permission for non logged in user')
      }

      if (state.currentUser.role == RoleType.User) {
        toast.error("Only available to admins")
      }

      return permissions.includes(state.currentUser.role)
    },
  },
  modules,
});
