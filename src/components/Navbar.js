import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch">
  <input className="form-check-input mx-3" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
  <label className={`form-check-label text-${props.mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{props.modeNamechange}</label>
</div>
        </div>
      </div>
    </nav>
  );
}
// proptypes defines the type that we can only use string in the title if we use number then we get error.and is required means we have to add title in navbar.but following we are using defaultprop it will work if title is not given...

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired};

// it will word as a default props when we dont write  any title or abouttext..
Navbar.defaultProp={
      title:"textUtils here",
      aboutText:"aboutText here"
}
