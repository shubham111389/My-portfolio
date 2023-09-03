import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import Project_one from'../../assets/images/projects/project1.jpg';
import Project_two from'../../assets/images/projects/project2.jpg';
import Project_three from'../../assets/images/projects/project3.jpg';
import Project_four from'../../assets/images/projects/project4.jpg';
import Project_five from'../../assets/images/projects/project5.jpg';
import Project_six from'../../assets/images/projects/project6.jpg';



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
          title="MY-YOUTUBE CLONE 🚀 "
          des="📺 Welcome to my React-powered YouTube clone! Discover content with ease through advanced search , engage in live streaming discussions with real-time comments , and immerse yourself in a visually stunning UI . Join me in revolutionizing online entertainment! 🚀🎉🎥 "
          src={Project_one}
          github_url={"https://github.com/shubham111389/MyYouTube-main"}
          live_url={""}
        />
        
        <ProjectsCard
          title="LiveCric- extension🚀"
          des=" 🏏 Introducing the LiveCric Chrome Extension powered by React! Stay updated with live match scores in a flash . Never miss a moment of the game as you easily track the scores right from your browser. Stay in the loop with the excitement of cricket matches! 🚀🏆📊"
          src={Project_two}
          github_url={"https://github.com/shubham111389/LiveCric_Notify-chrome_extension"}

        />
        <ProjectsCard
          title="Food_haven-Web app"
          des=" 📺 Welcome to our React-powered FOOD_Haven Web-app Discover your favourite restaurnat with ease through advanced search ,  Add Favourate dishes to your cart  and login  hassle-free.,Enjoy a yummy design  while you explore a world of flavors! 🚀👨‍🍳🎉"
          src={Project_three}
          github_url={"https://github.com/shubham111389/Food_haven"}
          live_url={"https://food-haven1.vercel.app/"}

        />
        <ProjectsCard
          title="MEMSET - Web Game🚀"
          des="💻Memset offers an enjoyable challenge to memory and cognition, enhancing brain exercise. The game presents a card grid with hidden symbols, fostering memory retention and mental stimulation.Play the game and give ur valuable feedback🚀🔍"

          src={Project_four}
          github_url={"https://github.com/shubham111389/Memset"}
          live_url={"https://shubham111389.github.io/Memset/"}

        />
        <ProjectsCard
          title="Basic bank-system 🚀" 
          des=" 💰 Welcome to the React-powered Basic Banking System ! Seamlessly manage your money with this Firebase-integrated app. Send and track transactions with ease, while enjoying a sleek and user-friendly UI. Experience modern banking made simple! 🚀💸📈"
          src={Project_five}
          github_url={"https://github.com/shubham111389/banking-app-spark"}
          live_url={"https://banking-app-spark.vercel.app/"}

        />
        <ProjectsCard
          title="Portfolio 🚀"
          des="🎨 Explore my Portfolio Showcase ! Crafted with care using React and personalized design, it's a hub of my creative journey. Discover my projects, skills, and experiences with an elegant and intuitive UI. Join me in sharing my passion and achievements! 🚀🌟👩‍💻"
          src={Project_six}
          github_url={"https://github.com/shubham111389/My-portfolio"}
          live_url={""}

        />
      </div>
    </section>
  );
}

export default Projects
