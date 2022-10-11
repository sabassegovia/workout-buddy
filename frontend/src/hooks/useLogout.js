import { useAuthContext } from './useAuthContext.js';


export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //update global state
    dispatch({ type: "LOGOUT" });
    //delete token from local storage
    localStorage.removeItem('user');
  }
  return { logout };
}
