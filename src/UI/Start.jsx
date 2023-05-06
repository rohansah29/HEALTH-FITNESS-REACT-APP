import React from 'react'
import trainer from "../assets/img/trainer.png"
import "../styles/start.css";

const Start = () => {
  return <section>
    <div className="container">
        <div className="start__wrapper">
            <div className="start__img">
                <img src={trainer} alt="err" data-aos-duration="1500" data-aos="fade-left" />
            </div>

            <div className="start__content" data-aos-duration="1100" data-aos="fade-right">
                <h2 className="section__title">Ready to make <span className="highlights">Change?</span></h2>
                <p>Remember, it's important to start slowly and gradually increase the intensity and duration of your exercise routine. Consult us as your healthcare provider before starting any new exercise program. Good luck, and enjoy the journey with us towards a healthier you!</p>
                <button className="register__btn">Get Started</button>
            </div>
        </div>
    </div>
  </section>
}

export default Start
