import React from 'react'
import "../styles/exercise.css";
import lunges from "../assets/img/lunges.png"
import yoga from "../assets/img/yoga-pose.png"
import ex from "../assets/img/extended.png"

const Exercise = () => {
  return <section>
    <div className="container exercise__top">
        <div className="exercise__top">
            <h2 className="section__title">Benefits of <span className="highlights">Exersice</span></h2>
            <p>Exercise is essential for maintaining a healthy body and mind,<br/> and can improve quality of life in numerous ways.</p>
        </div>
        <div className="exercise__wrapper">
            <div className="exercise__item" data-aos-duration="1500" data-aos="zoom-in">
                <span className="exercise__icon"><img src={lunges} alt="err" /></span>

                <div className="exercise__content">
                    <h4>Healthy Life</h4>
                    <p>Living a healthy life involves taking care of both your physical and mental health.</p>
                </div>
            </div>

            <div className="exercise__item" data-aos-duration="1500" data-aos="zoom-in">
                <span className="exercise__icon"><img src={yoga} alt="err" /></span>

                <div className="exercise__content">
                    <h4>Increased Flexibility</h4>
                    <p>Increased flexibility is an important aspect of physical fitness that can offer a range of benefits</p>
                </div>
            </div>


            <div className="exercise__item" data-aos-duration="1500" data-aos="zoom-in">
                <span className="exercise__icon"><img src={ex} alt="err" /></span>

                <div className="exercise__content">
                    <h4>Reducing Blood Pressure</h4>
                    <p>Regular physical activity can help lower blood pressure and improve overall cardiovascular health.</p>
                </div>
            </div>
        </div>
    </div>
  </section>
}

export default Exercise
