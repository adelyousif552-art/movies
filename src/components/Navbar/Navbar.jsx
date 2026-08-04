import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3">
      <div className="container">

        {/* Logo + Toggle Button */}
        <div className="d-flex align-items-center">
          <li className="d-flex align-items-center gap-2 list-unstyled">
            <span>
              <i className="bi bi-film fs-3 movicon1"></i>
            </span>
            <h5 className="mov-text m-0 fs-4">MovieHub</h5>
          </li>

          <button
            className="navbar-toggler ms-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <i className="bi bi-list text-white fs-2"></i>
          </button>
        </div>


        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav align-items-center gap-lg-4 mt-3 mt-lg-0 ms-lg-4">

            <li className="lin d-flex align-items-center p-2 rounded-2">
              <NavLink
                className={({isActive}) =>
                  `navlin text-decoration-none fw-bold p-2 rounded-2 ${
                    isActive ? "active" : "text-white"
                  }`
                }
                to="/"
              >
                <i className="bi bi-house me-1"></i>
                Home
              </NavLink>
            </li>


            <li className="lin2 d-flex align-items-center gap-1 p-2 rounded-2">
              <span>
                <i className="bi bi-fire text-white"></i>
              </span>

              <Link className="text-decoration-none fw-bold text-white">
                Trending
              </Link>

              <i className="bi bi-arrow-down-short text-white"></i>
            </li>

          </ul>


          {/* Right Buttons */}
          <ul className="navbar-nav ms-lg-auto align-items-center gap-3 mt-3 mt-lg-0">

            <li>
              <Link
                to="/signup"
                className="text-decoration-none text-white link p-2 rounded-2 sign"
              >
                <i className="bi bi-person-plus-fill"></i>
                Sign Up
              </Link>
            </li>


            <li>
              <Link
                to="/login"
                className="text-decoration-none text-white link login box p-2 rounded-5"
              >
                <i className="bi bi-box-arrow-in-right"></i>
                Login
              </Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}