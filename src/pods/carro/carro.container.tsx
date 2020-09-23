import React, { useContext, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@material-ui/core';
import ShopContext from 'core/shop/shop.context';
import { CarroComponent } from 'pods/carro';
import { Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: '#c8e4fb',
      minHeight: '600px',
      marginTop: '15px',
      border: '1px black solid',
    },
  })
);

export const CarroContainer: React.FC = () => {
  const classes = useStyles();
  const shopContext = useContext(ShopContext);
  const { shopCart, emptyList } = shopContext;
  const [display, setDisplay] = useState(false);

  const changeDisplay = () => {
    setDisplay(!display);
  };

  return (
    <>
      {display ? (
        <IconButton edge="end" aria-label="delete" onClick={changeDisplay}>
          <MenuOpenIcon />
        </IconButton>
      ) : (
        <IconButton edge="end" aria-label="delete" onClick={changeDisplay}>
          <CloseIcon />
        </IconButton>
      )}
      <div className={classes.root} hidden={display}>
        <List>
          <ListItem>
            <ListItemText
              inset={true}
              primary={
                <>
                  <Typography component="span" variant="h6" color="textPrimary">
                    Equipo
                  </Typography>
                </>
              }
            ></ListItemText>
          </ListItem>
          <Divider></Divider>
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
          {shopCart && shopCart.length > 0 ? (
            <>
              <Divider></Divider>
              <ListItem>
                <ListItemText primary="Borrar lista" />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={emptyList}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </>
          ) : (
            <ListItem>
              <ListItemText
                inset={true}
                primary={
                  <>
                    <Typography
                      component="span"
                      variant="inherit"
                      color="textPrimary"
                    >
                      Añade miembros al equipo!
                    </Typography>
                  </>
                }
              ></ListItemText>
            </ListItem>
          )}
        </List>
      </div>
    </>
  );
};
