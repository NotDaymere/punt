import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { AllGames, Hero, useGamesNav } from "widgets/04-games-screens";
import { CATEGORIES_ENUM } from "widgets/04-games-screens/lib/games-navigation";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./games.module.scss";

const Games: NextPage = () => {
    const { navActive } = useGamesNav();

    return (
        <MainLayout title="Home">
            <NavLayout>
                <Header />
                <Hero />
                {navActive.id === CATEGORIES_ENUM.ALL_GAMES && <AllGames />}
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default Games;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
