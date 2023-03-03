import { useReducer } from 'react';
import userSlice, { actionTypes, TDefaultState } from './user-slice';

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

  const setLogHandler = (isLogged: boolean) => {
    userDispatch({ type: actionTypes.SET_LOGGED, payload: { isLogged } });
  };
  const setUserHandler = (username: string, token: string) => {
    userDispatch({ type: actionTypes.SET_USER, payload: { username, token } });
  };
  const logoutUserHandler = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');

    userDispatch({ type: actionTypes.LOGOUT_USER });
  };

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
