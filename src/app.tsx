import React from 'react';
import { hot } from 'react-hot-loader/root';
import { RouterComponent } from 'core/router';
import { ThemeProviderComponent } from './core/theme';
import { ShopState } from 'core/shop';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProviderComponent>
      <ShopState>
        <RouterComponent />;
      </ShopState>
    </ThemeProviderComponent>
  );
};

export default hot(App);
