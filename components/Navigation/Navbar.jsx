import React, { useState } from 'react';
import {
  Box,
  Divider,
  Typography,
  Menu,
  Avatar,
  MenuItem,
} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: 'center',
          background: '#fff',
          borderBottom: '1px solid #eee',
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
          padding: {
            xs: '1rem',
            sm: '1rem 2rem',
            lg: '1rem 4rem',
            xl: '1rem 5rem',
          },
        }}
      >
        <Typography>LOGO</Typography> {/* STUHOSTS LOGO */}
        <Typography>SEARCH BAR</Typography> {/* SEARCH BAR */}
        <IconButton
          onClick={handleClick}
          size='small'
          sx={{
            p: 1,
            ml: 2,
            display: 'flex',
            gap: 1,
            border: '1px solid #ccc',
            borderRadius: 32,
          }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
        >
          <MenuRoundedIcon sx={{ width: 24, height: 24 }} />
          <Avatar sx={{ width: 32, height: 32 }} />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            minWidth: '240px',
            borderRadius: '0.7rem',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
            mt: 1.5,
            '& *': {
              fontSize: '15px',
            },
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 2,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 20,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },

            '& .MuiMenuItem-root': {
              py: 1.25,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign in</MenuItem>
        <Divider />
        <MenuItem>Become Landlord</MenuItem>
        <MenuItem>Help Center</MenuItem>
        {/* 
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize='small' />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize='small' />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem> */}
      </Menu>
    </Box>
  );
}
