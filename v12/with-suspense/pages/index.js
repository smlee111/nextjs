import {Suspense} from "react";
import Nav from "../components/Nav";

export default function Home() {
    return (
        <>
            <Nav />
            <Suspense fallback={<p>Loading feed...</p>}>홈 페이지</Suspense>
        </>
    );
}
