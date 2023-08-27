
import AuthMenu from 'components/AuthMenu/AuthMenu';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from 'Hooks/auth-use';
import { Link } from 'react-router-dom';





const Header = ({ headTitle, headSubTitle }) => {
  const { isLoggedIn } = useAuth();



  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div>
          <div>
            <Link
              to="/goit-react-hw-08-phonebook"
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
