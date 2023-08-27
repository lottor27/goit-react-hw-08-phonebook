
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
    <div >
      <div className="container flex-wrap">
        <div >
          (
            <button
              type="button"
              onClick={handleBurgerMenu}
            >
            </button>
          )
          <div >
            <Link to="/" >
              {headTitle}
            </Link>
            <p >{headSubTitle}</p>
          </div>
        </div>
        && (
          <div >
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </div>
        )
      </div>
    </div>
  );
};

export default Header;
