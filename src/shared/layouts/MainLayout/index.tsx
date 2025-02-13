import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Preloader } from "widgets/preloader";
import clsx from "clsx";
import { getCoreConfig } from "shared/config/core.config";
import css from "./main-layout.module.scss";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    style: ["normal"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

interface MainLayoutProps {
    className?: string;
    children: React.ReactNode;
    title?: string;
    image?: string;
    url?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
    title,
    description,
    keywords,
    className,
    url,
    image,
    children,
}) => {
    return (
        <div className={css.box}>
            <div className={clsx(css.main, className)}>
                <style jsx global>{`
                    body {
                        font: 400 16px/1.25 ${inter.style.fontFamily};
                    }
                    :root {
                        --fontInter: ${inter.style.fontFamily};
                    }
                `}</style>
                <Head>
                    <title>
                        {title
                            ? `${getCoreConfig().siteName} | ${title}`
                            : getCoreConfig().siteName}
                    </title>
                    <meta property="og:title" content={title} />
                    <meta property="twitter:title" content={title} />
                    {image && (
                        <>
                            <meta property="og:image" content={image} />
                            <meta property="twitter:image" content={image} />
                        </>
                    )}
                    {description && (
                        <>
                            <meta name="description" content={description} />
                            <meta property="og:description" content={description} />
                            <meta property="twitter:description" content={description} />
                        </>
                    )}
                    {url && (
                        <>
                            <meta property="og:url" content={url} />
                            <link rel="canonical" href={url} />
                        </>
                    )}
                    {keywords && <meta name="keywords" content={keywords} />}
                    <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:type" content="business.business" />

                    <link
                        rel="preload"
                        href="/fonts/Cubano.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/DxGrafik-SemiBold.otf"
                        as="font"
                        type="font/otf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Helvetica-Rounded-Lt-Std-Bold.otf"
                        as="font"
                        type="font/otf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/PPMori-Regular.otf"
                        as="font"
                        type="font/otf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/PPMori-SemiBold.otf"
                        as="font"
                        type="font/otf"
                        crossOrigin=""
                    />
                </Head>
                <Preloader />
                {children}
            </div>
        </div>
    );
};

export default MainLayout;
