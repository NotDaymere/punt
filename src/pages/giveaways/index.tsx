import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./giveaways.module.scss";

const Giveaways: NextPage = () => {
    return (
        <MainLayout title="Giveaways">
            <NavLayout>
                <Header />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default Giveaways;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
};
