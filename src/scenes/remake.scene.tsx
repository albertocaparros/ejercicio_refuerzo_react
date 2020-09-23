import React from 'react';
import { RemakeContainer } from 'pods/remake';
import { ContainerLayout } from 'layouts';
import { Tab } from '@material-ui/core';
import { switchRoutes } from 'core/router';
import { Link } from 'react-router-dom';

export const RemakeScene: React.FC = () => {
  return (
    <>
      <ContainerLayout>
        <RemakeContainer />
      </ContainerLayout>
    </>
  );
};
