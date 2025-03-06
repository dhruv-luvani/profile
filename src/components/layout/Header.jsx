import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (id) => {
    const idName = String(id);
    const value = document.getElementById(idName).offsetTop;
    window.scrollTo(0, value - 80);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`fixed top-3 right-0 left-0 z-50 bg-white text-black shadow-md px-10 py-3 flex justify-between items-center mx-auto ${isScrolled ? 'max-w-[1500px] w-full rounded-full' : 'w-screen rounded-none max-w-full'} duration-500`}>
      <ul className="flex justify-around w-full">
        <li><div className="hover:text-blue-500 cursor-pointer font-semibold duration-300 hover:scale-110" onClick={() => handleScroll("skillsSection")}>Skills</div></li>
        <li><div className="hover:text-blue-500 cursor-pointer font-semibold duration-300 hover:scale-110" onClick={() => handleScroll("projectSection")}>Project</div></li>
        <li><div className="hover:text-blue-500 cursor-pointer font-semibold duration-300 hover:scale-110" onClick={() => handleScroll("contactSection")}>Contact</div></li>
      </ul>
    </header>
  )
}
