// "use client";

// import { useEffect, useState, useCallback } from "react";
// import { Cart, CartItem, Product } from "@prisma/client";
// import { useSession } from "next-auth/react"; // or your auth solution

// export const useCart = () => {
//   const [cart, setCart] = useState<
//     (Cart & { items: (CartItem & { product: Product })[] }) | null
//   >(null);
//   const [loading, setLoading] = useState(true);
//   const [guestSessionId, setGuestSessionId] = useState<string | null>(null);
//   const { data: session } = useSession();

//   const initGuestSession = useCallback(async () => {
//     if (session?.user) return; // Skip if user is authenticated

//     let sessionId = localStorage.getItem("guestSessionId");
//     if (!sessionId) {
//       const response = await fetch("/api/guest/session", { method: "POST" });
//       const data = await response.json();
//       sessionId = data.sessionId;
//       localStorage.setItem("guestSessionId", sessionId!);
//     }
//     setGuestSessionId(sessionId);
//   }, [session]);

//   const fetchCart = useCallback(async () => {
//     try {
//       setLoading(true);

//       if (!session?.user && !guestSessionId) {
//         console.error("Cannot fetch cart: No user session or guest session ID");
//         return;
//       }

//       const url = session?.user
//         ? "/api/cart"
//         : `/api/guest/cart?sessionId=${guestSessionId}`;

//       const response = await fetch(url);
//       if (!response.ok) throw new Error("Failed to fetch cart");
//       const data = await response.json();
//       setCart(data);
//     } catch (error) {
//       console.error("Cart fetch error:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, [session, guestSessionId]);

//   const addToCart = async (productId: string, quantity: number = 1) => {
//     try {
//       const url = session?.user ? "/api/cart/items" : "/api/guest/cart/items";

//       const body = session?.user
//         ? { productId, quantity }
//         : { productId, quantity, sessionId: guestSessionId };

//       const response = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       if (!response.ok) throw new Error("Failed to add to cart");
//       await fetchCart();
//       return true;
//     } catch (error) {
//       console.error("Add to cart error:", error);
//       return false;
//     }
//   };

//   useEffect(() => {
//     initGuestSession();
//   }, [initGuestSession]);

//   useEffect(() => {
//     if (session?.user || guestSessionId) {
//       fetchCart();
//     }
//   }, [session, guestSessionId, fetchCart]);

//   return { cart, loading, addToCart, fetchCart };
// };


"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";

interface CartItem {
    id: string;
    productId: string;
    quantity: number;
    product?: {
      id: string;
      name: string;
      price: number;
      // Add other product fields you need
    };
  }
  
  interface Cart {
    id: string;
    items: CartItem[];
    // Add other cart fields you need
  }
  
  export const useCart = () => {
    const [cart, setCart] = useState<Cart | null>(null);

//   const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [guestSessionId, setGuestSessionId] = useState<string | null>(null);

  // Use optional chaining with useSession since SessionProvider might not be present
  const session = useSession?.()?.data;

  // Initialize or retrieve guest session
  const initGuestSession = useCallback(async () => {
    if (session?.user) return;
  
    let sessionId = localStorage.getItem("guestSessionId");
    if (!sessionId) {
      const response = await fetch("/api/guest/session", { method: "POST" });
      const data = await response.json();
      sessionId = data.sessionId;
      if (!sessionId) throw new Error("No session ID received");
      localStorage.setItem("guestSessionId", sessionId);
    }
  
    // TypeScript now knows sessionId is string here
    setGuestSessionId(sessionId);
  }, [session?.user]);
  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      const url = session?.user
        ? "/api/cart"
        : `/api/guest/cart?sessionId=${guestSessionId}`;

      if (!session?.user && !guestSessionId) return;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch cart");
      const data = await response.json();
      setCart(data);
    } catch (error) {
      console.error("Cart fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, [session?.user, guestSessionId]);

  const addToCart = async (productId: string, quantity: number = 1) => {
    try {
      const url = session?.user ? "/api/cart/items" : "/api/guest/cart/items";

      const body = session?.user
        ? { productId, quantity }
        : { productId, quantity, sessionId: guestSessionId };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error("Failed to add to cart");
      await fetchCart();
      return true;
    } catch (error) {
      console.error("Add to cart error:", error);
      return false;
    }
  };

  useEffect(() => {
    initGuestSession();
  }, [initGuestSession]);

  useEffect(() => {
    if (session?.user || guestSessionId) {
      fetchCart();
    }
  }, [session, guestSessionId, fetchCart]);

  return { cart, loading, addToCart, fetchCart };
};