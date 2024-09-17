import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards() {
  return (
    <section>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9vbbzgMzy3vaRqbzx2NjaRscWZ8UfdCeLw&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lambhorgini
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Automobili Lamborghini commonly referred to as Lamborghini, is an Italian manufacturer of high-performance sports cars based in the small Italian village of Sant'Agata Bolognese, near Bologna
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9vbbzgMzy3vaRqbzx2NjaRscWZ8UfdCeLw&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lambhorgini
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Automobili Lamborghini commonly referred to as Lamborghini, is an Italian manufacturer of high-performance sports cars based in the small Italian village of Sant'Agata Bolognese, near Bologna
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR9vbbzgMzy3vaRqbzx2NjaRscWZ8UfdCeLw&s"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lambhorgini
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Automobili Lamborghini commonly referred to as Lamborghini, is an Italian manufacturer of high-performance sports cars based in the small Italian village of Sant'Agata Bolognese, near Bologna
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </section>



    



    
    

    
  );
  
}