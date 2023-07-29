import React from "react";
import './Header.css'
import CartIcon from "../../Assers/CartIcon";

const Header = () => {
  return (
    <React.Fragment>
      <header >
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-center">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto p-2 ">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#">
                  STORE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
            </ul>
           <span className="me-5"><div>
            <button className="btn btn-success">YourCart</button></div>
            <div className="icon"><CartIcon/></div>
            </span>
          </div>
          
        </nav>
      </header>
      <div className="box">
        <h1>The Generics</h1>
        
      </div>
    </React.Fragment>
  );
};

export default Header;
