// modules
import type {NextPage} from "next";
import Link from "next/link";

// components
import Layout from "../components/Layout";

const Home: NextPage = () => {
    return (
        <Layout
            title="Counter with mobx,ts"
            description="Generated by create next app">
            <Link href="/count">카운터</Link>
        </Layout>
    );
};

export default Home;
