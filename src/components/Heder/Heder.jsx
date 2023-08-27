
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'Hooks/auth-use';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { openMenu, closeMenu } from 'redux/reducers/menuSlice';



const Header = ({ headTitle, headSubTitle }) => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();


 const handleBurgerMenu = () => dispatch(openMenu());

  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <div>
            <Link
              to="/"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {headTitle}
            </Link>
            <p className="navbar-brand">{headSubTitle}</p>
          </div>
        </div>
        
        <div className="nav-link active">
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </div>
        
      </div>
    </div>
  );
};

export default Header;
