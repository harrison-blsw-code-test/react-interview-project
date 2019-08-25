import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundScreen from './screens/NotFoundScreen';
import routes from './routes';

const renderRoutes = (defintions) => defintions.map((route) => (
  <Route exact key={route.path} path={route.path} component={route.component} />
));

const App = () => (
  <BrowserRouter>
    <Switch>
      {renderRoutes(routes)}
      <Route component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);

export default App;
