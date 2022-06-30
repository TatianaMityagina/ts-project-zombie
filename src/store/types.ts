import {UserData} from "@/services/authService";

export const MutationTypes = {
  SET_IS_AUTH: "SET_IS_AUTH",
  SET_CURRENT_USER: "SET_CURRENT_USER",
  REMOVE_CURRENT_USER: "REMOVE_CURRENT_USER",
  SET_IS_BG_CHANGE: "SET_IS_BG_CHANGE",
}

export const ActionTypes = {
  CHECK_PERMISSION: "checkPermission",
  LOGIN: "login",
  LOGOUT: "logout",
  INIT: "init",
  SING_UP: "singUp",
  CHANGE_COLOR: 'changeColor',
}
export type ActionType = keyof typeof ActionTypes

export type RootState = {
  isAuth: boolean;
  currentUser: UserData | null;
}

export type UserState = {
  bgChange: boolean;
}
