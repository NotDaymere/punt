import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Screens } from "widgets/10-promotions-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./promotions.module.scss";

const Promotions: NextPage = () => {
    return (
        <MainLayout title="Promotions">
            <NavLayout>
                <Header />
                <Screens.Head />
                <Screens.Content />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default Promotions;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
