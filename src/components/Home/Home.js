import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";
import Slider from "../Slider/Slider";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="my-3">
        {/* Caurosel section */}
       <Slider/>
        {/* Products Section */}
        <div className="my-5">
          <Products/>
        </div>
        <div className="my-4">
          <Reviews></Reviews>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
