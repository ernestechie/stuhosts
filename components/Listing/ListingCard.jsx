import * as React from 'react';
import {
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActionArea,
  Grid,
} from '@mui/material';
import {
  MyLocationRounded,
  KingBedRounded,
  BathtubSharp,
  PeopleRounded,
  ChairRounded,
} from '@mui/icons-material';

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
          <Grid
            container
            mx='auto'
            rowSpacing={1}
            columnSpacing={{ sm: 1, md: 1 }}
            columns={12}
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid item xs={4} sm={6} width='100%' mt={1}>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '& *': {
                    fontSize: 14,
                  },
                }}
              >
                <KingBedRounded />
                <Typography component='span'>
                  {props.bedrooms} {props.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={4} sm={6} width='100%' mt={1}>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '& *': {
                    fontSize: 14,
                  },
                }}
              >
                <BathtubSharp />
                <Typography component='span'>
                  {props.bathrooms}{' '}
                  {props.bathrooms > 1 ? 'Bathrooms' : 'Bathroom'}
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={4} sm={6} width='100%' mt={1}>
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '& *': {
                    fontSize: 14,
                  },
                }}
              >
                <PeopleRounded />
                <Typography component='span'>
                  {props.capacity} Maximum
                </Typography>
              </Typography>
            </Grid>
            {props.furnished && (
              <Grid item xs={4} sm={6} width='100%' mt={1}>
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    '& *': {
                      fontSize: 14,
                    },
                  }}
                >
                  <ChairRounded />
                  <Typography component='span'>Furnished</Typography>
                </Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
