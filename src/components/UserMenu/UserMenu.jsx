import React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from 'store/user/selectors';
import { logOutUserThunk } from 'store/user/operations';

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
    dispatch(logOutUserThunk( ));
  };

  return (
    <div>
      <IconButton
        aria-controls="cabinet-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="#8c8c8c;"
        fontSize=""
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="cabinet-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>{profile.email}</MenuItem>
        <MenuItem onClick={handleLogout}>Log Out</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
