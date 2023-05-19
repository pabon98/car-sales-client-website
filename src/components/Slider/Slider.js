import React from 'react';
import slide1 from "../../images/car-slide-2.jpg";
import slide2 from "../../images/car-slide-5.jpg";
import slide3 from "../../images/car-slide-4.jpg";

const Slider = () => {
    return (
        <div>
            <h1>Some Amazing Cars</h1>
           <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={slide1}
                className="d-block ms-auto me-auto  w-50 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={slide2}
                className="d-block ms-auto me-auto  w-50 img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={slide3}
                className="d-block ms-auto me-auto  w-50 img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> 
        </div>
    );
};

export default Slider;