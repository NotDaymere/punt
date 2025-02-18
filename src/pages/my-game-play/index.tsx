import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { Screens } from "widgets/12-mygameplay-screens";
import css from "./my-game-play.module.scss";

const MyGamePlay: NextPage = () => {
    return (
        <MainLayout title="My Game Play">
            <NavLayout>
                <Header />
                <div className={css.main}>
                    <Screens.Hero />
                </div>
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default MyGamePlay;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
