import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import useAuth from "../hooks/useAuth/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { user } = useAuth();

    /* Toast Message */
    const notify =()=>{
      toast.success('Thanks for your response!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  const handleSubmit =(e)=>{
  e.preventDefault()

  //check if all the input fields have value
  
  const form = document.getElementById('newContactForm');
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const { userName, email, subject, city, contact } = formValues;

  if (userName && email && subject && contact && city) {
    // Show success toast message
    notify();
  } else {
    // Show error toast message
    toast.error('Please fill up all the fields.', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
   
  }

  return (
    <div>
      <Navbar></Navbar>
      <div class="container mt-5 shadow">
        <div class="row ">
          <div class="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
            <h2>Let's get in touch</h2>
            <p>We're open for any suggestion or just to have a chat</p>
            <div class="d-flex mt-2">
              <i class="bi bi-geo-alt"></i>
              <p class="mt-3 ms-3">
                Address : Road 198 West 21th Street, Suite 721 Singapor WW 10016
              </p>
            </div>
            <div class="d-flex mt-2">
              <i class="bi bi-telephone-forward"></i>
              <p class="mt-4 ms-3">Phone : 8888888888</p>
            </div>
            <div class="d-flex mt-2">
              <i class="bi bi-envelope"></i>
              <p class="mt-4 ms-3">Email : contactform@gmail.com</p>
            </div>
            <div class="d-flex mt-2">
              <i class="bi bi-youtube"></i>
              <p class="mt-4 ms-3">Channel : www.contactform.com</p>
            </div>
          </div>
          <div class="col-md-8 p-5 ">
            <h2>Get in touch</h2>
            {/* Contact Form */}
            <form id="newContactForm" onSubmit={handleSubmit} class="row g-3 contactForm mt-4">
              <div class="col-12">
                <label for="inputEmail4" class="form-label">
                  Name
                </label>
                <input
                  type="name"
                  name="userName"
                  value={user.displayName}
                  class="form-control"
                  id="inputEmail4"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  class="form-control"
                  id="inputAddress"
                  required
                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  id="inputAddress"
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="inputCity" class="form-label">
                  City
                </label>
                <input type="text" name="city" class="form-control" id="inputCity" />
              </div>
              <div class="col-md-6">
                <label for="Number" class="form-label">
                  Contact Number
                </label>
                <input type="text" name="contact" class="form-control" id="Number" required />
              </div>
              <div class="col-12">
                <button style={{background: '#01d28e', borderColor: '#01d28e', color: '#fff', borderRadius: 0, width: '100px'}} onClick={handleSubmit}  type="submit" class="btn btn-primary mt-3">
                  Submit
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Contact;
