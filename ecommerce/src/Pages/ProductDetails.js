import React from "react";
import { useParams } from "react-router-dom";
import ItemForm from "../Components/MainbodyItems/ItemForm";
import CartContext from "../Components/Store/CartContext";

const productsDeatils = [
  {
    id: "a1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    description: "The Product has different Awesome Colors",
    ratings: "4star",
  },
  {
    id: "a2",
    title: "Blue Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    description: "The Product has different Awesome Colors",
    ratings: "3.5star",
  },
  {
    id: "a3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    description: "The Product has different Awesome Colors",
    ratings: "4.7star",
  },
  {
    id: "a4",
    title: "Black and white Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    description: "The Product has different Awesome Colors",
    ratings: "4.1star",
  },
];

const ProductDetails = () => {
  const params = useParams();
  
  const productdetailss = productsDeatils.find(
    (product) => product.id === params.productid
  );
 




  
  return (
    <div>
      <div className="conatiner-fluid border">
        <div className="row p-5">
          <div className="col-5 d-flex justify-content-center">
            <ul className="align-items-end">
              <li>
                <img
                  className="px-5"
                  src={productdetailss.imageUrl}
                  alt="Product image"
                ></img>
              </li>
              <li className="ps-5">
                <h2 className="text-secondary fw-bold fs-1 ps-4 pt-2">
                  {productdetailss.title}
                </h2>
              </li>
            </ul>
          </div>
          <div className="col-5 float-start">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Description:</div>
                  {productdetailss.description}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Product Price:</div>
                  {productdetailss.price}
                </div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Ratings</div>
                  13,146 ratings and 1,356 reviews
                </div>
                <span className="badge bg-primary rounded-pill">
                  {productdetailss.ratings}
                </span>
              </li>
             
            </ul>
            <div className="d-flex justify-content-center p-5">
              <button className="btn btn-primary mx-5">Buy Now</button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
