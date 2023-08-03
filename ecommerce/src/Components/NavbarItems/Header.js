import React,{useContext} from "react";
import { Link } from "react-router-dom";
import CartIcon from "../../Assers/CartIcon";
import CartContext from "../Store/CartContext";
import './Header.css'

const Header = (props) => {
   const cartCtx= useContext(CartContext);

   const numberOfcart=cartCtx.items.reduce((curNum,item)=>{
    return curNum + item.amount;
   },0);
// const numberOfcart=cartCtx.items.length;
  return (
    <React.Fragment>
      
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-center">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto p-2 ">
              <li className="nav-item px-5">
                <Link className="nav-link" to="/home">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">
                  STORE
                </Link>
              </li>
              <li className="nav-item px-5">
                <Link  className="nav-link" to='/about'>
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link" to='/contactus'>
                  CONTACT US
                </Link>
              </li>
            </ul>
           <span className="me-5"><div>
            <button onClick={props.onOpenCart} className="btn btn-success">YourCart({numberOfcart})</button>
            <div className="icon me-5"><CartIcon/></div></div>
           
            </span>
          </div>
          
        </nav>
        
      
      
    </React.Fragment>
  );
};

export default Header;
