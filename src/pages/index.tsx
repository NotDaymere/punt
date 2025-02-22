import React from "react";
import { GetServerSideProps } from "next";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Authorized, Guests } from "widgets/01-home-screens";
import { HomeProvider } from "widgets/01-home-screens/lib";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { Tutorial } from "widgets/tutorial";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { useLogged } from "shared/temp/useLogged";
import { useModals } from "shared/ui/Modal";
import { executeOnReadyPage } from "shared/utils/browser";
import css from "./home.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const isLogged = useLogged();
    const modals = useModals();

    React.useEffect(() => {
        if (!isLogged) {
            executeOnReadyPage(() => setTimeout(() => modals.open("tutorial"), 1000));
        }
    }, []);

    return (
        <MainLayout title="Home">
            <HomeProvider>
                <NavLayout>
                    <Header />
                    <div className={css.main}>
                        {isLogged ? (
                            <>
                                <Authorized.Main />
                                <Authorized.Featured />
                                <Authorized.Winners />
                                <Authorized.Exclusives />
                                <Authorized.QuickBuy />
                                <Authorized.Games />
                                <Authorized.Jackpot />
                                <Authorized.TrendingSlots />
                                <Authorized.Providers />
                                <Authorized.Challenges />
                                <Authorized.Invitation />
                                <Authorized.Leaderboard />
                                <Authorized.Events />
                            </>
                        ) : (
                            <>
                                <Guests.Hero />
                                <Guests.SpinWheel />
                                <Guests.Winners />
                                <Guests.RealWins />
                                <Guests.Exclusives />
                                <Guests.Checkouts />
                                <Guests.Featured />
                                <Guests.Games />
                                <Guests.ClaimCoins />
                                <Guests.Testimontials />
                                <Guests.Sale />
                                <Guests.Payments />
                                <Tutorial />
                            </>
                        )}
                    </div>
                </NavLayout>
                <Footer />
            </HomeProvider>
        </MainLayout>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    return { props: {} };
};
