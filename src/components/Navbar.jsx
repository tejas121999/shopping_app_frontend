import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand mb-0 h1' to='/'>
            Shopping App
          </Link>
          <form className='d-flex'>
            {/* <Link to='/cart'>
              <span>Cart</span>
            </Link> */}
            <Link to='/cart' className='btn btn-outline-success' type='submit'>
              Cart
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
