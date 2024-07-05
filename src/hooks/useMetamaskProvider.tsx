import { useContext } from "react";
import { MetamaskContextProvider } from "../contexts/MetamaskContext";

export const useMetamaskProvider = () => useContext(MetamaskContextProvider);
