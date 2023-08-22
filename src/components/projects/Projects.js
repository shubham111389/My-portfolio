import React from 'react'
import Title from '../layouts/Title'
import projectOne from "../../assets/images/projects/projectOne.jpg";
import ProjectsCard from './ProjectsCard';
import projectThree from "../../assets/images/projects/projectThree.jpeg"
import  projectTwo from "../../assets/images/projects/projectTwo.jpg"

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MY-YOUTUBE CLONE 👨‍💻"
          des="📺 Welcome to my React-powered YouTube clone! Discover content with ease through advanced search , engage in live streaming discussions with real-time comments , and immerse yourself in a visually stunning UI . Join me in revolutionizing online entertainment! 🚀🎉🎥 "
          src={projectOne}
        />
        
        <ProjectsCard
          title="LiveCric🏏- extension"
          des=" 🏏 Introducing the LiveCric Chrome Extension powered by React! Stay updated with live match scores in a flash . Never miss a moment of the game as you easily track the scores right from your browser. Stay in the loop with the excitement of cricket matches! 🚀🏆📊"
          src={projectThree}
        />
        <ProjectsCard
          title="Food_haven-Web_app"
          des=" 📺 Welcome to our React-powered FOOD_Haven Web-app Discover your favourite restaurnat with ease through advanced search ,  Add Favourate dishes to your cart  and login  hassle-free.,Enjoy a yummy design  while you explore a world of flavors! 🚀👨‍🍳🎉"
          src={projectTwo}
        />
        <ProjectsCard
          title="MEMSET - Web Game"
          des=" 💻Memset is a fun and engaging game that challenges your memory and cognitive abilities. In the game, you'll be presented with a grid of cards, each with a hidden picture or symbol on it. Your goal is to uncover pairs of matching cards as quickly as possible, using your memory and concentration skills to remember where each card is located. 🃏🔍"
          src={projectThree}
        />
        <ProjectsCard
          title="Basic bank-system 💻" 
          des=" 💰 Welcome to the React-powered Basic Banking System ! Seamlessly manage your money with this Firebase-integrated app. Send and track transactions with ease, while enjoying a sleek and user-friendly UI. Experience modern banking made simple! 🚀💸📈"
          src={projectOne}
        />
        <ProjectsCard
          title="Portfolio 🚀"
          des="🎨 Explore my Portfolio Showcase ! Crafted with care using React and personalized design, it's a hub of my creative journey. Discover my projects, skills, and experiences with an elegant and intuitive UI. Join me in sharing my passion and achievements! 🚀🌟👩‍💻"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects