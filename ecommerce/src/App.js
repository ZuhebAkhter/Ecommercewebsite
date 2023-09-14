import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/NavbarItems/Header";
import Footer from "./Components/FooterItems/Footer";
import Modal from "./Components/Modals/Modal";
import CardProvider from "./Components/Store/CardProvider";
import Menubar from "./Components/NavbarItems/Menubar";
import StoreItem from "./Components/MainbodyItems/StoreItem";
import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ContactForm from "./Pages/ContactForm";
import ProductDetails from "./Pages/ProductDetails";
import LoginPage from "./Pages/LoginPage";
import axios from "axios";
import AuthContext from "./Components/Store/AuthContext";
import Modal1 from "./Components/Modals/Moda1";
import CartContext from "./Components/Store/CartContext";


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modal1IsOpen, setModal1IsOpen] = useState(false);

  const authCtx = useContext(AuthContext);
  // useEffect(()=>{
  //   console.log('Zuheb')
  //   getData1();
  // },[emailofUser])
  const emailofUser = localStorage.getItem('email')?.split(/[@.]/).join("");



  
  const handleModalOpen = async () => {
    setModalIsOpen(true);
  const itemToken=localStorage.getItem('emailload');
  if(itemToken===authCtx.UserEmail){
    try {
      const res = await axios.get(
        `https://crudcrud.com/api/eb83d5b2a3c949368d92eb721305df55/Cartdetails${emailofUser}`
      );
      console.log(res);
      // setdata(res.data);
      let total1=0;
   let prevId=null;
      res.data.map((ele)=>{
        total1=total1 + ele.price;
        authCtx.items1.push({
          id: ele.id,
          image: ele.image,
          title: ele.title,
          price: ele.price,
          amount: ele.amount,
          total:total1
        })
        
        authCtx.totalamount1=total1;
        console.log(authCtx)
      })
      
    } catch {}
  }
      
  

   
    // if(Data!==null){
    //   Data.map((data)=>(
    //     cartCtx.addItem({
    //       id:data.is,
    //       image: data.image,
    //       title: data.title,
    //       price: data.price,
    //       amount: data.amount,

    //     })
    //   ))
    // }
  };

  async function userDataHandler(users) {
    const response = await fetch(
      "https://try2-7cacf-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json",
      {
        method: "POST",
        body: JSON.stringify(users),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  }

  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  const handleModalOpen1=()=>{
    setModal1IsOpen(true)
  }
  const handleModal1Close=()=>{
    setModal1IsOpen(false)
  }
  // const addItemtoCartHandler = () => {

  // for(let i=0;i<Data.length;i++){
  //   cartCtx.addItem({
  //     id:Data[i].id,
  //         image: Data[i].image,

  //   })
  // }
  // };

  // window.onload =async function() {
  //   try {
  //     const res = await axios.get(
  //       `https://crudcrud.com/api/eb83d5b2a3c949368d92eb721305df55/Cartdetails${emailofUser}`
  //     );
  //     console.log(res);
  //     // setdata(res.data);
  //     let total1=0;
  //  let prevId=null;
  //     res.data.map((ele)=>{
  //       total1=total1 + ele.price;
  //       authCtx.items1.push({
  //         id: ele.id,
  //         image: ele.image,
  //         title: ele.title,
  //         price: ele.price,
  //         amount: ele.amount,
  //         total:total1
  //       })
        
  //       authCtx.totalamount1=total1;
  //       console.log(authCtx)
  //     })
      
  //   } catch {}
// }

  return (
    <CardProvider>
      <header>
        <Header onOpenCart={handleModalOpen}  onOpenCart1={handleModalOpen1}/>
        <Menubar />
      </header>
      <main>
        <Modal isOpen={modalIsOpen} onClose={handleModalClose} items={authCtx.items1}  />
        <Modal1 isOpen1={modal1IsOpen} onClose1={handleModal1Close}/>

        <Routes>
          <Route path="/auth" element={<LoginPage />}></Route>
          <Route path="/" element={<LoginPage />}></Route>

          <Route path="/store" element={<StoreItem />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/contactus"
            element={<ContactForm onAddingUser={userDataHandler} />}
          ></Route>
          <Route
            path="*"
            element={
              <div className="h-100 w-100 p-5 m-5">
                <p className="text-center p-5 m-5">Page Not Found</p>
              </div>
            }
          />

          <Route path="/store/:productid" element={<ProductDetails />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </CardProvider>
  );
}

export default App;
