import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = ({click}) => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
  
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

  return <div className='navbar'>
      {/* logo */}
    <div className='navbar__logo'>
        <h2>MERN Shopping Cart</h2>
    </div>
     {/* links  */}
     <ul className='navbar__links'>
     <li>
            <Link to="/virtualstore" className='cart__link'>
                <i className="fas fa-shopping-cart"></i>
                <span>
                Virtual Store
               </span>
            </Link>
        </li>
        <li>
            <Link to="/cart" className='cart__link'>
                <i className="fas fa-shopping-cart"></i>
                <span>
                cart
                <span className = "cartlogo__badge">{getCartCount()}</span>
                </span>
            </Link>
        </li>
        <li>
            <Link to="/">shop</Link>
        </li>
        </ul>
      <div className='hamburger__menu' onClick={click}>
          <div></div>
          <div></div>
          <div></div>
      </div>
   

  </div>;
};

export default Navbar;
