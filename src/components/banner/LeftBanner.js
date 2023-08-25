import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.","React Aficionado."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor px-2 capitalize">Shubham </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span className='text-white'>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a self-driven React web developer and coder with a passion for solving complex real-world problems. A quick starter with a curious mind, I thrive on challenges and enjoy diving into intricate programming tasks..
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner