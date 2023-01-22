import { whoAmI } from './auth-reducer';
const INIT_SUCCESS = "INIT_SUCCESS"

type InitialStateType = {
  init: boolean;
};

let initialState: InitialStateType = {
  init: false,
};

type InitSuccessACType = {
  type: typeof INIT_SUCCESS
}
const initSuccess = ():InitSuccessACType => ({type: INIT_SUCCESS})

export const initializeApp = () => {
  return (dispatch:any) => {
    let promise = dispatch(whoAmI())
    Promise.all([promise]).then(()=>{
      dispatch(initSuccess())
    })
  }
}

const appReducer = (
  state: InitialStateType = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        init:true
      };
    default:
      return { ...state };
  }
};

export default appReducer;
