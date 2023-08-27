import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <div>
      <NavLink to="/register" className="nav-link active">
        Sign Up
      </NavLink>
      <NavLink to="/login" className="nav-link active">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthMenu;
