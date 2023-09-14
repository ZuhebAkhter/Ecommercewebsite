import React, { useState, useEffect, useCallback, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utils/fetchFromAPI";
import CartContext from "../Components/Store/CartContext";
import axios from "axios";
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
  const [dataofProduct, setDataofprod] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    fetchDAta();
    // setLoading(false)
  }, []);
  async function fetchDAta() {
    const url = "https://asos2.p.rapidapi.com/products/detail";

    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/detail",
      params: {
        id: params.productid,
        lang: "en-US",
        store: "US",
        currency: "USD",
        sizeSchema: "US",
      },
      headers: {
        "X-RapidAPI-Key": "cb10548f74msh711a638f9c9f2d8p1a7f06jsnd26b29ab46d0",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    const data = await axios.get(url, options);

    setDataofprod(data);
    // setDatarev(data.data.result)
  }
  setTimeout(() => {
    setLoading(false);
  }, 5000);

  console.log(dataofProduct.data);

  // const productdetailss = dataofProduct.find(
  //   (product) => product.item.itemId === params.productid
  // );

  const buyButtonClicked = () => {
    alert("Thanks For Buying");
  };

  return (
    <>
      <div>
        {!loading ? (
          <div className="conatiner-fluid border">
            <div className="row p-5">
              <div className="col-5 d-flex justify-content-center">
                <ul className="align-items-end">
                  <li>
                    <img
                      className="img-thumbnail"
                      src={`https://${dataofProduct.data.media.images[0].url}`}
                      alt="Product"
                    ></img>
                  </li>
                  <li className="ps-5">
                    <h2 className="text-secondary fw-bold fs-5 ps-4 pt-2">
                      {dataofProduct.data.name?.substring(0, 27)}
                    </h2>
                  </li>
                </ul>
              </div>
              <div className="col-5 float-start">
                <h2 className="text-secondary text-center fw-bold fs-1 ">
                  {dataofProduct.name?.substring(0, 25)}
                </h2>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Description:</div>
                      {dataofProduct.data.name}
                      <br />
                      {dataofProduct.data.info.aboutMe}
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Product Price:</div>
                      {dataofProduct.data.price.current.text}
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Ratings</div>
                      13,146 ratings and 1,356 reviews
                    </div>
                    <span className="badge bg-primary rounded-pill">
                      4.7Star
                    </span>
                  </li>
                </ul>
                <div className="d-flex justify-content-center p-5">
                  <button
                    onClick={buyButtonClicked}
                    className="btn btn-primary mx-5"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <h3>More Images:</h3>

            <div className="d-flex flex-wrap justify-content-space-between gx-1">
              {dataofProduct.data.media.images.map((ele) => (
                <img
                  className="img-thumbnail mb-5"
                  src={`https://${ele.url}`}
                  alt="Product"
                ></img>
              ))}
            </div>
          </div>
        ) : (
          <div className="my-5 py-5">
          <h1 className="text-center fs-6 py-5 my-5">Geting Data...</h1>

          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
