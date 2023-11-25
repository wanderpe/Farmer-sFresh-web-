import { useCallback } from "react";
import "./Shop.css";

const Shop = () => {
  const onHomeTextClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onAboutTextClick = useCallback(() => {
    // Please sync "About Us" to the project
  }, []);

  const onContactTextClick = useCallback(() => {
    // Please sync "Contact" to the project
  }, []);

  const onApple1ImageClick = useCallback(() => {
    // Please sync "Product Details" to the project
  }, []);

  const onCheckoutTextClick = useCallback(() => {
    // Please sync "Payment Method" to the project
  }, []);

  return (
    <div className="shop">
      <img
        className="pexels-rafa-de-3013440-1-icon"
        alt=""
        src="/src/image/pexels-rafa-de-3013440 1.png"
      />
      <img
        className="logo-farmers-fresh-1"
        alt=""
        src="/src/image/Logo Farmers Fresh 1.svg"
      />
      <div className="message-alt-fill-parent">
        <div className="message-alt-fill" />
        <div className="group-child" />
        <b className="home" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="about" onClick={onAboutTextClick}>
          About
        </b>
        <b className="services">Services</b>
        <b className="shop1">Shop</b>
        <b className="contact" onClick={onContactTextClick}>
          Contact
        </b>
      </div>
      <div className="rectangle-parent">
        <div className="group-item" />
        <button className="search">
          <div className="search-child" />
          <img className="search-item" alt="" src="/vector-109.svg" />
        </button>
        <div className="cart-outline-wrapper">
          <img className="cart-outline-icon" alt="" src="/src/image/Cart.svg" />
        </div>
      </div>
      <img className="shop-child" alt="" src="/src/image/Rectangle 29.png" />
      <div className="shop-item" />
      <div className="homeshop">Home/Shop</div>
      <b className="shop2">SHOP</b>
      <img className="shop-inner" alt="" src="/src/image/Rectangle 29.png" />
      <b className="item">Item</b>
      <b className="apple">Apple</b>
      <b className="b">$3.00</b>
      <b className="b1">$6.00</b>
      <b className="b2">$18.00</b>
      <b className="b3">$6.00</b>
      <b className="watermelon">Watermelon</b>
      <b className="price">Price</b>
      <b className="quality">Quality</b>
      <b className="total">Total</b>
      <img className="line-icon" alt="" src="/line-6.svg" />
      <div className="rectangle-div" />
      <img
        className="apple-1-icon"
        alt=""
        src="/src/image/apple 1.png"
        onClick={onApple1ImageClick}
      />
      <div className="shop-child1" />
      <img className="water-1-icon" alt="" src="/src/image/water 1.png" />
      <div className="shop-child2" />
      <div className="shop-child3" />
      <img className="shop-child4" alt="" src="/line-7.svg" />
      <img className="shop-child5" alt="" src="/line-7.svg" />
      <div className="line-div" />
      <div className="shop-child6" />
      <b className="b4">+</b>
      <b className="b5">+</b>
      <b className="b6">-</b>
      <b className="b7">-</b>
      <b className="b8">2</b>
      <b className="b9">
        <p className="p">3</p>
      </b>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="shop-child7" />
      <div className="enter-coupon-code">Enter Coupon Code</div>
      <div className="shop-child8" />
      <div className="apply-coupon">Apply Coupon</div>
      <div className="ellipse-div" />
      <img className="arrow-icon" alt="" src="/src/image/Arrow 1.svg" />
      <div className="shop-child9" />
      <b className="subtotal">Subtotal</b>
      <div className="usd">$24.00USD</div>
      <div className="usd">$24.00USD</div>
      <div className="usd2">$0.00USD</div>
      <div className="usd3">$24.00USD</div>
      <b className="shipping-cost">
        <p className="p">Shipping</p>
        <p className="p">Cost</p>
      </b>
      <b className="total1">Total</b>
      <div className="shop-child10" />
      <div className="checkout" onClick={onCheckoutTextClick}>
        <p className="p">Checkout</p>
      </div>
      <div className="shop-child11" />
      <div className="shop-child12" />
      <b className="x">x</b>
      <b className="x1">x</b>
      <div className="shop-child13" />
      <img className="subtract-icon" alt="" src="/subtract.svg" />
      <b className="farmersfreshgmailcom">farmersfresh@gmail.com</b>
      <b className="talisaycity-cebu-ph">Talisay,City Cebu PH</b>
      <img className="pin-alt-icon" alt="" src="/src/image/Pin_alt.svg" />
      <img className="social-icons" alt="" src="/src/image/Social Icons.svg" />
      <img className="social-icons1" alt="" src="/src/image/Social Icons 2.svg" />
      <img className="social-icons2" alt="" src="/src/image/Social Icons 3.svg" />
      <img className="social-icons3" alt="" src="/src/image/Social Icons 4.svg" />
    </div>
  );
};

export default Shop;
