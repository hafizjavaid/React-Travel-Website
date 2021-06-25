import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experiences from "./components/Experience/Experiences";
import Video from "./components/Video";
import Places from "./components/Places/Places";
import Subscribe from "./components/Subscribe";
import Sponsers from "./components/Sponsers/Sponsers";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Header></Header>
      <main className="main">
        <Banner></Banner>
        <About></About>
        <Experiences></Experiences>
        <Video></Video>
        <Places></Places>
        <Subscribe></Subscribe>
        <Sponsers></Sponsers>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
