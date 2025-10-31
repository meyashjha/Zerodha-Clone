import { Link } from "react-router-dom";

const Header = () => {
  return (

      <nav class="navbar navbar-expand-lg bg-white border-bottom">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="media/logo.svg" alt="logo" style={{width:"25%"}} />
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">

            <form class="d-flex" role="search">
                          <ul class="navbar-nav  mb-lg-0">
            
              <li class="nav-item">
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/support">
                  Support
                </Link>
              </li>
              <li class="ham-icon" > <i class="fa-solid fa-bars" ></i> </li>
            </ul>
      
            </form>
          </div>
        </div>
      </nav>

  );
};

export default Header;
