import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            안녕하세요!
            <ul className="navigation">
                <li>
                    <Link href="/mypage">마이페이지 바로가기</Link>
                </li>
            </ul>
        </main>
    );
}
