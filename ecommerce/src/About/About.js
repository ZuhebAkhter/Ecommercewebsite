import React from "react";
import AboutImage from '../Assers/AboutImage.jpg'

const About = () => {
  return (
    <React.Fragment>
      <div className="container">
        <h2 className="fw-bolder text-center p-3">About-The Generics</h2>
        <div className="d-flex justify-content-center">
        <div className="w-25 ">
        <img className="img-fluid rounded-circle  "  alt="thumbnail" src={AboutImage}></img></div>
       
        </div>
        <p className="font-normal fs-5 p-3">
          At The Generics, we believe that everyone deserves access to top-notch
          products without breaking the bank. Our mission is to provide a
          diverse range of high-quality, generic products that cater to your
          everyday needs. We are committed to customer satisfaction and ensure
          that each purchase meets your expectations. Join us on this journey of
          incredible savings and exceptional value! We accept all major credit
          cards, debit cards, and PayPal for secure and convenient payments.
          Your financial information is safe with us as we use state-of-the-art
          encryption to protect your transactions.Enjoy fast and reliable
          shipping services to your doorstep. We offer various shipping options,
          including standard and express delivery, to accommodate your needs.
          Shipping fees may vary based on your location and the weight of your
          order.Your satisfaction is our priority. If you encounter any issues
          with your purchase, we offer a hassle-free return process. Simply
          contact our friendly customer support team within 30 days of delivery
          to initiate a return or request a refund.Feel free to reach out to our
          customer support team for any queries or assistance. You can contact
          us via email at support@thegenerics.com or call our toll-free number:
          1-800-63637.</p>
          <p className="font-normal fs-5 p-3"> Stay connected and follow us on social media to receive
          the latest updates, promotions, and exclusive offers. Find us on
          Facebook, Instagram, Twitter, and Pinterest. Please note that all the
          above information is entirely fictional and serves as a starting point
          to build your eCommerce store. You should replace this dummy content
          with real and accurate information once your store is ready for
          launch. Good luck with your venture!
        </p>

        
      </div>
    </React.Fragment>
  );
};

export default About;
