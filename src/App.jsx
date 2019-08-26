import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import apolloClient from './services/apolloClient';
import routes from './routes';
import NotFoundScreen from './screens/NotFoundScreen';

const renderRoutes = (defintions) => defintions.map((route) => (
  <Route exact key={route.path} path={route.path} component={route.component} />
));

const App = () => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {renderRoutes(routes)}
        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
