import {Navigate} from 'react-router-dom'
import React from 'react'
import { useSelector } from 'react-redux';
import { userSelectors } from 'store/user/selectors';

const PrivateGuard = ({children}) => {
  const {isLoggedIn} = useSelector(userSelectors);
  return isLoggedIn ? children:<Navigate to="/login"/>}

export default PrivateGuard