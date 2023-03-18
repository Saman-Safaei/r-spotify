import {
  FunctionComponent,
  useContext,
  useEffect,
  MouseEvent as ReactMouseEvent,
  ComponentPropsWithoutRef,
} from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';
import userSlice from '../contexts/user/user-slice';
import { useAppDispatch } from '../store';
import { showSignin } from '../store/uiSlice';

export default function withAuth(Component: FunctionComponent) {
  function AuthWrapper(props: any) {
    const dispatch = useAppDispatch();
    const userCtx = useContext(userSlice);
    const navigate = useNavigate();

    useEffect(() => {
      if (!userCtx.logged) {
        navigate(-1);
        dispatch(showSignin());
      }
    }, [userCtx.logged, navigate]);

    return userCtx.logged ? <Component {...props} /> : <div>Access Denied</div>;
  }

  return AuthWrapper;
}

export function AuthLink({ onClick, ...props }: LinkProps) {
  const dispatch = useAppDispatch();
  const userCtx = useContext(userSlice);

  const clickHandler = (ev: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!userCtx.logged) {
      ev.preventDefault();
      dispatch(showSignin());
    }
  };

  return <Link onClick={clickHandler} {...props} />;
}

export function AuthButton({ onClick, children, ...props }: ComponentPropsWithoutRef<'button'>) {
  const dispatch = useAppDispatch();
  const userCtx = useContext(userSlice);

  const clickHandler = (ev: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!userCtx.logged) {
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
