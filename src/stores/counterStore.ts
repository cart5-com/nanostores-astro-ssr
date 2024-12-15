// counterStore.ts
import { atom } from "nanostores";

// Create store with initial null state
export const $counter = atom<number>(0);

// Actions
export const increment = () => {
    $counter.set($counter.get() + 1);
};

export const decrement = () => {
    $counter.set($counter.get() - 1);
};