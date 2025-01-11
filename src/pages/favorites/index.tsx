import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { GameList } from "widgets/04-games-screens/_components";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./favorites.module.scss";

const images = Array.from({ length: 28 }).map(() => {
    const idx = Math.floor(Math.random() * 6) + 1;
    return `/img/temp/games-${idx}.jpg`;
});

const Favorites: NextPage = () => {
    return (
        <MainLayout title="Favorites">
            <NavLayout>
                <Header />
                <GameList title="Favorites" list={images} best />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default Favorites;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
};
