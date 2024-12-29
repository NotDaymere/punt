import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { Hero, Transactions } from "widgets/03-profile-screens";
import { Header } from "widgets/header";
import { ToastProvider } from "shared/components/Toast";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";

// import css from "./profile.module.scss";

const Profile: NextPage = () => {
    return (
        <MainLayout title="Profile">
            <ToastProvider>
                <NavLayout>
                    <Header />
                    <Hero />
                    <Transactions />
                </NavLayout>
            </ToastProvider>
        </MainLayout>
    );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
