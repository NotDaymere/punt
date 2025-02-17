import React from "react";
import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import { Screens } from "widgets/11-giweaway-screens";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { ToastProvider } from "shared/components/Toast";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import css from "./giveaways.module.scss";

const CreateNow = dynamic(
    () => import("widgets/11-giweaway-screens/modals/CreateNew").then((mod) => mod.CreateNew),
    { ssr: false }
);

const Details = dynamic(
    () =>
        import("widgets/11-giweaway-screens/modals/GiveawayDetails").then(
            (mod) => mod.GiveawayDetails
        ),
    { ssr: false }
);

const Giveaways: NextPage = () => {
    return (
        <MainLayout title="Giveaways">
            <ToastProvider>
                <NavLayout>
                    <Header />
                    <Screens.Hero />
                    <Screens.Giveaways />
                    <CreateNow />
                    <Details />
                </NavLayout>
            </ToastProvider>
            <Footer />
        </MainLayout>
    );
};

export default Giveaways;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
