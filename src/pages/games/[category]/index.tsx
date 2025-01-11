import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { CategoryGames, Filters } from "widgets/04-games-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./game-category.module.scss";

const GameCategory: NextPage = () => {
    return (
        <MainLayout title="Home">
            <NavLayout>
                <Header />
                <Filters />
                <CategoryGames />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default GameCategory;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
}
