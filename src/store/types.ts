import {UserData} from "@/services/authService";

export const MutationTypes = {
  SET_IS_AUTH: "SET_IS_AUTH",
  SET_CURRENT_USER: "SET_CURRENT_USER",
  REMOVE_CURRENT_USER: "REMOVE_CURRENT_USER",
  SET_IS_BG_CHANGE: "SET_IS_BG_CHANGE",
}

export const ActionTypes = {
  CHECK_PERMISSION: "CHECK_PERMISSION",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  INIT: "INIT",
  SING_UP: "SING_UP",
  CHANGE_COLOR: 'CHANGE_COLOR',
}
export type ActionType = keyof typeof ActionTypes

export type RootState = {
  isAuth: boolean;
  currentUser: UserData | null;
}

export type UserState = {
  bgChange: boolean;
}
