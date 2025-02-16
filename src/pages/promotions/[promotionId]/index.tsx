import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { Screens } from "widgets/10-promotions-screens";
import css from "./promotion-id.module.scss";

const PromotionId: NextPage = () => {
    return (
        <MainLayout title="Stake's Weekly Raffle">
            <HomeProvider>
                <NavLayout>
                    <Header />
                    <Screens.Layout />
                </NavLayout>
                <Footer />
            </HomeProvider>
        </MainLayout>
    );
};

export default PromotionId;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
