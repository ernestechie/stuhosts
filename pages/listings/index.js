import React from 'react';
import { Meta } from '../../components';
import ListingsLayout from '../../layouts/ListingsLayout';
import { Typography } from '@mui/material';

const ExploreListing = () => {
  return (
    <>
      <Meta title='Vacant Homes - Student Accomodation' />
      <ListingsLayout>
        <Typography variant='h5' mb={2}>
          StuHosts
        </Typography>
        <Typography>
          Best choice for student accomodation. Vacant houses from trusted
          landlords. You want it! We`ve got it.
        </Typography>
      </ListingsLayout>
    </>
  );
};

export default ExploreListing;
