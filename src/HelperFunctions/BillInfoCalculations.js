export const calculateCurrentPrice = (cartData) =>
  cartData.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

export const calculateDiscountPrice = (cartData) =>
  cartData.reduce(
    (acc, cur) =>
      acc +
      Math.floor((Number(cur.discount) * Number(cur.price)) / 100) *
        cur.quantity,
    0
  );
