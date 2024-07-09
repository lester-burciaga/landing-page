import type NavbarProps from './NavbarProps.type';

export default function Navbar({ isUserAuthenticated, onLogout, onLogin, onSignup }: NavbarProps) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}