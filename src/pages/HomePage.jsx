import React from 'react'
import Header from '../components/layout/Header'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import reactSvg from '../assets/svg/React.svg'
import awsSvg from '../assets/svg/AWS.svg'
import gitLabSvg from '../assets/svg/gitlab.svg'
import firebaseSvg from '../assets/svg/Firebase.svg'
import nextSvg from '../assets/svg/Next.svg'
import nodeJsSvg from '../assets/svg/NodeJS.svg'
export default function HomePage() {
  return (<div className='min-h-screen bg-gray-800 text-white'>
    <Header />

    <div className="h-[500px] flex flex-col justify-center bg-gradient-to-r from-blue-500 to-purple-800 text-white">
      <div className="container">
        <h1 className="text-4xl font-bold">Hello, I'm Dhruv Luvani</h1>
        <p className="text-xl text-slate-300 mt-2">React.js | Next.js Developer</p>
      </div>
    </div>

    <div id='skillsSection' className="container bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">My Skills</h2>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: 'loop',
          drag: 'free',
          perPage: 5,
          pagination: false,
          arrows: false,
          autoScroll: {
            speed: 1,
            pauseOnHover: false,
            pauseOnFocus: false,
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={reactSvg} alt="Image 2" />
          <div className='text-center'>React Js</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={awsSvg} alt="Image 2" />
          <div className='text-center'>AWS amplify</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={firebaseSvg} alt="Image 2" />
          <div className='text-center'>Firebase</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={nextSvg} alt="Image 2" />
          <div className='text-center'>Next Js</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={gitLabSvg} alt="Image 2" />
          <div className='text-center'>Gitlab</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={nodeJsSvg} alt="Image 2" />
          <div className='text-center'>Node Js (Learning)</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={nodeJsSvg} alt="Image 2" />
          <div className='text-center'>Node Js (Learning)</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={nodeJsSvg} alt="Image 2" />
          <div className='text-center'>Node Js (Learning)</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={nodeJsSvg} alt="Image 2" />
          <div className='text-center'>Node Js (Learning)</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={nodeJsSvg} alt="Image 2" />
          <div className='text-center'>Node Js (Learning)</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={nodeJsSvg} alt="Image 2" />
          <div className='text-center'>Node Js (Learning)</div>
        </SplideSlide>
        <SplideSlide>
          <img className='h-[150px] mx-auto bg-white/25 rounded-2xl' src={nodeJsSvg} alt="Image 2" />
          <div className='text-center'>Node Js (Learning)</div>
        </SplideSlide>
      </Splide>
      {/* <ul className="flex flex-wrap gap-[10px] text-center justify-center">
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">ReactJs</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">Next.Js</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">Redux-Toolkit</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">Javascript</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">TypeScript</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">Bootstrap CSS</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">Tailwind CSS</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">HTML</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">GitLab</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">Github</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">AWS amplify</li>
        <li className="bg-gray-700 p-3 rounded-lg w-[45%]">NodeJs (Learning)</li>
      </ul> */}
    </div>

    <div id='experienceSection' className="container bg-gray-800 p-6 mt-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Work Experience</h2>
      <div className="space-y-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">ReactJs | NextJs Developer at Semicolon Solution</h3>
          <p className="text-gray-400 text-sm mt-2">Aug 2022 - Present</p>
        </div>
      </div>
    </div>

    <div id='projectSection' className="container bg-gray-800 p-6 mt-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
      <div className="space-y-4">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Explain Life</h3>
          <p className="text-gray-200 text-lg">(skills: ReactJs, tailwind css, redux-toolkit)</p>
          <p className="text-gray-300 mt-2">Life insurance policy recommendation agent website with coverage calculation with NodeJS
            backend (Admin panel & User panel)</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Fitness Administration Portal</h3>
          <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap, metronic template)</p>
          <p className="text-gray-300 mt-2">Provide a fitness plan that includes workout videos, personalized calorie tracking, and
            dietary recommendations.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Skyline Technology Administration Portal</h3>
          <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap, metronic-template)</p>
          <p className="text-gray-300 mt-2">Create an integrated administration portal for efficient client, engineer, and Sarine machine
            Management, facilitating seamless coordination of diamond repair services and timely
            resolution of upcoming complaints.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Read-it-out</h3>
          <p className="text-gray-200 text-lg">(skills: ReactJs, tailwind css, redux-toolkit)</p>
          <p className="text-gray-300 mt-2">A government library website offering a wide range of books in various formats, ensuring accessibility and availability to users.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">3SquaresApp</h3>
          <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap)</p>
          <p className="text-gray-300 mt-2">Food delivery website by connecting users with a diverse selection of professional restaurants and providing seamless delivery services. (with User Site, Admin Panel, Corporate Panel and Provider Panel)</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Special Days Administration Portal</h3>
          <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap, metronic-template)</p>
          <p className="text-gray-300 mt-2">Website dedicated to commemorating special occasions, offering advanced reminder functionalities and personalized party invitations to ensure memorable and organized celebrations.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Unicorn-Ui</h3>
          <p className="text-gray-200 text-lg">(skills: reactJs, bootstrap, metronic-template)</p>
          <p className="text-gray-300 mt-2">Collection of premium UI design templates encompassing diverse topics, providing a paid facility for professionals seeking high-quality. (User panel & Admin Panel)</p>
        </div>
      </div>
    </div>

    <div id='contactSection' className="container bg-gray-800 p-6 mt-10 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Contact Me</h2>
      <p>Email: <a href="mailto:johndoe@example.com" className="text-blue-400">johndoe@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/johndoe" className="text-blue-400">linkedin.com/in/johndoe</a></p>
    </div>

    <footer className="mt-10 text-gray-500">
      <p>&copy; 2025 John Doe. All rights reserved.</p>
    </footer>
  </div>)
}
