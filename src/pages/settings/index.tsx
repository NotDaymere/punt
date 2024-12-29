import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { ToastProvider } from "shared/components/Toast";
import { Header } from "widgets/header";
import NavLayout from "shared/layouts/NavLayout";
import MainLayout from "shared/layouts/MainLayout";
import { SettingsLayout } from 'widgets/02-settings-screens';
import css from "./settings.module.scss";

const Settings: NextPage = () => {
    return (
        <MainLayout title="Home">
            <ToastProvider>
                <NavLayout>
                    <Header />
                    <SettingsLayout />
                </NavLayout>
            </ToastProvider>
        </MainLayout>
    );
}

export default Settings;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
}