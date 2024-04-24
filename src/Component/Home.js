import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ImageCarousel from "./Crousle";
import pic1 from "../Assets/Mens.jpg";
import pic2 from "../Assets/Women.jpg";
import pic3 from "../Assets/Kids.jpg";
import axios from "axios";

function Home() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const images = [pic1, pic2, pic3];
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      Navigate("/signin");
    }
    const GetData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:3001/product");
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
      <ImageCarousel images={images} />
      <section className="Product">
        <h1>New Arivals!</h1>
        <div className="ShowItems">
        {isLoading ? (
        <p>Loading products...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : product !== null ? (
        <div className="product-list">
          {product.map((item) => (
            <div key={item._id} className="product-card">
              <img src={item.imgurl} alt={item.name} />
              <div className="product-details">
                <p>
                  <p id='name'>{item.name}</p>
                  Seller: {item.saller} | Price: {item.price}
                  <p>Category: {item.catagory}</p>
                </p>
                <div className="product-actions">
                  <button className='add-button' onClick={() => console.log("add to cart")}>Add To Cart</button>
                  <button className='add-button' onClick={() => console.log("view item")}>View Item</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Not item to show...</p>
      )
      }

        </div>
      </section>
    </div>
  );
}

export default Home;
