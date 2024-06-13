import React, { useEffect, useState } from "react";
import axios from "axios";

const Item = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const result = await axios.post("http://localhost:8080/api/product/get");
    setProduct(result.data);
  };

  const onSubmit = async (data) => {
    var temp = {
      cart: {
        user_id: 1,
        product_id: data.id,
      },
    };

    await axios
      .post("http://localhost:8080/api/cart/add", temp)
      .then((result) => {
        window.alert("Product added to your cart");
      })
      .catch((err) => {
        window.alert("error");
      });
  };

  return (
    <div>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {product.map((prod) => (
          <div className='col'>
            <div className='card h-100'>
              <img src='...' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{prod.product_name}</h5>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <h5 className='card-title'>{prod.product_price} $ </h5>
                <a
                  href='#'
                  onClick={() => onSubmit(prod)}
                  className='btn btn-primary'
                  type='submit'>
                  Add To Cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
