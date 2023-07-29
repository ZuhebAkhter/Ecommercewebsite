import React from "react";
import './Footer.css'
import Youtubeicom from "../../Assers/Youtubeicom";

const Footer = () => {
  return (
    <React.Fragment>
               

      <nav class="navbar navbar-expand-sm bg-info navbar-dark ">
      <div className="container-fluid">
        <h2 className="fs-1 fw-bolder ps-5">The Generics</h2>
        

        <div className="ms-auto w-25">
    <a  className="btn" href="www.youtube.com"><Youtubeicom/></a></div>
      </div>
        
      </nav>
      
    </React.Fragment>
  );
};

export default Footer;
