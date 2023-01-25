import React from 'react';
import { Meta, Listings } from '../../components';
import ListingsLayout from '../../layouts/ListingsLayout';
import { Box, Typography } from '@mui/material';

const ExploreListing = () => {
  return (
    <>
      <Meta title='Vacant Homes - Student Accomodation' />
      <ListingsLayout>
        <Box py={8}>
          <Typography variant='h5' mb={4} sx={{ fontWeight: 500 }}>
            Explore
          </Typography>
          <Listings />
        </Box>
      </ListingsLayout>
    </>
  );
};

export default ExploreListing;
