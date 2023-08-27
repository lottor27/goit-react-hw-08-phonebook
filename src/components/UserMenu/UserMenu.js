import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { userSelectors } from 'redux/selectors';
import { logOutUser } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { profile } = useSelector(userSelectors);
  const dispatch = useDispatch();
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <div>
      {/* <button type="button" onClick={handleClick}>
        sing In
      </button>
      <button type="button" onClick={handleClose}>
        Log In
      </button> */}
      <IconButton
        aria-controls="cabinet-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="#8c8c8c;"
        fontSize=""
      ></IconButton>
      <Menu
        id="cabinet-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem>{profile.email}</MenuItem> */}
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
