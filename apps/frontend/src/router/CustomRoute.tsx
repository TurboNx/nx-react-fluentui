import React from 'react';
import { Route, Routes, useRoutes} from 'react-router-dom';
import NotFound from '../views/not-found';
import Login from '../views/login/login';
import {PrivateRoute} from "./PrivateRoute";

function CustomRoute() {
  return (
    useRoutes([{
      path: '/',
      element: <PrivateRoute/>
    },
      {
        path: '/404',
        element: <NotFound/>
      },{
        path: '/login',
        element: <Login/>
      },{
        path: '*',
        element: <NotFound
        />
      }])
  );
}

export default CustomRoute;
