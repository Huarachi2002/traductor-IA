import { checkingCredentials, login, logout } from "./";

export const checkingAutentication = (email,password) => {
    return async(dispatch) => {
      dispatch(checkingCredentials());  
    }
}


export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    

    dispatch(login({displayName, email}));
  }
}

export const startLoginWithEmailPassword = ({email, password}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const displayName = 'Yeferson Huarachi'
    dispatch(login({displayName , email}));
  }
}

export const startLogout = () => {
  return async(dispatch) => {
    dispatch(logout({}));
  }
}