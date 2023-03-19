import { RouterProvider } from "react-router-dom";
import router from ".";
import useUserData from "../hooks/user-data";
import {logoutUser, selectLogged, setUser} from "../store/userSlice";
import {useAppDispatch, useAppSelector} from "../store";

function ReactRouter() {
  const dispatch = useAppDispatch()
  const isUserLoggedIn = useAppSelector(selectLogged);
  
  useUserData(
    isUserLoggedIn,
    (username, email) => dispatch(setUser(username, email)),
    () => dispatch(logoutUser())
  );
  
  return <RouterProvider router={router} />;
}

export default ReactRouter;
