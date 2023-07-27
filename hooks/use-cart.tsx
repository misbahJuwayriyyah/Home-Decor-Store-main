import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { Product } from '@/types';
import { AlertTriangle } from 'lucide-react';
export interface CartItemData {
  product: Product;
  quantity: number;
}
interface CartStore {
  items: { product: Product, quantity: number }[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  incrementItem: (id: string) => void; // Add the incrementItem method
  decrementItem: (id: string) => void; // Add the incrementItem method
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItemIndex = currentItems.findIndex((item) => item.product.id === data.id);
      
      if (existingItemIndex !== -1) {
        const newItems = [...currentItems];
        newItems[existingItemIndex].quantity += 1;
        set({ items: newItems });
      } else {
        set({ items: [...currentItems, { product: data, quantity: 1 }] });
      }

      toast.success('Item added to cart.');
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter((item) => item.product.id !== id)] });
      toast.success('Item removed from cart.');
    },
    removeAll: () => set({ items: [] }),
    incrementItem: (id: string) => {
      // Add the logic to increment the quantity for the item with the given id
      const currentItems = get().items;
      const updatedItems = currentItems.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      set({ items: updatedItems });
    },
    decrementItem: (id: string) => {
      // Add the logic to decrement the quantity for the item with the given id
      const currentItems = get().items;
      const updatedItems = currentItems.map((item) => {
        if (item.product.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      set({ items: updatedItems });
    },
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  })
);

export default useCart;
