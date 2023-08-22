import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Btech- Electronics and Telecommunication"
            subTitle="University of Dr.Babasaheb Ambedkar Technological University  ( 2021 - Present )"
            result="CGPA : 8.1 / 10"
            des="Currently completing the final year of my B.Tech in Electronics and Telecommunication. Proficient in a wide range of subjects including communication systems, electronics design, and signal processing. Actively seeking opportunities to apply theoretical knowledge to real-world projects.."
          />
          <ResumeCard
            title="Diploma- Electronics and Telecommunication "
            subTitle="Goverement Polytechnic College,Aurangabad ( 2018 - 2021 )"
            result="Percentage : 84.20 /100 "
            des="Diploma holder in Electronics and Telecommunication, achieving a commendable 84.20% overall. Proficient in electronic circuits, communication technologies, and practical troubleshooting. Eager to leverage my skills and knowledge gained through the program in professional roles."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="New High School , Chikalthana (2016 - 2018)"
            result="Percentage : 94.20 / 100"
            des="Secondary School Graduate with an impressive 94.20% from the SSC board. A strong academic foundation combined with a commitment to excellence in various subjects. Ready to apply my diligent work ethic and passion for learning to new educational and professional challenges."
          />
        </div>
    
      {/* part Two */}

      </div>
    </motion.div>
  );
}

export default Education