'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import { productProps } from "../Components/Product/product";

interface StateContextProps {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  cartItems: productProps[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: productProps, quantity: number) => void;
  toggleCartItemQuantity: (id: string, value: string) => void;
  onRemove: (product: productProps) => void;
}

// Initialize Context
const Context = createContext<StateContextProps | undefined>(undefined);

// State Context Provider
const StateContext = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<productProps[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  // let foundProduct: productProps;
  // let index: number;

  const onAdd = (product: productProps, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id) return {
          ...cartProduct,
          quantity: cartProduct.quantity + quantity,
        }
      })

      setCartItems(cartItems.filter((item): item is productProps => item !== undefined));
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to cart`);
  }

  const onRemove = (product: productProps) => {
    const foundProduct = cartItems.find((item) => item._id === product._id);
    if (!foundProduct) return;

    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setCartItems(newCartItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
  };

  const toggleCartItemQuantity = (id: string, value: string) => {
    const foundProduct = cartItems.find((item) => item._id === id);
    if (!foundProduct) return;

    const updatedCartItems = cartItems.map((item) => {
      if (item._id === id) {
        if (value === "inc") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (value === "dec" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    }).filter((item): item is productProps => item.quantity > 0);

    // Recalculate total price and total quantities based on the updated cart
    const newTotalPrice = updatedCartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const newTotalQuantities = updatedCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    setCartItems(updatedCartItems);
    setTotalPrice(newTotalPrice);
    setTotalQuantities(newTotalQuantities);
  };


  const incQty = () => setQty((prevQty) => prevQty + 1);
  const decQty = () => setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useStateContext must be used within a StateContext Provider");
  }
  return context;
};