import "./App.css";
import Top from "./components/top/Top.js";
import Header from "./components/header/Header.js";
import New from "./components/new/New.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Videos from "./components/videos/Videos.js";
import Footer from "./components/footer/Footer.js";

const App = () => {
  return (
    <>
      <Top />
      <Header />
      <main className="container">
        <section className="new__and__sidebar">
          <div className="main__content content__container">
            <New />
          </div>
          <div className="main__sidebar sidebar__container">
            <Sidebar />
          </div>
        </section>
        <Videos />
        <New />
      </main>
      <Footer />
    </>
  );
};

export default App;
