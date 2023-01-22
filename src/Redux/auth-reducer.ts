import { authAPI } from './../Components/api/api';
const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
const LOGOUT_SUCCESSFUL = "LOGOUT_SUCCESSFUL"
const SET_CURRENT_USER_ID = "SET_CURRENT_USER_ID"

type CurrentUserType = {

}

type InitialStateType = {
  currentUserId: number | null
  isAuthorized: boolean | null
};

let initialState:InitialStateType = {
  currentUserId: null,
  isAuthorized: null
};

type SetCurrentUserAC = {
  type: typeof SET_CURRENT_USER_ID
  userId: number
}
type LoginSuccessfulACType = {
  type: typeof LOGIN_SUCCESSFUL
  userId: number
}
// const setCurrentUserId = (userId:number):SetCurrentUserAC => ({type: SET_CURRENT_USER_ID, userId})
const loginSuccessful = (userId:number):LoginSuccessfulACType => ({type: LOGIN_SUCCESSFUL, userId})
const logoutSuccessful = () => ({type: LOGOUT_SUCCESSFUL})
export const whoAmI = () => {
    return async (dispatch:any) => {
        const response = await authAPI.whoAmI()
        if (response.data.resultCode===0) {
          dispatch(loginSuccessful(response.data.data.userId))
        }
    }
}
export const loginRequest = (email:string,password:string,rememberMe:boolean,captcha:any) => {
  return async (dispatch:any) => {
      const response = await authAPI.login(email,password,rememberMe,captcha)
      if (response.data.resultCode===0) {
        dispatch(loginSuccessful(response.data.data.userId))
      }
  }
}

export const logoutRequest = () => {
  return async (dispatch:any) => {
    const response = await authAPI.logout()
    if (response.data.resultCode===0) {
      dispatch(logoutSuccessful())
    }
  }
}


const authReducer = (
  state: InitialStateType = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      debugger
      return {
        ...state,
        currentUserId: action.userId,
        isAuthorized:true
      };
    case LOGOUT_SUCCESSFUL:
      return {
        ...state,
        currentUserId: null,
        isAuthorized: null
      }
    default:
      return { ...state };
  }
};

export default authReducer;
