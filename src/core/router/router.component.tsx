import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { OriginalScene, RemakeScene } from 'scenes';
import { AppLayout } from 'layouts';
import { CarroContainer } from 'pods/carro';
import { Navegacion } from 'pods/navegacion';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Router>
        <Navegacion></Navegacion>
        <AppLayout>
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
          <CarroContainer />
        </AppLayout>
      </Router>
    </Fragment>
  );
};
