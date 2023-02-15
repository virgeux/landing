import React, { useEffect } from "react";

const Footer = () => {
  return (
    <div>
      <section className="p-0">
        <div className="container-fluid">
          <div className="bottom-section">
            <div className="row">
              <div className="col-12 p-0">
                <div className="address-bar">
                  <div>
                    <ul className="footer-style">
                      <li>
                        <div className="footer-icon">
                          <img src={`/assets/images/icon/fotter-email.png`} alt="fotter-email" />
                        </div>
                        <div className="footer-address">
                          <a href="mailto:inquiries@upwife.ai">inquiries@upwife.ai</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="copyright-section index-footer">
        <p>2023 &copy; Upwife, LLC.</p>
      </div>

      <div className="tap-top">
        <div>
          <i className="fa fa-angle-double-up"></i>
        </div>
      </div>
      <div id="fb-root"></div>
      {/*Your customer chat code*/}
      <div
        className="fb-customerchat"
        page_id="2123438804574660"
        theme_color="#c99aff"
        logged_in_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?"
        logged_out_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?"
      ></div>
    </div>
  );
};

export default Footer;
