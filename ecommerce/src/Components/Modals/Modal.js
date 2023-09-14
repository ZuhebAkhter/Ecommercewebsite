import React,{useContext} from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import CartContext from "../Store/CartContext";
import AuthContext from "../Store/AuthContext";

const Modal = ({isOpen,onClose},props) => {
  console.log(props)
const cartCtx=useContext(CartContext);
console.log(cartCtx)
const authCtx=useContext(AuthContext)
console.log(authCtx.items1)
// useEffect(()=>{
//   console.log(authCtx.items1)

// },[authCtx.items1])

// const Useremail=authCtx.UserEmail?.split(/[@.]/).join("");
// async function getData(){
//   try{
//     const res= await axios.get(`https://crudcrud.com/api/75c0137249614ad497646275c27ddc8c/Cartdetails${Useremail}`)
//     console.log(res.data)
//     res.data.map((ele)=>{
//       cartCtx.addItem({
//         id:ele.id,
//         image:ele.image,
//         title:ele.title
//       })
//     })
    
//   }catch{
  
//   }
// }



    
    const removeCartHandler=(id)=>{
      cartCtx.removeItem(id)
     
    }
    console.log(cartCtx.totalAmount)

     const totalAmount=`${cartCtx.totalAmount.toFixed(2)}`;
    
  if (!isOpen) return null;

  const hasItem=cartCtx.items.length>0;
  

  return ReactDOM.createPortal(
    <div className="modal fade show scrollable" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-3">Cart</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table p-1">
              <thead>
                <tr>
                  <th>Item</th>
                  <th></th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              {cartCtx.items.map((element) => (
                
                <tbody key={element.id}>
                  <tr>
                    <td>
                      <div className="w-50">
                          <img
                            className="img-thumbnail d-inline"
                            src={element.image}
                            alt="not"
                          ></img>
                          
        
                      </div>
                    </td>
                    <td className="fw-medium">{element.title}</td>
                    <td className="fw-medium">{element.price}</td>
                    <td><span className="border border-black rounded fw-medium p-1">x{element.amount}</span><button onClick={removeCartHandler.bind(null,element.id)} className="btn btn-danger  mt-2">Remove</button></td>
                  </tr>
                </tbody>
                
 ))} 
 
            </table>
           <h5> Total Amount:</h5><div className="float-end fs-5">{totalAmount}$</div>
            
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose}
            >
              Close
            </button>
           {hasItem && <button type="button" className="btn btn-primary">
              Purchase
            </button>}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("overlays") 
  );
};

export default Modal;
