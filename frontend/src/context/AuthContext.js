import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload
      }
    case "SIGNUP":
      return {
        user: null
      }
    default:
      return {
        state
      }
  }
}

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, { iser: null });
  console.log('AuthContext state: ', state);

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}