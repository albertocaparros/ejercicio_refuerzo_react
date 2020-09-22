import React from 'react';
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
  picUrl,
  name,
}) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={picUrl} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />{' '}
          <Typography variant="h6" gutterBottom>
            En el equipo
          </Typography>
        </CardActions>
      </Card>
    </>
  );
};
