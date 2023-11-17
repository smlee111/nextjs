import React from "react";
import {CounterStore, counterStore} from "./counterStore";

interface Store {
    counterStore: CounterStore;
}

export const StoreContext = React.createContext<Store>({
    counterStore: counterStore,
});
