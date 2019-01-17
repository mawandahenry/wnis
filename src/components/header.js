import React from 'react'
import {Link} from 'react-router-dom';
import ims from '../images/wnis2.png';

const Header =() => {
  return (
    <React.Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
      <img className="" src={ims} alt="logo" width = "100" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/add">Home <span className="sr-only fa fa-plus">(current)</span></Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/theme">About </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/posts">Services </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/redux">Contact us </Link>
          </li>
          
        </ul>

      </div>
    </nav>
    </React.Fragment>
  )
}
export default Header;
