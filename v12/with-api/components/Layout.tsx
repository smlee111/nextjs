import React from "react";
import Head from "next/head";

type LayoutProps = {
    title?: string;
    description?: string;
    children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children, title, description}) => {
    return (
        <div>
            <Head>
                <title>{title || "Default Title"}</title>
                <meta
                    name="description"
                    content={description || "Default Description"}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
};

export default Layout;
