import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './App';
import MainPage from 'MainPage/containers/MainPage';
import NotFoundView from 'components/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
