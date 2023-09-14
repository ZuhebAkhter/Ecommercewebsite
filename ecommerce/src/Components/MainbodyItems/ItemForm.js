import React,{useRef,useContext} from "react";
import "./ItemForm.css";



const ItemForm = (props) => {
    const amountInputRef=useRef();
    // const authCtx=useContext(AuthContext)
    // const cartCtx=useContext(CartContext)
    //  if(authCtx.UserEmail===  null){
    //   return
    //  }
     
      // const emailofUser=authCtx.UserEmail.split(/[@.]/).join('');
     
    
      // async function PosttoCrud() {
      //   try{const res= await axios.post(`https://crudcrud.com/api/3404d87126f645ec962eee97cdec2d82/Cartdetails${emailofUser}`,
      //   {items:cartCtx.items})
      // }
      //     catch{
          
              
      //     }
      // }

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
