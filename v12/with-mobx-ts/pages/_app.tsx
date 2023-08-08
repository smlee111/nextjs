import {Provider} from "mobx-react";
import {counterStore} from "../stores/counterStore";
import type {AppProps} from "next/app";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider counterStore={counterStore}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;
