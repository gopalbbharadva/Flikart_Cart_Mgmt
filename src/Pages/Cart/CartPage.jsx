import React from "react";
import { Link } from "react-router-dom";
import { HorizontalCard } from "../../Components/HorizontalCard/HorizontalCard";
import { ProductCard } from "../../Components/ProductCard";
import { useCart } from "../../Context/CartContext";
import { useSaveLater } from "../../Context/SaveLaterContext";
import {
  calculateCurrentPrice,
  calculateDiscountPrice,
} from "../../HelperFunctions/BillInfoCalculations";
import "./Cart.css";

export const CartPage = () => {
  const {
    cartState: { cartItems },
  } = useCart();
  const {
    saveLaterState: { saveLaterItems },
  } = useSaveLater();

  const currentPrice = calculateCurrentPrice(cartItems);
  const discountPrice = calculateDiscountPrice(cartItems);
  const totalPrice = currentPrice - discountPrice;

  return (
    <div className="main-container">
      {cartItems.length !== 0 && (
        <p className="main-heading fs-lg mg-md">
          Your cart has {cartItems.length}
          {cartItems.length > 1 ? " products" : " product"}
        </p>
      )}
      <div className="cart-container">
        <div>
          <p className="fs-xlg">Save Later</p>
          {saveLaterItems.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
        {cartItems.length > 0 ? (
          <>
            <div className="card-item">
              {cartItems.map((item, index) => (
                <HorizontalCard cartItem={item} key={index} />
              ))}
            </div>
            <div className="bill">
              <div className="bill-heading pd-vrtl-sm">
                <p className="fs-lg">Price Details</p>
              </div>
              <div className="bill-info">
                <div className="row-detail">
                  <p className="col-80">
                    Price ({cartItems.length}{" "}
                    {cartItems.length > 1 ? "items" : "item"})
                  </p>
                  <p className="col-20">{currentPrice}₹</p>
                </div>
                <div className="row-detail">
                  <p className="col-80">Discount</p>
                  <p className="col-20 clr-red">- {discountPrice}₹</p>
                </div>
                <div className="row-detail">
                  <p className="col-80">Delivery</p>
                  <p className="col-20 text-green">free</p>
                </div>
                <div className="row-detail">
                  <p className="total-text ">Total Amount</p>
                  <p className="total-value">{totalPrice}₹</p>
                </div>
              </div>
              <div className="msgRiCoupon3Fill">
                <p className="text-green pd-sm">Hurray!! You saved 200₹ :)</p>
              </div>
              <Link to="/checkout">
                <button className="btn is-solid w-100">CHECKOUT</button>
              </Link>
            </div>
          </>
        ) : (
          <p className="fs-xlg">No products</p>
        )}
      </div>
    </div>
  );
};
