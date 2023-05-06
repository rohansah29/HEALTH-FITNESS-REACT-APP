import React from "react";
import "../styles/footer.css";
import logo from "../assets/img/Health___Fitness.png";

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <footer className="footer" data-aos-duration="1100" data-aos="fade-up">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt="" />
              </div>
              <h2>Health & Fitness</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque fugit nam mollitia nulla soluta.
            </p>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Company</h4>

            <ul className="footer__links">
              <li>
                <a href="#">Our Programs</a>
              </li>
              <li>
                <a href="#">Meal Plans</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Healthy Living</h4>

            <ul className="footer__links">
              <li>
                <a href="#">Fitness</a>
              </li>
              <li>
                <a href="#">Nutrition</a>
              </li>
              <li>
                <a href="#">Experts</a>
              </li>
            </ul>
          </div>
          <div className="footer__box">
            <h4 className="footer__title">Quick Links</h4>

            <ul className="footer__links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright - {year} developed by Rohan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
