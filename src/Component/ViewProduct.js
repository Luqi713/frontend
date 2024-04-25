import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

const ProductView = () => {
  const location = useLocation();
  const { state } = location;
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const GetData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `http://127.0.0.1:3001/product/${state.catagory}`
        );
        setProduct(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    GetData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="product-container">
        <div className="image-container">
          <img src={state.imgurl} alt={state.name} className="product-image" />
        </div>
        <div className="info-container">
          <h2>{state.name}</h2>
          <p>
            <strong>Price:</strong> ${state.price}
          </p>
          <p>
            <strong>Seller:</strong> {state.saller}
          </p>
          <p>
            <strong>Description:</strong> {state.desc}
          </p>
          <p>
            <strong>Category:</strong> {state.catagory}
          </p>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
      <section className="Product">
        <h1>Similar Posts!</h1>
        <div className="ShowItems">
          {isLoading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : product !== null ? (
            <div className="product-list">
              {product.map((item) => (
                <div key={item._id} className="product-card">
                  <a
                    onClick={() => {
                      Navigate("/view-product", { state: item });
                    }}
                  >
                    <img src={item.imgurl} alt={item.name} />
                  </a>
                  <div className="product-details">
                    <p>
                      <p id="name">{item.name}</p>
                      Seller: {item.saller} | Price: {item.price}
                      <p>Category: {item.catagory}</p>
                    </p>
                    <div className="product-actions">
                      <button
                        className="add-button"
                        onClick={() => console.log("add to cart")}
                      >
                        Add To Cart
                      </button>
                      <button
                        className="add-button"
                        onClick={() => console.log("view item")}
                      >
                        View Item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Not item to show...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductView;
