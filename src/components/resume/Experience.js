import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 </p>
          <h2 className="text-4xl font-bold">Interenship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Web Developer & Trainer"
            subTitle="PHN Technology - (Apr-jun)"
            result="Verified At"
            des="Engaged in immersive web development internship, completing 6-10 front-end projects and a substantial large-scale project. Proficiently employed Tailwind CSS and Bootstrap frameworks to create responsive and visually appealing interfaces."
          />
          <ResumeCard
            title="Web Developer "
            subTitle="The Spark Foundation - (May-jun)"
            result="Verified At"
            des="Participated in an intensive web development internship, crafting 6-10 front-end projects and executing a significant large-scale initiative. Skillfully employed frameworks like Tailwind CSS and Bootstrap to fashion dynamic, responsive, and visually captivating user interfaces. "
          />
          
          <ResumeCard
            title="API Fundamentals-Apprenticeship"
            subTitle="Postman - (jun)"
            result="Verified At"
            des="Completed a Apprenticeship on 'API Fundamentals and Application Receipt,'mastering the significance of APIs in contemporary software development. Proficiently navigated Postman for API interactions, encompassing GET, POST, PATCH, and DELETE requests, query parameters, headers, and response codes. Acquired skills in basic scripting, API Key Authorization, and seamless integration of APIs into applications."
          />
        </div>
      
      
      </div>
    </motion.div>
  );
};

export default Experience;
