import {  useSelector } from 'react-redux';
import { selectMenu } from 'redux/selectors';

import { useAuth } from 'Hooks/auth-use';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthMenu from 'components/AuthMenu/AuthMenu';



const BurgerMenu = () => {
  const isOpenMenu = useSelector(selectMenu);
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
