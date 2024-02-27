import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import subRoutes from './subRoutes';
const App = lazy(() => import('@/App'));

const rootRoute: RouteObject = {
  path: '/',
  element: <App />,
  children: subRoutes,
};

export default rootRoute;
