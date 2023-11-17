import {Suspense} from "react";
import Nav from "../components/Nav";

export default function About() {
    return (
        <>
            <Nav />
            <Suspense fallback={<p>Loading feed...</p>}>어바웃 페이지</Suspense>
        </>
    );
}
