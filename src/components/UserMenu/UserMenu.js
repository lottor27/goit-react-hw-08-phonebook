import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from 'redux/selectors';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'Hooks/auth-use';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';

import { closeMenu } from 'redux/reducers/menuSlice';

const BurgerMenu = () => {
  const isOpenMenu = useSelector(selectMenu);
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  // const menuRef = useRef(null);

  const addedClass = isOpenMenu ? 'open' : 'close';


  return (
    <div className={`burger-menu ${addedClass}`}>
      <div >
    
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </div>
  );
};

export default BurgerMenu;
