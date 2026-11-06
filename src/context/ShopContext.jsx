import { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("lp-cart") || "[]");
  });

  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("lp-wishlist") || "[]");
  });

  useEffect(() => {
    localStorage.setItem("lp-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("lp-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, size = product.size[0]) => {
    setCart(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.size === size
      );

      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, size, quantity: 1 }];
    });
  };

  const removeFromCart = (id, size) => {
    setCart(prev =>
      prev.filter(item => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return;

    setCart(prev =>
      prev.map(item =>
        item.id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const toggleWishlist = product => {
    setWishlist(prev =>
      prev.some(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  const isWishlisted = id =>
    wishlist.some(item => item.id === id);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isWishlisted,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);
