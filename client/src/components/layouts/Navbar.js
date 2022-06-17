import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { setLogout } from "../../action/auth";
import { PropTypes } from "prop-types";
function Navbar(props) {
  const authReducer = useSelector((state) => state.authReducer);
  let loginedLink;
  let logoutLink;
  if (authReducer.user == null) {
    loginedLink = (
      <>
        <h1>
          <Link to="/">
            <i className="fa fa-code"></i> DevConnector_Clone
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/profiles">Developers</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </>
    );
  } else {
    logoutLink = (
      <>
        <h1>
          <Link to="/">
            <i className="fa fa-code"></i> DevConnector_Clone
          </Link>
        </h1>
        <ul>
          <li>
            {" "}
            <Link to="/posts">posts</Link>
          </li>
          <li>
            {" "}
            <Link to="/profiles">
              <i className="fa-solid fa-browser"></i> developers
            </Link>
          </li>
          <li>
            <Link to="/dashboard ">
              <i className="fa fa-user"></i>
              <span className="hide-sm"> dashboard</span>
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/" onClick={props.setLogout}>
              <i className="fa fa-sign-out"></i>
              <span className="hide-sm"> logout</span>
            </Link>
          </li>
        </ul>
      </>
    );
  }

  return (
    <nav className="navbar bg-dark">
      {loginedLink ? loginedLink : logoutLink}
    </nav>
  );
}
Navbar.propTypes = {
  setLogout: PropTypes.func.isRequired,
};
//<FontAwesomeIcon icon="fa-solid fa-browser" />
export default connect(null, { setLogout })(Navbar);
