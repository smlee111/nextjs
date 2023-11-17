import Link from "next/link";

export default function Nav() {
    return (
        <nav>
            <ul className="menu">
                <li>
                    <Link href="/">홈</Link>
                </li>
                <li>
                    <Link href="/about">어바웃</Link>
                </li>
            </ul>
        </nav>
    );
}
