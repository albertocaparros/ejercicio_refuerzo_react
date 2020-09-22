import React from 'react';
import * as classes from './app.layout.styles';
import { Container } from '@material-ui/core';

export const AppLayout: React.FunctionComponent = props => {
  const { children } = props;

  return (
    <Container fixed>
      <div className={classes.root}>{children}</div>
    </Container>
  );
};
