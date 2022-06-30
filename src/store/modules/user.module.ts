import { Module } from "vuex";
import {ActionTypes, MutationTypes, RootState, UserState} from "@/store/types";

const userModule: Module<UserState, RootState> = {
    namespaced: true,
    state: {
        bgChange: false,
    },
    mutations: {
        [MutationTypes.SET_IS_BG_CHANGE](state, item) {
            state.bgChange = !item
        }
    },
    getters: {
        bgChange: (state) => state.bgChange
    },
    actions: {
      async [ActionTypes.CHANGE_COLOR]({commit, dispatch}, item) {
          const actionPermitted = await dispatch(ActionTypes.CHECK_PERMISSION, ActionTypes.CHANGE_COLOR, {root: true});
          if (!actionPermitted) {
              return
          }
          commit(MutationTypes.SET_IS_BG_CHANGE, item);
      }
    }
}

export default userModule
