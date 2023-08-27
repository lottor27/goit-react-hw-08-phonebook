import React from 'react';
import { useAuth } from 'Hooks/auth-use';

import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';



const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="container">
      <div>
        <h2>Welcome to Cool PhoneBook </h2>
        <p>Please register to get started!</p>

        <div>
          <p>Hello, my friend.</p>
        </div>
        <div className="wrapper-relative">
          <div className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="nav-link active">
                {isLoggedIn ? <UserMenu /> : <AuthMenu />}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
