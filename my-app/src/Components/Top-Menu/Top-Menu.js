import './Top-Menu.css';
import Logo from '../../Images/logo.svg'


function TopMenu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" >
            <img
              src={Logo}
              height="50"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-primary"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-gear"></i>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default TopMenu;
