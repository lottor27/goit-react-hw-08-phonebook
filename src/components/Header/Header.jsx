import React from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from 'store/user/selectors';
import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import styles from './Header.module.css';

const Header = () => {
  const { token } = useSelector(userSelectors);

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.title}>PhoneBook</h1>
      <div className={styles.linksContainer}>
        {token ? (
          <UserMenu />
        ) : (
          <Link to="/login" className={styles.loginLink}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
