import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <div>
      <NavLink to="/register" className="btn btn-outline-success">
        Sign Up
      </NavLink>
      <NavLink to="/login" className="btn btn-outline-success">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthMenu;
