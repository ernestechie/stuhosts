import React from 'react';
import { Grid } from '@mui/material';
import { ListingCard } from '../';
import listings from '../../static/listings.json';

const Listings = () => {
  return (
    <Grid
      container
      mx='auto'
      rowSpacing={4}
      columnSpacing={{ sm: 2, md: 3 }}
      columns={12}
    >
      {listings.map((listing, index) => (
        <Grid
          key={`${index}-${listing._id}`}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          width='100%'
        >
          <ListingCard
            name={listing.name}
            summary={listing.summary}
            image={listing.images.picture_url}
            location={listing.address.government_area}
            price={listing.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Listings;
