import React, { useContext } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ShopContext from 'core/shop/shop.context';
import { CarroComponent } from 'pods/carro';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 500,
      backgroundColor: '#a6d4fa',
      minHeight: '500px',
    },
  })
);

export const CarroContainer: React.FC = () => {
  const classes = useStyles();
  const shopContext = useContext(ShopContext);
  const { shopCart } = shopContext;

  return (
    <div className={classes.root}>
      <List>
        <ListItem>
          <ListItemIcon>
            <SportsEsportsIcon />
          </ListItemIcon>
          <ListItemText primary="Equipo de combate" />
        </ListItem>
        {shopCart
          ? shopCart.map(shopItem => {
              return (
                <CarroComponent
                  key={shopItem.id}
                  {...shopItem}
                ></CarroComponent>
              );
            })
          : null}
      </List>
    </div>
  );
};
