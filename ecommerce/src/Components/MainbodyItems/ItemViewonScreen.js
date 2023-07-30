import React from "react";
import "./ItemView.css";

const ItemViewonScreen = (props) => {
    console.log(props)
  return (
    <div className="row d-flex justify-content-evenly m-5" >
        
    {props.products.map((product)=>(
            
        // <div className="d-flex justify-content-evenly ">
        <div key={product.id} className="container col-6 justify-content-centr ps-5 gx-5">
         <h2 className="font-monospace fw-medium fs-3 p-2">{product.title}</h2>
         <img className="object-fit-cover border rounded border border-succes p-2" src={product.imageUrl} alt="Pic not found"></img>
         <div className="align-middle p-2">
             <p>${product.price}</p>
              <button className="btn btn-secondary bg-info mb-5">Add to cart</button></div>
        
         </div>
         
         
        
            
        
    ))}
   
   </div>
  );
};

export default ItemViewonScreen;
