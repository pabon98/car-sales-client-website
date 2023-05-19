import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className="container ">
        <h1>Contact Us</h1>
        <div className="row d-flex justify-content-center align-items-center mt-4">
          <div className="col-md-4 shadow bg-info ">
            <h2>Why You Choose Us</h2>
            <p>Best Price Guarantee</p>
            <p>Customer care available 24/7</p>
            <p>5 to 10 years warrenty for parts</p>
            <p>Best services among the area</p>
          </div>
          <div className="col-md-4 shadow bg-info ms-5">
            <h2>GET A QUESTION?</h2>
            <p>
              Do not hesitage to give us a call. We are an <br /> expert team
              and we are happy to talk to you. <br />
              And we are here always to help you
            </p>
            <p>
              {" "}
              <i className="fas fa-envelope"></i> vehica123@gmail.com
            </p>
            <p>
              {" "}
              <i className="fas fa-phone-alt"></i> +88578546525
            </p>
          </div>
        </div>

        <form className="row g-3 mt-5">
          <div className="col-md-6">
            <label for="inputName4" className="form-label">
              Name
            </label>
            <input type="name" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label for="inputPhone4" className="form-label">
              Phone
            </label>
            <input type="phone" className="form-control" id="inputPhone4" />
          </div>
          <div className="col-md-6">
            <label for="inputServices4" className="form-label">
              Services
            </label>
            <input type="phone" className="form-control" id="inputServices4" />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Message
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Message"
            />
          </div>

          <div className="col-md-6">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
