import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import "./ItemView.css";
import ItemForm from "./ItemForm";
import CartContext from "../Store/CartContext";

const ItemViewonScreen = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      image: props.imageUrl,
      title: props.title,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <div className="d-flex justify-content-evenly ">
      <div
        id={props.id}
        className="container col-6 justify-content-centr ps-5 gx-5"
      >
        <Link className="link-underline link-underline-opacity-0" to={`/store/${props.id}`}><h2 className="text-secondary font-monospace fw-medium fs-3 p-2 " href="#">{props.title}</h2></Link>
        <Link to={`/store/${props.id}`}>
        <img
          className="object-fit-cover border rounded border border-succes p-2"
          src={props.imageUrl}
          alt="Pic not found"
        ></img></Link>
        <div className="align-middle p-2">
          <p>${props.price}</p>
          <ItemForm onAddToCart={addItemtoCartHandler} />
        </div>
      </div>
    </div>
  );
};

export default ItemViewonScreen;
