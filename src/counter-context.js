import { createContext, useContext } from "./sinuous-context";

export let CounterContext = createContext(0);

export let CounterContext2 = createContext(100);

export { useContext };
