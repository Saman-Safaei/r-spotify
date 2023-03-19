import {
  FunctionComponent,
  useEffect,
  MouseEvent as ReactMouseEvent,
  ComponentPropsWithoutRef,
} from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../store';
import { showSignin } from '../store/uiSlice';
import {selectLogged} from "../store/userSlice";

export default function withAuth(Component: FunctionComponent) {
  function AuthWrapper(props: any) {
    const dispatch = useAppDispatch();
    const isUserLoggedIn = useAppSelector(selectLogged);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isUserLoggedIn) {
        navigate(-1);
        dispatch(showSignin());
      }
    }, [dispatch, isUserLoggedIn, navigate]);

    return isUserLoggedIn ? <Component {...props} /> : <div>Access Denied</div>;
  }

  return AuthWrapper;
}

export function AuthLink({ onClick, ...props }: LinkProps) {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector(selectLogged)

  const clickHandler = (ev: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isUserLoggedIn) {
      ev.preventDefault();
      dispatch(showSignin());
    }
  };

  return <Link onClick={clickHandler} {...props} />;
}

export function AuthButton({ onClick, children, ...props }: ComponentPropsWithoutRef<'button'>) {
  const dispatch = useAppDispatch();
  const isUserLoggedIn = useAppSelector(selectLogged)

  const clickHandler = (ev: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!isUserLoggedIn) {
      ev.preventDefault();
      dispatch(showSignin());
    } else {
      if (onClick) onClick(ev);
    }
  };

  return (
    <button onClick={clickHandler} {...props}>
      {children}
    </button>
  );
}
