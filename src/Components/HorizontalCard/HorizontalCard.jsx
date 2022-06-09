import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { useCart } from "../../Context/CartContext";
import { useSaveLater } from "../../Context/SaveLaterContext";
import "./HorizontalCard.css";

export const HorizontalCard = ({ cartItem }) => {
  const { id, gender, brand, size, image, quantity, price, discount } =
    cartItem;

  const { cartDispatch } = useCart();
  const { saveLaterDispatch } = useSaveLater();

  return (
    <div className="card-hz flex-row">
      <img className="hr-image" src={image} alt="book cover photo" />
      <div className="cart-card-body">
        <p className="fs-btw-ml">{brand}</p>
        <p className="card-sell-price">
          <span className="card-cost-price">{price}₹</span>
          <span className="card-discount">{discount}%off</span>
        </p>
        <p>{size}</p>
        <p>{gender}</p>
        <div className="quantity-count">
          {cartItem.quantity > 1 ? (
            <button
              onClick={() =>
                cartDispatch({ type: "DECREMENT_QUANTITY", payload: { id } })
              }
              className="button-count-minus"
            >
              <span className="flex">
                <FiMinus />
              </span>
            </button>
          ) : (
            <button
              onClick={() =>
                cartDispatch({ type: "REMOVE_PRODUCT", payload: { id } })
              }
              className="button-count-minus"
            >
              <span className="flex">
                <FiTrash2 />
              </span>
            </button>
          )}
          <p className="quantity-value">{quantity}</p>
          <button
            onClick={() =>
              cartDispatch({ type: "INCREMENT_QUANTITY", payload: { id } })
            }
            className="button-count-plus"
          >
            <span className="flex">
              <FiPlus />
            </span>
          </button>
        </div>
        <div className="card-button-container mt">
          <button
            onClick={() => {
              saveLaterDispatch({
                type: "ADD_TO_SAVE_LATER",
                payload: { cartItem },
              });
              cartDispatch({ type: "REMOVE_PRODUCT", payload: { id } });
            }}
            className="btn is-btn-secondary is-outlined pd-sm"
          >
            MOVE TO SAVE LATER
          </button>
        </div>
      </div>
    </div>
  );
};
