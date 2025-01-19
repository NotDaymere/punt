import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { AllGames, Filters } from "widgets/04-games-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./games.module.scss";

const Games: NextPage = () => {
    return (
        <MainLayout title="All Games">
            <NavLayout>
                <Header />
                <Filters />
                <AllGames />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default Games;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
