import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023</p>
          <h2 className="text-4xl font-bold">Achievement</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Letter of Recommendation "
            subTitle="Spark Foundation "
            result=" verified At "
            des="Successfully designed and implemented a Project on the Banking System during the web development internship, showcasing strong problem-solving skills , creativity  and Received Recommendation from the Spark Foundation team for delivering a high-quality large-scale project that exceeded expectations "
          />
          <ResumeCard
            title="Postman API Fundamentals Students Expert-Badges"
            subTitle="Postman"
            result="Verified At"
            des="Achieved the esteemed title of 'API Student Expert,' a recognition earned through dedication and in-depth understanding of API technologies. This achievement signifies my proficiency in leveraging APIs for innovative solutions and showcases my commitment to advancing my skills in modern software development practices."
          />
         
        </div>
      
      
      </div>
    </motion.div>
  );
};

export default Achievement;
