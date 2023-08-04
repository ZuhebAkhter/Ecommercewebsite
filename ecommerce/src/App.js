import React, { useState } from "react";
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

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
async function userDataHandler(users){
   const response= await fetch('https://try2-7cacf-default-rtdb.asia-southeast1.firebasedatabase.app/Users.json',{
      method: 'POST',
      body: JSON.stringify(users),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data=await response.json();
    console.log(data)
  }

  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  
  return (
    
    <CardProvider>
      <header>
        <Header onOpenCart={handleModalOpen} />
        <Menubar />
      </header>
      <Modal isOpen={modalIsOpen} onClose={handleModalClose} />
      <main>
        <Routes>
          <Route path="/auth"  element={<LoginPage/>}> </Route>
          <Route path="/"  element={<LoginPage/>}> </Route>

          <Route path="/store" element={<StoreItem />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactForm onAddingUser={userDataHandler}/>}></Route>
          <Route path='*' element={<div className="container-fluid"><p>Page NOt Founf</p></div>}/>

          <Route path='/store/:productid' element={<ProductDetails/>}></Route>
        </Routes>
        
      </main>
      <footer>
        <Footer />
      </footer>
    </CardProvider>
  );
}

export default App;
