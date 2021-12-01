import React from 'react';
import { Navigate, useLocation} from 'react-router-dom'; // A wrapper for <Route> that redirects to the login
import {BasicLayout} from "@baas-fe/shared/ui";
import {useSelector} from "react-redux";
import { RootState } from '../state';

export const PrivateAuth: React.FC<({children: JSX.Element})> = ({children})=> {
  const account = useSelector(({ account }: RootState) => account);

  const location = useLocation();
  if (!account.isLogin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

export const PrivateRoute = () => {
  return (
    <PrivateAuth>
      <BasicLayout/>
    </PrivateAuth>
  )
}
