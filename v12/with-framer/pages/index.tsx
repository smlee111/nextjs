import type {NextPage} from "next";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <div className="bg home">
            <p className="title">HOME</p>
            <div className="top"></div>
            <ul className="menu">
                <li>
                    <Link href="/" />
                    home
                </li>
                <li>
                    <Link href="/about" />
                    about
                </li>
            </ul>
        </div>
    );
};

export default Home;
