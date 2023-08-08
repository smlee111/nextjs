import {observer} from "mobx-react-lite";
import React, {useContext} from "react";
import {StoreContext} from "../stores";

const CountPage: React.FC = () => {
    const counterStore = useContext(StoreContext).counterStore;

    return (
        <div>
            <h1>Counter: {counterStore.count}</h1>
            <button onClick={() => counterStore.increase()}>Increase</button>
            <button onClick={() => counterStore.decrease()}>Decrease</button>
        </div>
    );
};

export default observer(CountPage);
