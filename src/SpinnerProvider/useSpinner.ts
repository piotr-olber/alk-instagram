import { useContext } from "react";
import { SpinnerContext } from "./SpinnerContext";

export const useSpinner = () => useContext(SpinnerContext);
