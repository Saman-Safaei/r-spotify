import { useReducer } from 'react';
import userSlice, { actionTypes, TDefaultState } from './user-slice';
import useUserData from '../../hooks/user-data';

function userReducer(state: TDefaultState, action: { type: number; payload?: any }): TDefaultState {
  if (action.type === actionTypes.SET_LOGGED) {
    return {
      ...state,
      logged: true,
    };
  }
  if (action.type === actionTypes.SET_USER) {
    return {
      ...state,
      username: action.payload.username,
      email: action.payload.email,
    };
  }
  if (action.type === actionTypes.LOGOUT_USER) {
    return {
      ...state,
      username: '',
      email: '',
      logged: false,
    };
  } else return state;
}

type TProps = {
  children: any;
};

export default function UserProvider({ children }: TProps) {
  const [userState, userDispatch] = useReducer(userReducer, null, () => ({
    username: 'Loading',
    email: 'Loading',
    logged: !!localStorage.getItem('logged'),
  }));

  const setLogHandler = (isLogged: boolean, token: string) => {
    userDispatch({ type: actionTypes.SET_LOGGED, payload: { isLogged } });
    localStorage.setItem('token', token);
    localStorage.setItem('logged', 'true');
  };
  const setUserHandler = (username: string, email: string) => {
    userDispatch({ type: actionTypes.SET_USER, payload: { username, email } });
  };
  const logoutUserHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('logged');
    userDispatch({ type: actionTypes.LOGOUT_USER });
  };

  useUserData(userState.logged, setUserHandler, logoutUserHandler);

  return (
    <userSlice.Provider
      value={{
        ...userState,
        logoutUser: logoutUserHandler,
        setUser: setUserHandler,
        setLogged: setLogHandler,
      }}>
      {children}
    </userSlice.Provider>
  );
}
