import React,{useState} from "react";
import "./App.css";
import Header from "./Components/NavbarItems/Header";
import Footer from "./Components/FooterItems/Footer";
import StoreItem from "./Components/MainbodyItems/StoreItem";
import SeeCartBtn from "./Components/MainbodyItems/Buttons/SeeCartBtn";
import Modal from "./Components/Modals/Modal";

function App() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };
  return (
    <React.Fragment>
      <Header  onOpenCart={handleModalOpen}/> 
      <main>
        <StoreItem />
         <SeeCartBtn onClick={handleModalOpen}/>
         <Modal isOpen={modalIsOpen} onClose={handleModalClose}/>

      </main>
      <Footer />
      
    </React.Fragment>
    // <div>
    //   <h1>React Modal Example</h1>
    //   <button className="btn btn-primary" onClick={handleModalOpen}>
    //     Open Modal
    //   </button>
    //   <Modal isOpen={modalIsOpen} onClose={handleModalClose}/>
    // </div>
  );
}

export default App;
