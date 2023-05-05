import './Public-Top-Menu.css';
import Logo from '../../Images/logo.svg'
import {useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Español' }
}

function PublicTopMenu() {
  // TODO: Complete top menu for public page
  const { t, i18n } = useTranslation();

  const changeLanguages = (lng) => {
    i18n.changeLanguage(lng);
  }

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
          <div>
            {Object.keys(lngs).map((lng) => (
              <button 
                className={i18n.resolvedLanguage === lng ? 'btn btn-primary me-1' : 'btn btn-primary-light me-1'}
                key={lng} 
                type="button"
                onClick={() => changeLanguages(lng)}
              >
                {lngs[lng].nativeName}
              </button>
            ))}
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

export default PublicTopMenu;
