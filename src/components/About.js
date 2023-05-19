import React, { useEffect } from "react";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-decor">
        <div className="about-circle1 purple-filter">
          <img src={`/assets/images/main-banner3.png`} alt="team1" />
        </div>
        <div className="about-circle2 purple-filter">
          <img src={`/assets/images/main-banner12.png`} alt="banner1" />
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-5">
            <div className="about-contain">
              <div>
                <h2 className="title">
                  about the <span>virgeux bot</span>
                </h2>
                <p className="caption-about text-black">
                  Virgeux is an adaptable, result-driven, and easy to use app to find the love of your life. Using AI, we match you to your preferred partner on other dating apps so all you have to do is the talking.
                </p>
                <div className="row sm-mb">
                  <div className="col-6">
                    <ul className="about-style">
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img src={`/assets/images/icon/about-icon1.png`} alt="easy-to-customized" />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Filterable</h3>
                        </div>
                      </li>
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img src={`/assets/images/icon/about-icon3.png`} alt="easy-to-use" />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Saves time</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="about-style">
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img src={`/assets/images/icon/about-icon2.png`} alt="Awasome-Design" />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Reduces Stress</h3>
                        </div>
                      </li>
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img src={`/assets/images/icon/about-icon4.png`} alt="SEO-Friendly" />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Result Driven</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-medium-none">
            <div className="about-right">
              <div className="about-phone">
                <img src={`/assets/images/tinder-app.png`} width="360" height="360" className="img-fluid" alt="aboutus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
