import { useRouter } from 'next/navigation'

import type NavbarProps from './NavbarProps.type';

export default function Navbar({ isUserAuthenticated, onLogout }: NavbarProps) {

  const router = useRouter();

    return (
        <nav role="navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
           <div className="container-fluid justify-content-between">
              <div className="collapse navbar-collapse" id="navbarNav">
                {isUserAuthenticated && 
                  <>
                      <li className="nav-item mx-2">
                        <a className="nav-link text-light active" aria-current="page" href="/">Home</a>
                      </li>
                      <li className="nav-item mx-2">
                        <a className="nav-link text-light" aria-current="page" href="/profile">Profile</a>
                      </li>
                  </>
                }
              </div>
              <div >
                {
                  !isUserAuthenticated && 
                  <button 
                    className="btn btn-primary me-2" 
                    type="button"
                    onClick={() => router.push('/signup')}
                  >
                    Sign Up
                  </button>
                }
                    {
                  !isUserAuthenticated && 
                  <button 
                    className="btn btn-outline-light me-2" 
                    type="button"
                    onClick={() => router.push('/signin')}
                  >
                    Sign In
                  </button>
                }
                    {
                  isUserAuthenticated && 
                  <button 
                    className="btn btn-outline-light me-2" 
                    type="button"
                    onClick={onLogout}
                  >
                    Log Out
                  </button>
                }
              </div>
          </div>
      </nav>
    );
}
