import React from 'react';
import { Tab } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { switchRoutes } from 'core/router';
import { Link } from 'react-router-dom';

export const Navegacion: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      variant="fullWidth"
      value={value}
      onChange={handleChange}
      indicatorColor="primary"
    >
      <Tab label="Original" component={Link} to={switchRoutes.original}></Tab>
      <Tab label="Remake" component={Link} to={switchRoutes.remake}></Tab>
    </Tabs>
  );
};
