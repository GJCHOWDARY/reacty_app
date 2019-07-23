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
import { Carousel } from 'react-responsive-carousel';

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
let data = [
  {id: 35, item: 'jumper', color: 'red', img: 'https://images-na.ssl-images-amazon.com/images/I/71NHQ-WqRAL._SX355_.jpg', price: 20},
  {id: 42, item: 'shirt', color: 'blue', img: 'https://rukminim1.flixcart.com/image/832/832/j6i7ma80/poster/m/4/x/large-flower-pot-poster-hd-wallpaper-background-fine-art-paper-original-imaer2gzdqvbefzv.jpeg?q=70', price: 15},
  {id: 71, item: 'socks', color: 'black', img: 'https://i.pinimg.com/originals/3e/c6/19/3ec619d9f96fc07327173610e2246f94.jpg', price: 5},
  {id: 35, item: 'jumper', color: 'red', img: 'https://www.technocrazed.com/wp-content/uploads/2015/12/Tree-wallpaper-to-use-as-background-135.jpg', price: 20},
  {id: 71, item: 'socks', color: 'black', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8vRBAPxjdWr8huQJONuUMBXxuedAjWbswVjmEHwwTgMIO9KEkXQ', price: 5},
  {id: 42, item: 'shirt', color: 'blue', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5XHuLFKuxczhnghXWbb_IzP8_fySB3OfYM8NItPqD8iD3dFS', price: 15},
  {id: 71, item: 'socks', color: 'black', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUQl7QZv91z1TTkkl1pVZZAxLOKln4QOXHwnO09esAX7k86Cq', price: 5},
  {id: 71, item: 'socks', color: 'black', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAvmDiIF7cKQUcDoGxOYvT5FlbuMROm-H1QLsjc9h3NCblMyW', price: 5},
  {id: 42, item: 'shirt', color: 'blue', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5XHuLFKuxczhnghXWbb_IzP8_fySB3OfYM8NItPqD8iD3dFS', price: 15},
  {id: 35, item: 'jumper', color: 'red', img: 'https://www.technocrazed.com/wp-content/uploads/2015/12/Tree-wallpaper-to-use-as-background-135.jpg', price: 20},
  {id: 35, item: 'jumper', color: 'red', img: 'https://images-na.ssl-images-amazon.com/images/I/71NHQ-WqRAL._SX355_.jpg', price: 20},
  {id: 71, item: 'socks', color: 'black', img: 'https://i.pinimg.com/originals/3e/c6/19/3ec619d9f96fc07327173610e2246f94.jpg', price: 5},
  ]
  
export default function Home() {
  const classes = useStyles();

  return (
<Container >
  {/* <div className="row">
  <Carousel>
  {data.map((item, key) =>
                <div>
                    <img src={item.img} />
                    <p className="legend">Legend 1</p>
                </div> 
     )}
            </Carousel>
  </div> */}
    <div className="row" >
       {data.map((item, key) =>
       <div className="col-md-3" className={classes.pad}>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.img}
          title="Nature "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Like
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card> 
    </div>
      )}
    </div>
    </Container>  
  );
}
