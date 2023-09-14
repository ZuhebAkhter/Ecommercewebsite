import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const UpdatedTotal =
      state.totalAmount + action.item.price * action.item.amount;
      console.log(state.totalAmount,action.item.price,action.item.amount)
      

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let UpdatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      UpdatedItems = [...state.items];
      UpdatedItems[existingCartItemIndex] = updatedItem;
    } else {
      UpdatedItems = state.items.concat(action.item);
    }

    return {
      items: UpdatedItems,
      totalAmount: UpdatedTotal,
    };
  }
  if(action.type  === "REMOVE"){
    const existedCartItemIndex =state.items.findIndex(
      (item) => item.id === action.id
     );
    const existingItem=state.items[existedCartItemIndex]
    const UpdatedTotal=state.totalAmount-existingItem.price;
    let UpdatedItems;
    if(existingItem.amount === 1){
      UpdatedItems=state.items.filter(item=> item.id !== action.id)
    }else{
      const updatedItem={...existingItem,amount:existingItem.amount -1};
      UpdatedItems=[...state.items];
      UpdatedItems[existedCartItemIndex]=updatedItem;
    }
    return {
      items:UpdatedItems,
      totalAmount:UpdatedTotal
    }
  }

  return defaultCartState;
};

const CardProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CardProvider;
