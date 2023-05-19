import React from "react";
import Menu from "../components/Navbar";
import Tilt from "react-tilt";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Menu homePage="home-one"/>
      <section id="home" className="home">
        <div className="home-decor">
          <div className="home-circle1 purple-filter">
            <img src={`/assets/images/main-banner3.png`} alt="" />
          </div>
          <div className="home-circle2 purple-filter">
            <img src={`/assets/images/main-banner12.png`} alt="" />
          </div>
          <div className="home-circle3 purple-filter">
            <img src={`/assets/images/main-banner1.png`} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="home-contain">
                <div>
                  <h4 className="mt-3">Introducing</h4>
                  <h1>
                    <span className="">VIRGEUX</span>
                    <span className="f-color f-bold">BOT</span>
                  </h1>
                  <p>
                    We'll do the matching and leave you to the chatting. We make finding that special someone easy.
                  </p>
                  <a href="https://whop.com/virgeux" target="_blank" rel="noreferrer">
                    <img src={`/assets/images/whop-link.png`} alt="whop" className="store" width="150" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 offset-md-1 flex-y-center">
              <div className="home-right flex-y-center">
                <Tilt
                  options={{
                    perspective: 110,
                    speed: 400,
                    max: 1.2,
                    scale: 1,
                  }}
                >
                  <img src={`/assets/images/tinder-preview-3d.png`} className="img-fluid" alt="mobile" />
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Footer />
     
    </div>
  );
};

export default Home;
