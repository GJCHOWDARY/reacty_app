import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css";
 
const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    top:0
  },
  media: {
    height: 140,
  },
  pad:{
    padding:30
  }
});

export default function Profile() {
  const classes = useStyles();

  return (
<Container > 
    <div className="row" >
        <div className="col-md-3" className={classes.pad}>
      <p>profile</p>
    </div> 
    </div>
    </Container>  
  );
}
