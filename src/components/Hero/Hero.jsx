import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi' 
import CountUp from 'react-countup'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className='paddings innerWidth flexCenter hero-container '>
            
            {/* left side */}

            <div className="flexColStart hero-left">
               <div className="hero-title">
                <div className="orange-circle"></div>

                <h1>
                    Discover <br/> Most Suitable <br/> Property
                </h1>
               </div>

               <div className="flexColStart hero-des">
                <span>Find a varirty of properties that suit you very easily</span>
                <span>Forgot all difficulties in finding a recidence for you</span>
               </div>

               <div className="flexCenter search-bar">
                <HiLocationMarker color="var(--blue)" size={25} />
                <input type="text" />
                <button className='button'>Search</button>
               </div>
               <div className="flexStart stats">
                    <div className="flexColStart stat">
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                        </span>
                        <span>+</span>
                    </div>
               </div>

            </div>

            {/* right side */}

            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero