import { create } from "zustand";

interface myStoreProps {
    data: any;
    setData: (newData: any) => void;
    userValue: any;
    setUserValue: (newData: any) => void;
    loader: boolean;
    setLoader: (newData: boolean) => void;
}

export const myStore = create<myStoreProps>((set) => ({
    data: null,
    setData: (newData) => set({ data: newData }),
    userValue: null,
    setUserValue: (newData) => set({ userValue: newData }),
    loader: false,
    setLoader: (newData) => set({ loader: newData }),
}));
