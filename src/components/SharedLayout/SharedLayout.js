import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import Header from 'components/Heder/Heder';
import Loading from 'components/loading/loading';

import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'Hooks/auth-use';





  const SharedLayout = ({ children }) => {
   const { isLoggedIn } = useAuth();
  return (
    <div className="wrapper-relative">
      {/* <Header headTitle="Cool PhoneBook" /> */}
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
  

          <div className="nav-link active">
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </div>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      {children}
    </div>
  );
};

export default SharedLayout;
