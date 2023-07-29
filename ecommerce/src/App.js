import React from "react";
import "./App.css";
import Header from "./Components/NavbarItems/Header";
import Footer from "./Components/FooterItems/Footer";
import StoreItem from "./Components/MainbodyItems/StoreItem";
import SeeCartBtn from "./Components/MainbodyItems/Buttons/SeeCartBtn";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
      <StoreItem/>
      
      <SeeCartBtn/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
