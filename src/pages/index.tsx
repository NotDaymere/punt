import MainLayout from "shared/layouts/MainLayout";
import NavLayout from "shared/layouts/NavLayout";
import { Authorized, Guests, General } from 'widgets/01-home-screens';

const Home = () => {
  return (
      <MainLayout title="Home">
          <NavLayout>
              <Authorized.Main />
              <Authorized.Featured />
              
              <Authorized.Exclusives />
              <Authorized.QuickBuy />
              <Authorized.Games />
          </NavLayout>
      </MainLayout>
  );
};

export default Home;
