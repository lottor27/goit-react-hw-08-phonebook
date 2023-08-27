import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <div>
      <NavLink to="/register" >
        Sign Up
      </NavLink>
      <NavLink to="/login" >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthMenu;
