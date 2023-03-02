import { useReducer } from 'react';
import userSlice, { actionTypes, TDefaultState } from './user-slice';

function userReducer(state: TDefaultState, action: { type: number; payload?: any }): TDefaultState {
  if (action.type === actionTypes.SET_USER) {
    return {
      ...state,
      username: action.payload.username,
      token: action.payload.token,
      logged: true,
    };
  }
  if (action.type === actionTypes.LOGOUT_USER) {
    return {
      ...state,
      username: '',
      token: '',
      logged: false,
    };
  } else return state;
}

type TProps = {
  children: any;
};

export default function UserProvider({ children }: TProps) {
  const [userState, userDispatch] = useReducer(userReducer, null, () => ({
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || '',
    logged: !!localStorage.getItem('username') && !!localStorage.getItem('token'),
  }));

  const setUserHandler = (username: string, token: string) => {
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);

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
      }}>
      {children}
    </userSlice.Provider>
  );
}
