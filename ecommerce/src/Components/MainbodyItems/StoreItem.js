import React, { useEffect, useState ,useContext} from "react";
import ItemViewonScreen from "./ItemViewonScreen";
import SeeCartBtn from "./Buttons/SeeCartBtn";
import { fetchFromAPI } from "../../Utils/fetchFromAPI";
import CartContext from "../Store/CartContext";

const productsArr = [
  {
    id: "a1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "a2",
    title: "Blue Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "a3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "a4",
    title: "Black and white Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  
];
const StoreItem = (props) => {
  const [dataofApi,setDataofApi]=useState([]);
  const cartCtx = useContext(CartContext);
  const [loading,setLoading]=useState(true)

  console.log("ctx",cartCtx.items)
  
  useEffect(() => {

    fetchFromAPI(`products/v2/list`)
      .then((data) => setDataofApi(data.products))
      .catch((err)=>console.log(err))

    }, []);
    console.log(dataofApi)
    // dataofApi.map((product)=>(
    //   cartCtx.apiItems.push(product)
    // ))
    console.log(cartCtx.apiItems)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  
  
    // const url = 'https://amazonlive.p.rapidapi.com/product?asin=B095JCHDMV&location=us';
    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'cb10548f74msh711a638f9c9f2d8p1a7f06jsnd26b29ab46d0',
    //     'X-RapidAPI-Host': 'amazonlive.p.rapidapi.com'
    //   }
    // };
    
    // fetch('https://amazonlive.p.rapidapi.com/product?asin=B095JCHDMV&location=us',{
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': 'cb10548f74msh711a638f9c9f2d8p1a7f06jsnd26b29ab46d0',
    //     'X-RapidAPI-Host': 'amazonlive.p.rapidapi.com'
    //   }
    // }).then((response)=>{
    //   console.log(response)
    // }).catch((err)=>{
    //   console.log(err)
    // })
    
    
  
  
  
  return (
    <React.Fragment>
       

      {/* <div className="row d-flex justify-content-evenly m-5">
        {productsArr.map((product) => (
          <div key={product.id} className="col-6 mx-auto">
            <ItemViewonScreen
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          </div>
        ))}
        {}
      </div> */}
     {!loading ? <div className="row d-flex justify-content-evenly m-5">
        {dataofApi.map((product) => (
          <div key={product.id} className="col-6 mx-auto">
            <ItemViewonScreen
              key={product.id}
              id={product.id}
              title={product.name}
              imageUrl={`https://${product.imageUrl}`}
              price={product.price.current.value}
            />
          </div>
        ))}
      </div> : <div className="container-fluid p-5 m-5">
        <h3 className="position-absolute top-0 start-50 p-5 m-5"> </h3>
        </div>}
      <SeeCartBtn onClick={props.onClick} />

    </React.Fragment>
  );
};

export default StoreItem;
