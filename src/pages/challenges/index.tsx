import React from "react";
import { GetServerSideProps, NextPage } from "next";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { Screens } from "widgets/06-challenge-screens";
// import css from "./challenges.module.scss";

const Challenges: NextPage = () => {
    return (
        <MainLayout title="Challenges">
            <NavLayout>
                <Header />
                <Screens.Hero />
                <Screens.Challenges />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
}

export default Challenges;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
}