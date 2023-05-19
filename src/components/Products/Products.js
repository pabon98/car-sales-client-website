import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://carsales-server.onrender.com/cars")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    return (
        <div className='container'>
            <h1>Our Products</h1>
            <div className="row">
            {products.slice(0, 6).map((product) => (
              <div key={product._id} className="col-md-3 my-2 mx-4">
                <div
                  className="card"
                  style={{ width: "18rem"}}
                  key={product.key}
                >
                  <img
                    height="200px"
                    src={product.image}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.description.slice(0, 120)}
                    </p>
                    <h6>Price: {product.price}</h6>
                    <br />

                    <Link to={`/purchase/${product._id}`}>
                      <button className="btn btn-warning">Purchase</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};

export default Products;