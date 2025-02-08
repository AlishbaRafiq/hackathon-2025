"use client";
import { createContext, useState, ReactNode } from "react";

// Define the product type
type Product = {
  id: string;
  name: string;
  price: number;
  img: string;
  description?: string;
  quantity: number; // Required in cart
};

// Define cart context type
type CartContextType = {
  cart: Product[];
  addToCart: (product: Product, quantity: number) => void;
};

// Create Context with a default undefined value
export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product, quantity: number) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
