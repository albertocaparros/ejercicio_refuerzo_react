import React from 'react';
import { OriginalContainer } from 'pods/original';
import { ContainerLayout } from 'layouts';
import { Tab } from '@material-ui/core';
import { switchRoutes } from 'core/router';
import { Link } from 'react-router-dom';

export const OriginalScene: React.FC = () => {
  return (
    <>
      <Tab label="Original" component={Link} to={switchRoutes.original}></Tab>
      <Tab label="Remake" component={Link} to={switchRoutes.remake}></Tab>

      <ContainerLayout>
        <OriginalContainer />
      </ContainerLayout>
    </>
  );
};
