import { Authorized, General, Guests } from "widgets/01-home-screens";
import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";

const Home = () => {
    return (
        <MainLayout title="Home">
            <NavLayout>
                <Authorized.Main />
                <Authorized.Featured />

                <Authorized.Exclusives />
                <Authorized.QuickBuy />
                <Authorized.Games />
                <Authorized.Jackpot />
                <Authorized.TrendingSlots />
                <Authorized.Providers />
                <Authorized.Challenges />
                <Authorized.Invitation />
            </NavLayout>
        </MainLayout>
    );
};

export default Home;
