import React from 'react';
import * as classes from './container.layout.styles';

export const ContainerLayout: React.FunctionComponent = props => {
  const { children } = props;

  return <div className={classes.root}>{children}</div>;
};
