import React, { useState } from 'react'
import ClickSpark from '../../widgets/ClickSpark'
import { ReactTyped } from "react-typed";
import bgProfileImg from '../../../assets/images/profile_42.png'
import BlurText from '../../widgets/BlurText';

export default function HomeHeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false)
  return (
    <div className="bg-gradient-to-br from-green-900 via-transparent to-cyan-700 bg-200 animate-bg-scroll text-white ">
      <ClickSpark>
        <div
          className="container h-[500px] xs:h-[400px] flex flex-col justify-center bg-right-bottom xs:bg-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${bgProfileImg})`,
            backgroundSize: "auto 85%"
          }}>
          <BlurText
            text="Hello, I'm Dhruv Luvani"
            delay={100}
            animateBy="letters"
            direction="top"
            className="text-5xl xs:text-2xl font-bold drop-shadow-black"
            onAnimationComplete={() => setAnimationComplete(true)}
          />
          {animationComplete ? (
            <ReactTyped
              strings={[
                "React Js Developer",
                "Next Js Developer",
              ]}
              typeSpeed={100}
              backSpeed={30}
              backDelay={1000}
              attr="placeholder"
              loop
            >
              <input className='text-2xl xs:text-xl italic bg-transparent outline-none placeholder:text-white text-slate-300 mt-2 cursor-default' type="text" disabled />
            </ReactTyped>
          ) : (<div className='h-10' />)}
        </div>
      </ClickSpark>
    </div>
  )
}
