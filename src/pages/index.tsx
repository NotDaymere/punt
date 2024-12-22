import { Authorized, General, Guests } from "widgets/01-home-screens";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import css from './home.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    return (
        <MainLayout title="Home">
            <NavLayout>
                <Header />
                <div className={css.main}>
                    <Guests.Hero />
                    <Guests.SpinWheel />
                    <Guests.Winners />
                    <Guests.RealWins />
                    <Guests.Exclusives />
                    <Guests.Checkouts />
                    <Guests.Featured />
                    <Guests.Games />
                    <Guests.ClaimCoins />
                </div>
            </NavLayout>
            <Footer />
        </MainLayout>
    );
};

export default Home;
