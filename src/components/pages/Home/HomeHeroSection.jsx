import React from 'react'
import ClickSpark from '../../widgets/ClickSpark'
import { ReactTyped } from "react-typed";
import bgProfileImg from '../../../assets/images/profile_42.png'

export default function HomeHeroSection() {
  return (
    <div className="bg-gradient-to-br from-green-900 via-transparent to-cyan-700 bg-200 animate-bg-scroll text-white ">
      <ClickSpark>
        <div
          className="container h-[500px] flex flex-col justify-center bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${bgProfileImg})`,
            backgroundSize: "auto 85%"
          }}>
          <h1 className="text-5xl font-bold drop-shadow-black">Hello, I'm Dhruv Luvani</h1>
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
            <input className='text-2xl italic bg-transparent outline-none placeholder:text-white text-slate-300 mt-2 cursor-default' type="text" disabled />
          </ReactTyped>
        </div>
      </ClickSpark>
    </div>
  )
}
