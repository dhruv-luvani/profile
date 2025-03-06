import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import reactSvg from '../assets/svg/React.svg'
import awsSvg from '../assets/svg/AWS.svg'
import gitLabSvg from '../assets/svg/gitlab.svg'
import firebaseSvg from '../assets/svg/Firebase.svg'
import nextSvg from '../assets/svg/Next.svg'
import nodeJsSvg from '../assets/svg/NodeJS.svg'
import gitSvg from '../assets/svg/git.svg'
import githubSvg from '../assets/svg/github.svg'
import reduxToolkitPng from '../assets/images/redux-toolkit.png'
import javascriptSvg from '../assets/svg/javascript.svg'
import typescriptSvg from '../assets/svg/typescript.svg'
import bootstrapSvg from '../assets/svg/bootstrap.svg'
import tailwindCssPng from '../assets/images/tailwind-css.png'
import htmlSvg from '../assets/svg/html.svg'
import { ReactTyped } from "react-typed";
import bgProfileImg from '../assets/images/profile_42.png'
import ClickSpark from '../components/widgets/ClickSpark';
import SpotlightCard from '../components/widgets/SpotlightCard';

export default function HomePage() {
  return (<div className='min-h-screen bg-gray-800 text-white'>
    {/* <Header /> */}

    <div className=" bg-gradient-to-r from-blue-500 to-purple-800 text-white">
      <ClickSpark>
        <div
          className="container h-[500px] flex flex-col justify-center bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url(${bgProfileImg})`,
            backgroundSize: "auto 85%"
          }}>
          <h1 className="text-5xl font-bold">Hello, I'm Dhruv Luvani</h1>
          <ReactTyped
            strings={[
              "React Js Developer",
              "Next Js Developer",
            ]}
            typeSpeed={75}
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

    <div id='skillsSection' className="container bg-gray-800 p-6 mt-7">
      <h2 className="border-b border-gray-400 pb-2 mb-4">My Skills</h2>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: 'slide',
          drag: 'free',
          perPage: 6,
          pagination: false,
          arrows: false,
          gap: "20px",
          autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={reactSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>React Js</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={nextSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>Next Js</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={awsSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>AWS amplify</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={firebaseSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>Firebase</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={gitSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>Git</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={githubSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>GitHub</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={gitLabSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>Gitlab</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={reduxToolkitPng} alt="Image 2" />
          <h3 className='text-center mt-2'>Redux Toolkit</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={javascriptSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>Javascript</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={typescriptSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>Typescript</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-[26px] bg-white' src={bootstrapSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>Bootstrap CSS</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={tailwindCssPng} alt="Image 2" />
          <h3 className='text-center mt-2'>Tailwind CSS</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={htmlSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>HTML</h3>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto rounded-xl' src={nodeJsSvg} alt="Image 2" />
          <h3 className='text-center mt-2'>Node Js</h3>
        </SplideSlide>
      </Splide>
    </div>

    <div id='projectSection' className="container bg-gray-800 p-6 mt-10">
      <h2 className="border-b border-gray-400 pb-2 mb-4">Projects</h2>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: 'slide',
          perPage: 3,
          perMove:1,
          snap: true,
          pagination: false,
          arrows: true,
          gap: "20px",
        }}
      >
        <SplideSlide>
          <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold">Explain Life</h3>
            <p className="text-gray-200 text-lg">(skills: ReactJs, tailwind css, redux-toolkit)</p>
            <p className="text-gray-300 mt-2">Life insurance policy recommendation agent website with coverage calculation with NodeJS
              backend (Admin panel & User panel)</p>
          </SpotlightCard>
        </SplideSlide>
        <SplideSlide>
          <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold">Fitness Administration Portal</h3>
            <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap, metronic template)</p>
            <p className="text-gray-300 mt-2">Provide a fitness plan that includes workout videos, personalized calorie tracking, and
              dietary recommendations.</p>
          </SpotlightCard>
        </SplideSlide>
        <SplideSlide>
          <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold">Skyline Technology Administration Portal</h3>
            <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap, metronic-template)</p>
            <p className="text-gray-300 mt-2">Create an integrated administration portal for efficient client, engineer, and Sarine machine
              Management, facilitating seamless coordination of diamond repair services and timely
              resolution of upcoming complaints.</p>
          </SpotlightCard>
        </SplideSlide>
        <SplideSlide>
          <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold">Read-it-out</h3>
            <p className="text-gray-200 text-lg">(skills: ReactJs, tailwind css, redux-toolkit)</p>
            <p className="text-gray-300 mt-2">A government library website offering a wide range of books in various formats, ensuring accessibility and availability to users.</p>
          </SpotlightCard>
        </SplideSlide>
        <SplideSlide>
          <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold">3SquaresApp</h3>
            <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap)</p>
            <p className="text-gray-300 mt-2">Food delivery website by connecting users with a diverse selection of professional restaurants and providing seamless delivery services. (with User Site, Admin Panel, Corporate Panel and Provider Panel)</p>
          </SpotlightCard>
        </SplideSlide>
        <SplideSlide>
          <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold">Special Days Administration Portal</h3>
            <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap, metronic-template)</p>
            <p className="text-gray-300 mt-2">Website dedicated to commemorating special occasions, offering advanced reminder functionalities and personalized party invitations to ensure memorable and organized celebrations.</p>
          </SpotlightCard>
        </SplideSlide>
        <SplideSlide>
          <SpotlightCard className="custom-spotlight-card h-full" spotlightColor="rgba(0, 229, 255, 0.2)">
            <h3 className="text-xl font-semibold">Unicorn-Ui</h3>
            <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap, metronic-template)</p>
            <p className="text-gray-300 mt-2">Collection of premium UI design templates encompassing diverse topics, providing a paid facility for professionals seeking high-quality. (User panel & Admin Panel)</p>
          </SpotlightCard>
        </SplideSlide>
      </Splide>
    </div>

    <footer className="py-7 text-gray-500 text-center">
      <p>&copy; 2025 Dhruv Luvani. All rights reserved.</p>
    </footer>
  </div>)
}
