import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([]);

  const calculateTotalAmount = (cart) => {
    return cart.reduce((preValue, cartItem) => {
      const subTotal = cartItem.product.price * cartItem.quantity;
      return preValue + subTotal;
    }, 0);
  };

  const addProduct = ({ product, quantity }) => {
    const index = shoppingCart.findIndex(
      (item) => item.product.id === product.id
    );
    const id = Date.now();
    let cart = [...shoppingCart];

    if (index < 0) {
      cart = [...cart, { id, product, quantity }];
    } else {
      cart[index].quantity += quantity;
    }

    const totalAmount = calculateTotalAmount(cart);

    setShoppingCart(cart);
    setTotal(totalAmount);
  };

  const removeProduct = ({ id }) => {
    debugger
    const cart = shoppingCart.filter((item) => item.id !== id);

    const totalAmount = calculateTotalAmount(cart);
    setShoppingCart(cart);
    setTotal(totalAmount);
  };

  const updateQuantity = (id, quantity) => {
    const index = shoppingCart.findIndex((item) => item.id === id);
    let cart = [...shoppingCart];

    if (index >= 0) {
      cart[index].quantity = quantity;

      const totalAmount = calculateTotalAmount(cart);

      setShoppingCart(cart);
      setTotal(totalAmount);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, total, addProduct, removeProduct, updateQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const shoppingCart = useContext(ShoppingCartContext);

  return shoppingCart;
};
