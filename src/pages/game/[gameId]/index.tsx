import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import isToday from "dayjs/plugin/isToday";
import { GetServerSideProps, NextPage } from "next";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { Screens } from "widgets/05-gamedetails-screens";
// import css from "./index.module.scss";

dayjs.extend(relativeTime);
dayjs.extend(isToday)

const GameId: NextPage = (props) => {
    return (
        <MainLayout title="Gates Of Olympus">
            <NavLayout>
                <Header />
                <Screens.Hero />
                <Screens.Content />
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default GameId;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
};
