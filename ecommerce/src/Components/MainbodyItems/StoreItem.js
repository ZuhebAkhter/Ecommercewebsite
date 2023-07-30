import React from "react";
import ItemViewonScreen from "./ItemViewonScreen";

const productsArr = [
  {
    id:'a1',
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id:'a2',
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id:'a3',
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id:'a4',
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const StoreItem = () => {
  return (
    <React.Fragment>
      <h2 className="text-center fs-1 fst-italic">Music</h2>
      <div className="container-fluid">
        <ItemViewonScreen products={productsArr}/>
        
      </div>
    </React.Fragment>
  );
};

export default StoreItem;
