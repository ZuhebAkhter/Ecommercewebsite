import React,{useState} from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Header from "./Components/NavbarItems/Header";
import Footer from "./Components/FooterItems/Footer";
import SeeCartBtn from "./Components/MainbodyItems/Buttons/SeeCartBtn";
import Modal from "./Components/Modals/Modal";
import CardProvider from "./Components/Store/CardProvider";
import Menubar from "./Components/NavbarItems/Menubar";
import StoreItem from "./Components/MainbodyItems/StoreItem";
import "./App.css";
import About from "./About/About";
import Root from "./Root";
import Home from "./About/Home";


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleModalOpen = () => {
    setModalIsOpen(true);
  };
  
 const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {path:'/store',element : <StoreItem onClick={handleModalOpen}/>},

      {path:'/about',element : <About/>},
      {path:'/home',element:<Home/>}
    ]
  }
 ])
 

  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  return (
    <CardProvider>
      <Header  onOpenCart={handleModalOpen}/> 
      <Menubar/>
      <Modal isOpen={modalIsOpen} onClose={handleModalClose}/>

      <RouterProvider router={router}>
      
      <main>

      </main>
      </RouterProvider>
      <Footer />
      
      
    </CardProvider>
   
  );
}

export default App;
