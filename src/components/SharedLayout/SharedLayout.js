import { Outlet } from 'react-router-dom';



  const SharedLayout = ({ children }) => {
   
  return (
    <div className="wrapper-relative">
        <Outlet />
      {children}
    </div>
  );
};

export default SharedLayout;
