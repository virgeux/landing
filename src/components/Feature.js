import React, { useEffect } from "react";

const Feature = () => {
  const sectionClass = {
    backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/feature-bg.png)`
  };

  return (
    <section id="feature" className="feature" style={sectionClass}>
      <div className="feature-decor">
        <div className="feature-circle1">
          <img src={`/assets/images/feature2.png`} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="feature-phone">
            <img src={`/assets/images/upwife-logo-screenshot-angle-rt.png`} className="img-fluid" alt="" />
          </div>
          <div className="offset-lg-4 col-lg-8">
            <div className="row">
              <div className="col-sm-12 mrgn-md-top">
                <h2 className="title">
                  features of<span> Virgeux</span>
                </h2>
              </div>
              <div className="col-12 col-md-6">
                <ul className="feature-style">
                  <li>
                    <div className="feature-icon">
                      <img src={`/assets/images/icon/1.png`} alt="icon" />
                    </div>
                    <div className="feature-subtitle">
                      <h3>user friendly</h3>
                    </div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <img src={`/assets/images/icon/3.png`} alt="icon" />
                    </div>
                    <div className="feature-subtitle">
                      <h3>high performance</h3>
                    </div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <img src={`/assets/images/icon/5.png`} alt="icon" />
                    </div>
                    <div className="feature-subtitle">
                      <h3>unlimited features</h3>
                    </div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 sm-m-top">
                <ul className="feature-style">
                  <li>
                    <div className="feature-icon">
                      <img src={`/assets/images/icon/2.png`} alt="icon" />
                    </div>
                    <div className="feature-subtitle">
                      <h3>quick update</h3>
                    </div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <img src={`/assets/images/icon/4.png`} alt="icon" />
                    </div>
                    <div className="feature-subtitle">
                      <h3>100% secure</h3>
                    </div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="feature-icon">
                      <img src={`/assets/images/icon/6.png`} alt="icon" />
                    </div>
                    <div className="feature-subtitle">
                      <h3>24 x 7 support</h3>
                    </div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.{" "}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
