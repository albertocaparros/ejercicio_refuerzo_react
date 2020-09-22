import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ShopContext from 'core/shop/shop.context';

interface Props {
  picUrl: string;
  id: string;
  name: string;
  selected: boolean;
}

export const CarroComponent: React.FunctionComponent<Props> = ({
  id,
  picUrl,
  name,
}) => {
  const shopContext = useContext(ShopContext);
  const { removeShopItem } = shopContext;

  const deleteItem = () => {
    removeShopItem(id);
  };

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name} src={picUrl} />
        </ListItemAvatar>
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={deleteItem}>
            <HighlightOffIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};
