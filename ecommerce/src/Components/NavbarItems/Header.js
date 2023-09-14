import React,{useContext} from "react";
import { Link ,useNavigate} from "react-router-dom";
import CartIcon from "../../Assers/CartIcon";
import CartContext from "../Store/CartContext";
import './Header.css'
import AuthContext from "../Store/AuthContext";

const Header = (props) => {
   const cartCtx= useContext(CartContext);
   const AuthCtx=useContext(AuthContext);
   const navigate=useNavigate();

   const numberOfcart=cartCtx.items.reduce((curNum,item)=>{
    return curNum + item.amount;
   },0);
// const numberOfcart=cartCtx.items.length;
const logoutHandler=()=>{
  AuthCtx.logout()
  navigate('/auth')
  localStorage.removeItem('email')
  localStorage.setItem('emailload',AuthCtx.UserEmail)
  
}
  return (
    <React.Fragment>
      
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top justify-content-center">
          <div className="container-fluid">
            <ul className="navbar-nav mx-auto p-2 ">
              <li className="nav-item">
                <Link className="nav-link pe-5" to="/home">
                  HOME
                </Link>
              </li>
              {AuthCtx.isLogged && <li className="nav-item">
                <Link className="nav-link pe-5" to="/store">
                  STORE
                </Link>
              </li>}
             
              {!AuthCtx.isLogged && <li className="nav-item px-5">
                <Link className="nav-link pe-5" to="/auth">
                  STORE
                </Link>
              </li>}
              <li className="nav-item">
                <Link  className="nav-link pe-5" to='/about'>
                  ABOUT
                </Link>
              </li>
              <li className="nav-item px-5">
                <Link  className="nav-link pe-5" to='/contactus'>
                  CONTACT US
                </Link>
              </li>
              {!AuthCtx.isLogged && <li className="nav-item">
                <Link  className="nav-link" to='/auth'>
                  LOGIN
                </Link>
                </li>}
              
                
            </ul>
           <span className="me-5"><div>
           {AuthCtx.isLogged && <button onClick={logoutHandler} className="btn btn-danger me-2">Logout</button>}

            {AuthCtx.isLogged && <button onClick={props.onOpenCart} className="btn btn-success"><CartIcon/>({numberOfcart})</button>}
            {AuthCtx.items1.length > 0 && <button onClick={props.onOpenCart1} className="btn btn-danger mx-2">PrevCart</button>}

            </div>
           
            </span>
          </div>
          
        </nav>
        
      
      
    </React.Fragment>
  );
};

export default Header;
