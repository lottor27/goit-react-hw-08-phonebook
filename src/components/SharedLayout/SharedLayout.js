import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Heder/Heder';
import Loading from 'components/loading/loading';

// import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const SharedLayout = ({ children }) => {
  return (
    <div className="wrapper-relative">
      <Header
        headTitle="PhoneBook Pro:"
        headSubTitle="Your Digital Contact Organizer"
      />
      {/* <BurgerMenu /> */}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      {children}
    </div>
  );
};

export default SharedLayout;
