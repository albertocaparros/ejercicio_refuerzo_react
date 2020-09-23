import React, { useContext } from 'react';
//import { Link } from 'react-router-dom';
//import { switchRoutes } from 'core/router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import ShopContext from 'core/shop/shop.context';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginBottom: '3rem',
    margin: '1rem',
  },
  media: {
    height: 300,
    backgroundPosition: 'inherit',
  },
});

interface Props {
  picUrl: string;
  id: string;
  name: string;
}

export const RemakeComponent: React.FunctionComponent<Props> = ({
  id,
  picUrl,
  name,
}) => {
  const classes = useStyles();
  const shopContext = useContext(ShopContext);
  const { isInCart, addShopItem, removeShopItem } = shopContext;

  const handleChange = () => {
    if (!isInCart(id)) addShopItem({ id, name, picUrl });
    else removeShopItem(id);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={picUrl}
            title={name}
            onClick={handleChange}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Checkbox
            checked={isInCart(id)}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            onChange={handleChange}
          />
          <Typography variant="h6" gutterBottom>
            En el equipo
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};
