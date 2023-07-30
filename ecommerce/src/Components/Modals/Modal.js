import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

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
              {cartElements.map((element) => (
                <tbody>
                  <tr>
                    <td>
                      <div className="w-25">
                          <img
                            className="img-thumbnail d-inline"
                            src={element.imageUrl}
                            alt="not"
                          ></img>
                          
        
                      </div>
                    </td>
                    <td className="fw-medium">{element.title}</td>
                    <td className="fw-medium">{element.price}</td>
                    <td><span class="border border-black rounded fw-medium p-1">01</span><button className="btn btn-danger text-muted mt-2">Remove</button></td>
                  </tr>
                </tbody>
              ))}
            </table>
           <h5> Total Amount:</h5><div className="float-end fs-5">{25.67}$</div>
            
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
            <button type="button" className="btn btn-primary">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("overlays") // This should be an empty div outside your root app element
  );
};

export default Modal;
