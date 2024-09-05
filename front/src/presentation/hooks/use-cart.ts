import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/domain/models/product";

type ProductCart = Product & { quantity: number };

interface CartStore {
  items: ProductCart[];
  addItem: (data: ProductCart) => boolean;
  removeItem: (id: number) => boolean;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: ProductCart) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          existingItem.quantity += 1;
          return true;
        }

        set({ items: [...get().items, data] });
        return true;
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        return true;
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "carte-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
