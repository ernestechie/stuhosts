import React from 'react';
import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content='Find the perfect student housing in Nigeria, at an amazing price.  Student Housing - Student Rentals - Student Accommodation'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Meta;
