import {NextPage} from "next";
import Link from "next/link";

const About: NextPage = () => {
    return (
        <div className="bg about">
            <p className="title">ABOUT</p>
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
export default About;
