import * as React from 'react';
import {
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import { MyLocationRounded } from '@mui/icons-material';

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
        '&:hover': {
          background: 'none',
        },
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
          <Typography gutterBottom variant='h6' component='p'>
            {props.name}
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '& *': {
                fontSize: 15,
              },
            }}
          >
            <MyLocationRounded />
            <Typography component='span'>{props.location}</Typography>
          </Typography>
          <Typography
            gutterBottom
            variant='h6'
            component='p'
            my={1}
            fontWeight={700}
          >
            N{props.price} <Typography component='span'> / year</Typography>
          </Typography>
          {/* <Typography variant='body2' color='text.secondary'>
            {props.summary}
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
