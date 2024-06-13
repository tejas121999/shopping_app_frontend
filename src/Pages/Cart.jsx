import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    var temp = {
      user_id: 1,
    };
    const result = await axios.post("http://localhost:8080/api/cart/get", temp);
    // console.log(result.data);
    setProduct(result.data);
  };

  const handleIncrement = async () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = async () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      window.alert("u cant decrees more than 0");
    }
  };
  return (
    <div>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {product.map((prod) => (
          <div className='col'>
            <div className='card h-100'>
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{prod.product_data.product_name}</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h5 className='card-title'>
                  {prod.product_data.product_price} ${" "}
                </h5>
                <h5 className='card-title'>
                  Quantity
                  {prod.product_price == null ? (
                    <p>
                      <a
                        className='btn btn-primary'
                        type='submit'
                        onClick={() => handleIncrement()}>
                        +
                      </a>
                      &nbsp;{quantity}&nbsp;{" "}
                      <a
                        className='btn btn-primary'
                        type='submit'
                        onClick={() => handleDecrement()}>
                        -
                      </a>
                    </p>
                  ) : (
                    <p>
                      <a
                        className='btn btn-primary'
                        type='submit'
                        onClick={() => handleIncrement()}>
                        {" "}
                        +
                      </a>
                      &nbsp;{prod.product_price}&nbsp;
                      <a
                        className='btn btn-primary'
                        type='submit'
                        onClick={() => handleDecrement()}>
                        -
                      </a>
                    </p>
                  )}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
