import { createContext, useContext, useState } from "react";

export const ShoppingCartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [total, setTotal] = useState(0);

  const [shoppingCart, setShoppingCart] = useState([
    {
      id: 12345,
      product: {
        id: "g01",
        name: "CORE I5 10400F | RAM 8G| GTX 1660 SUPER 6G",
        price: 10000000,
        category: "bo-may-tinh-choi-game",
        imageUrl:
          "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m4-300x300.jpg",
        imageDetailUrl:
          "https://thuongtinmarket.viachat.vn/wp-content/uploads/2023/06/m2.jpg",
        slug: "core-i5-10400f-ram-16g-rtx-2060-super-8g-likenew-man",
      },
      quantity: 5,
    },
  ]);

  const addProduct = ({ product, quantity }) => {
    const id = Date.now();

    setShoppingCart([...shoppingCart, { id, product, quantity }]);

    const t = shoppingCart.reduce((preValue, cartItem) => {
      const subTotal = cartItem.product.price * cartItem.quantity;

      return preValue + subTotal;
    }, 0);
    console.log({ product, total: t });
  };

  const removeProduct = ({ id }) => {
    const items = shoppingCart.filter((item) => item.id !== id);
    setShoppingCart(items);
  };

  const updateQuantity = () => {};

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
