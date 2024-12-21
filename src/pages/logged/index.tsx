import { Authorized, General, Guests } from "widgets/01-home-screens";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { Header } from "widgets/header";
import { Footer } from "widgets/footer";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    return (
        <MainLayout title="Home">
            <NavLayout>
                <Header />
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
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default Home;
