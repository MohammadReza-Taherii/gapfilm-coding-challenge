import Header from "../components/header";
import Footer from "../components/footer";
import MainPage from "../components/mainPage";

const HomePage = () => {
  return (
    <div className="font-Righteous min-h-screen flex flex-col">
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
};

export default HomePage;
