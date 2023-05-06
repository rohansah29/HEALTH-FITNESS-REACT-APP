import React from "react";
import "../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <>
      <section id="programs">
        <div className="container sliders">
          <h2 className="section__title"><span className="highlights">Full-Length </span>Workout Programs</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img
                    src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-10651-fb-booty-round-3-4-weeks-of-fun-and-intense-lower-body-training-b234.jpg"
                    alt="err"
                  />
                </div>
                <h4>42 Min/Day • 4 Weeks</h4>
                <p>
                  FB Booty Round 3: 4 Weeks of Fun and Intense Lower Body
                  Training Build Strength in Your Glutes, Quads, and Hamstrings
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img
                    src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-10355-fb-jumpstart-4-weeks-of-lifting-hiit-cardio-and-stretching-b034.jpg"
                    alt="err"
                  />
                </div>
                <h4>34 Min/Day • 4 Weeks</h4>
                <p>
                  FB Jumpstart - 4 Weeks of Lifting, HIIT, Cardio,<br /> and
                  Stretching Progressive Workout Length and Intensity.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img
                    src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-10721-fb-abs-round-3-4-weeks-of-intense-core-training-95d1.jpg"
                    alt="err"
                  />
                </div>
                <h4>34 Min/Day • 4 Weeks</h4>
                <p>
                  FB Abs Round 3: 4 Weeks of Intense Core Training Intensive
                  Core Program for Strength and Mobility.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img
                    src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-10194-4-week-fb-strong-round-3-build-muscle-increase-strength-and-feel-great-b642.jpg"
                    alt="err"
                  />
                </div>
                <h4>40 Min/Day • 4 Weeks</h4>
                <p>
                  4 Week FB Strong: Round 3 - Build Muscle, Increase Strength,
                  and Feel Great You Choose: 35 Minutes or 50 Minutes a Day
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
