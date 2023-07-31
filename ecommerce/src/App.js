import React,{useState} from "react";
import "./App.css";
import Header from "./Components/NavbarItems/Header";
import Footer from "./Components/FooterItems/Footer";
import StoreItem from "./Components/MainbodyItems/StoreItem";
import SeeCartBtn from "./Components/MainbodyItems/Buttons/SeeCartBtn";
import Modal from "./Components/Modals/Modal";
import CardProvider from "./Components/Store/CardProvider";
import Menubar from "./Components/NavbarItems/Menubar";

function App() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  return (
    <CardProvider>
      <Header  onOpenCart={handleModalOpen}/> 
      <Menubar/>
      <main>
        <StoreItem />
         <SeeCartBtn onClick={handleModalOpen}/>
         <Modal isOpen={modalIsOpen} onClose={handleModalClose}/>

      </main>
      <Footer />
      
    </CardProvider>
   
  );
}

export default App;
