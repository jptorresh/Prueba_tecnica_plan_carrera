import { create } from "zustand";

const useAppStore = create((set) => ({
  user: "jptorres@coordinadora.com",

  setUser: (user) => set({ user }), 
  logout: () => set({ user: null }), 
}));

export default useAppStore;
