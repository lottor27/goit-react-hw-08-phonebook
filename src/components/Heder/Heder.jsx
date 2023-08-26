
const Heder = () => {
    return (
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Phone book</a>
         
            <p className="navbar-brand">Hello User</p>
            <button type="button" className="btn btn-outline-success">
              Exit
            </button>
          
          <div className="d-flex">
            <button className="btn btn-outline-success" type="button">
              LogIn
            </button>
            <button className="btn btn-outline-success" type="button">
              SignUP
            </button>
          </div>
        </div>
      </nav>
    );
}

export default Heder