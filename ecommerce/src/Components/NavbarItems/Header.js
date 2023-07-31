
import React,{useContext} from "react";
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
      <header >
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-center">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto p-2 ">
              <li className="nav-item ">
                <a className="nav-link" href="/home">
                  HOME
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="/store">
                  STORE
                </a>
              </li>
              <li className="nav-item">
                <a  className="nav-link" href='/about'>
                  ABOUT
                </a>
              </li>
            </ul>
           <span className="me-5"><div>
            <button onClick={props.onOpenCart} className="btn btn-success">YourCart({numberOfcart})</button>
            <div className="icon me-5"><CartIcon/></div></div>
           
            </span>
          </div>
          
        </nav>
        
      </header>
      
    </React.Fragment>
  );
};

export default Header;
