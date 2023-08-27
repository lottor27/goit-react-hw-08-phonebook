import React from 'react';
import screenPhoneBookMob from 'images/contacts-mob.jpg';
import css from './home.module.css';
import SwiperHomes from 'components/Swiper/Swiper';
import { useMediaQuery } from 'react-responsive';

const HomePage = () => {
  const isDesktopOrTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="container">
      <div className={css.wrapper}>
        <h2 className={css.title}>Welcome to PhoneBook Pro!</h2>
        <p className={css.subtext}>Please register or log in to get started!</p>
        {isMobile && (
          <div className={css.thumb}>
            <img
              src={screenPhoneBookMob}
              alt="icon contacts"
              width="300"
              height="450"
              className={css.iconBook}
            />
          </div>
        )}
        {isDesktopOrTablet && <SwiperHomes />}
      </div>
    </div>
  );
};

export default HomePage;
