import React, { lazy, Suspense } from 'react';
import {
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from './components/Spinner';
import { PUBLIC_ROUTES } from './routes.constants';

const publicRoutes = [
  {
    path: PUBLIC_ROUTES.SIGN_IN,
    exact: false,
    component: lazy(() => import('./containers/Login')),
  },
  {
    path: PUBLIC_ROUTES.SIGN_UP,
    exact: false,
    component: lazy(() => import('./containers/Register')),
  },
  {
    path: PUBLIC_ROUTES.ACTIVATION,
    exact : true,
    component: lazy(() => import('./containers/Activate'))
  },
  {
    path: PUBLIC_ROUTES.VERIFY_SUCCESS,
    exact: false,
    component: lazy(() => import('./containers/VerificationSuccess')),
  },
  {
    path: PUBLIC_ROUTES.VERIFY_FAILURE,
    exact: false,
    component: lazy(() => import('./containers/VerificationFailure.js')),
  },
  {
    path: PUBLIC_ROUTES.FORGOT_PASSWORD,
    exact: false,
    component: lazy(() => import('./containers/ForgottenPassword')),
  },
  {
    path: PUBLIC_ROUTES.RESET_PASSWORD,
    exact: false,
    component: lazy(() => import('./containers/ResetPassword')),
  },
  {
    path: PUBLIC_ROUTES.REGISTER_SUCCESS,
    exact: false,
    component: lazy(() => import('./containers/RegisterSuccess')),
  },
];

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.app);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{ pathname: PUBLIC_ROUTES.SIGN_IN, state: { from: location } }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Switch>
          {publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.component />
            </Route>
          ))}
          <PrivateRoute>
            <div>Private</div>
          </PrivateRoute>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
