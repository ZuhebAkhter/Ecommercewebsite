import React,{useRef} from "react";
import "./ItemForm.css";

const ItemForm = (props) => {
    const amountInputRef=useRef();

    const formSubmitHandler=(event)=>{
        event.preventDefault();
       const  enteredAmount=amountInputRef.current.value;
       const enteredAmountNumber =+ enteredAmount;
        props.onAddToCart(enteredAmountNumber);

    }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-conatiner">
        <span>
          <input className="input"  type="number" defaultValue='1' ref={amountInputRef}></input>
        </span>
      </div>
      <button
        type="submit"
        defaultValue="1"
        className="btn btn-secondary bg-info mb-5"
        
      >
        Add to cart
      </button>
    </form>
  );
};

export default ItemForm;
