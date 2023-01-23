import { useState } from 'react';
import { Box, BottomNavigation } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Explore, Favorite, Person } from '@mui/icons-material';

export default function MobileNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        mx: 'auto',
        position: 'fixed',
        bottom: 0,
        left: 0,
        display: { xs: 'block', sm: 'block', md: 'none' },
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ width: '100%', maxWidth: '600px', mx: 'auto' }}
      >
        <BottomNavigationAction
          label='Explore'
          icon={<Explore />}
          sx={{
            '& .MuiBottomNavigationAction-label.Mui-selected': {
              fontSize: '12px',
            },
          }}
        />
        <BottomNavigationAction
          label='Saved'
          icon={<Favorite />}
          sx={{
            '& .MuiBottomNavigationAction-label.Mui-selected': {
              fontSize: '12px',
            },
          }}
        />
        <BottomNavigationAction
          label='Profile'
          icon={<Person />}
          sx={{
            '& .MuiBottomNavigationAction-label.Mui-selected': {
              fontSize: '12px',
            },
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
