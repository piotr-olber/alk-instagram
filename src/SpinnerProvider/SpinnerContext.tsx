import { createContext } from "react";

type SpinnerContextType = (value: boolean) => void;

export const SpinnerContext = createContext<SpinnerContextType>(
    (value: boolean) => {}
);
