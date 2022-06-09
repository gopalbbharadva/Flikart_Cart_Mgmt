import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useSaveLater } from "../Context/SaveLaterContext";

export const ProductCard = ({ product }) => {
  const { id, gender, price, image, brand, size } = product;

  const { cartDispatch, cartState } = useCart();
  const isInCart = cartState.cartItems.find((item) => item.id === product.id);
  const { saveLaterDispatch } = useSaveLater();

  return (
    <div class="card card-shadow">
      <div class="card-image-container">
        <img class="image-responsive" src={image} alt="No preview available" />
      </div>
      <div class="card-body">
        <h3 class="card-title">{brand}</h3>
        <p class="card-sell-price">
          <span>{price} rs.</span>
        </p>
        <p>{gender}</p>
        <p>{size}</p>
        {isInCart ? (
          <Link to="/cart" class="card-button is-cart">
            <span>
              <i class="fas fa-shopping-cart im"></i>Go to Cart
            </span>
          </Link>
        ) : (
          <button
            onClick={() => {
              cartDispatch({ type: "ADD_TO_CART", payload: { product } });
              saveLaterDispatch({
                type: "REMOVE_FROM_SAVE_LATER",
                payload: { id },
              });
            }}
            class="card-button is-cart"
          >
            <span>
              <i class="fas fa-shopping-cart im"></i>Add to Cart
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
