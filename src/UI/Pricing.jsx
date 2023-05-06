import React from 'react'
import "../styles/pricing.css"

const Pricing = () => {
  return <section id='membership'>
    <div className="container">
    <div className="pricing__top">
        <h2 className="section__title">Premium <span className="highlights">Subscription</span> plan</h2>
        <p>Health & Fitness is a popular nutrition and exercise tracking app that offers a premium subscription service.<br/>The premium version includes advanced nutrient tracking, customized goals and advice, and exclusive content.</p>
    </div>

    <div className="pricing__wrapper">
        <div className="pricing__item" data-aos-duration="1500" data-aos="fade-up">
            <div className="pricing__card-top">
                <h2 className=''>Regular Member</h2>
                <h2 className="pricing">$9.99 <span>/month</span></h2>
            </div>

            <div className="services">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the App</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Nutritionist</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Demo online classes</li>
                </ul>

                <button className='register__btn'>Buy Now</button>
            </div>
        </div>

        <div className="pricing__item pricing__item-02" data-aos-duration="1500" data-aos="fade-up">
            <div className="pricing__card-top">
                <h2 className=''>Gold Member</h2>
                <h2 className="pricing">$79.99 <span>/year</span></h2>
            </div>

            <div className="services">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the App</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Nutritionist</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Free online classes</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Free access to our gym centers</li>
                </ul>

                <button className='register__btn'>Buy Now</button>
            </div>
        </div>

        <div className="pricing__item" data-aos-duration="1500" data-aos="fade-up">
            <div className="pricing__card-top">
                <h2 className=''>Standard Member</h2>
                <h2 className="pricing">$49.99 <span>/year</span></h2>
            </div>

            <div className="services">
                <ul>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Unlimited access to the App</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Customer support</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal trainer</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Nutritionist</li>
                    <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Free online classes</li>
                </ul>

                <button className='register__btn'>Buy Now</button>
            </div>
        </div>
    </div>
    </div>
    
  </section>
}

export default Pricing
