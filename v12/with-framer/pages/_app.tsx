import "../styles/globals.css";
import type {AppProps} from "next/app";
import {AnimatePresence, motion} from "framer-motion";

// 애니메이션 상태 정의
const pageVariants = {
    initial: {
        x: "100%", // 새 페이지는 화면의 현재 위치에서 시작
    },
    in: {
        x: "0", // 새 페이지는 그대로 중앙에 위치
    },
    out: {
        x: "0", // 현재 페이지는 왼쪽으로 슬라이드됨
    },
};

function MyApp({Component, pageProps, router}: AppProps) {
    return (
        <div className="wrapAll">
            <AnimatePresence mode="wait">
                <motion.div
                    key={router.route}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}>
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default MyApp;
