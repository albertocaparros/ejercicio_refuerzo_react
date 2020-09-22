import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { OriginalScene, RemakeScene } from 'scenes';
import { AppLayout } from 'layouts';
import { CarroContainer } from 'pods/carro';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Fragment>
      <AppLayout>
        <Router>
          <Switch>
            <Route
              exact={true}
              path={[switchRoutes.root, switchRoutes.original]}
              component={OriginalScene}
            />
            <Route
              exact={true}
              path={switchRoutes.original}
              component={OriginalScene}
            />
            <Route
              exact={true}
              path={switchRoutes.remake}
              component={RemakeScene}
            />
          </Switch>
        </Router>
        <CarroContainer />
      </AppLayout>
    </Fragment>
  );
};
