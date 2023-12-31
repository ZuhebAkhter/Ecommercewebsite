import React,{useContext, useEffect} from "react";
import ReactDOM from "react-dom";
import AuthContext from "../Store/AuthContext";

const Modal1 = ({isOpen1,onClose1}) => {
const authCtx=useContext(AuthContext)
console.log(authCtx.items1)
useEffect(()=>{
  console.log(authCtx.items1)

},[authCtx.items1])


    
    //  const totalAmount=`${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem=authCtx.items1.length>0;
    
  if (!isOpen1) return null;

  

  return ReactDOM.createPortal(
    <div className="modal fade show scrollable" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fs-3">Previously Checked Items </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose1}
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
              {authCtx.items1.map((element) => (
                
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
                    {/* <td><span className="border border-black rounded fw-medium p-1">x{element.}</span></td> */}
                  </tr>

                </tbody>

                
 ))} 

            </table>
            
            <h5> Total Amount:</h5><div className="float-end fs-5">{authCtx.totalamount1}$</div>

          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={onClose1}
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

export default Modal1;