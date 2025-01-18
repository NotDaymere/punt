import { Authorized, Guests } from "widgets/01-home-screens";
import gsap from "gsap";
import { GetServerSideProps } from "next";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { useLogged } from "shared/temp/useLogged";
import css from './home.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const isLogged = useLogged()
    
    return (
        <MainLayout title="Home">
            <NavLayout>
                <Header />
                <div className={css.main}>
                    {isLogged ? (
                        <>
                            {/* <Authorized.Main /> */}
                            {/* <Authorized.Featured /> */}
                            {/* <Authorized.Winners /> */}
                            {/* <Authorized.Exclusives /> */}
                            {/* <Authorized.QuickBuy /> */}
                            {/* <Authorized.Games /> */}
                            {/* <Authorized.Jackpot /> */}
                            {/* <Authorized.TrendingSlots /> */}
                            {/* <Authorized.Providers /> */}
                            {/* <Authorized.Challenges /> */}
                            {/* <Authorized.Invitation /> */}
                            {/* <Authorized.Leaderboard /> */}
                            {/* <Authorized.Events /> */}
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
                        </>
                    )}
                </div>
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    return { props: {} };
}
