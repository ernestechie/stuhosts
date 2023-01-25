import * as React from 'react';
import { Typography, CardMedia, Card, CardContent } from '@mui/material';
import { CardActionArea } from '@mui/material';

export default function ListingCard(props) {
  return (
    <Card
      sx={{
        maxWidth: 500,
        mx: 'auto',
        boxShadow: 'none',
        // border: '1px solid var(--light)',
        borderRadius: 2,
        minHeight: 400,
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          // height='140'
          image={props.image}
          alt={props.summary}
          sx={{ height: '300px', borderRadius: 2 }}
        />
        <CardContent sx={{ px: 0, py: 2 }}>
          <Typography gutterBottom variant='h6' component='div'>
            {props.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
