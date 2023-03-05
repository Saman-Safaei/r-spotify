import {
  FunctionComponent,
  useContext,
  useEffect,
  MouseEvent as ReactMouseEvent,
  ComponentPropsWithoutRef,
} from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';
import userSlice from '../contexts/user/user-slice';
import uiSlice from '../contexts/ui/ui-slice';

export default function withAuth(Component: FunctionComponent) {
  function AuthWrapper(props: any) {
    const userCtx = useContext(userSlice);
    const uiCtx = useContext(uiSlice);
    const navigate = useNavigate();

    useEffect(() => {
      if (!userCtx.logged) {
        navigate(-1);
        uiCtx.showSignin();
      }
    }, [userCtx.logged, navigate]);

    return userCtx.logged ? <Component {...props} /> : <div>Access Denied</div>;
  }

  return AuthWrapper;
}

export function AuthLink({ onClick, ...props }: LinkProps) {
  const userCtx = useContext(userSlice);
  const uiCtx = useContext(uiSlice);

  const clickHandler = (ev: ReactMouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!userCtx.logged) {
      ev.preventDefault();
      uiCtx.showSignin();
    }
  };

  return <Link onClick={clickHandler} {...props} />;
}

export function AuthButton({ onClick, children, ...props }: ComponentPropsWithoutRef<'button'>) {
  const userCtx = useContext(userSlice);
  const uiCtx = useContext(uiSlice);

  const clickHandler = (ev: ReactMouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!userCtx.logged) {
      ev.preventDefault();
      uiCtx.showSignin();
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
