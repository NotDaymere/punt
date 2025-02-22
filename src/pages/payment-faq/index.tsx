import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Screens } from "widgets/09-payment-faq-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./payment-faq.module.scss";

const PaymentFaq: NextPage = () => {
    return (
        <MainLayout title="Payment FAQ">
            <NavLayout>
                <Header />
                <Screens.Head />
                <Screens.FAQ />
                <Screens.Content />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default PaymentFaq;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
