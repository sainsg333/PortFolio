"use client";
import { motion } from "framer-motion";
import React from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'Full Stack',
    title: 'Project 1',
    Description: "Built a real-time chat app using the MERN stack and Socket.io. The backend manages user authentication and message storage, while the React frontend handles the chat interface. Socket.io enables real-time messaging between users.",
    stack: [
      { name: 'ReactJs' },
      { name: 'NodeJs' },
      { name: 'ExpressJs' },
      { name: 'MongoDB' },
      { name: 'SocketIO' },
    ],
    image: '/assets/work/1.png',
    live: "https://example.com",
    github: "https://github.com/sainsg333/chat_app_mern",
  },
  {
    num: '02',
    category: 'Android',
    title: 'Project 2',
    Description: "The weather app you developed is an Android application built using Kotlin that provides real-time weather information by fetching data from a weather API. The app likely includes features like current weather conditions, forecasts, and location-based weather updates, making it user-friendly and efficient for users to check the weather on the go.",
    stack: [
      { name: 'Xml' },
      { name: 'Kotlin' },
      { name: 'Android Studio' },
    ],
    image: '/assets/work/2.png',
    live: "https://example.com",
    github: "https://github.com/sainsg333/climate",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Project 3',
    Description: "The calculator is a simple web application built using JavaScript, HTML, and CSS. It provides basic arithmetic operations, allowing users to perform addition, subtraction, multiplication, and division. The design is responsive and visually appealing, enhancing the overall user experience.",
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Javascript' },
    ],
    image: '/assets/work/3.jpg',
    live: "https://example.com",
    github: "https://github.com/sainsg333/Calsy",
  },
  {
    num: '04',
    category: 'Deep Learning',
    title: 'Project 4',
    Description: "I developed a machine learning application titled An intelligent navigation and object detection system for the visually impaired. This system uses real-time image processing and AI to identify objects and provide navigation assistance, enhancing the mobility and independence of visually impaired users.",
    stack: [
      { name: 'Machine learning' },
      { name: 'Deep learning' },
      { name: 'YOLO V8' },
    ],
    image: '/assets/work/4.jpg',
    live: "https://example.com",
    github: "https://github.com/sainsg333/Deep_learning_visually_impaired",
  },
];

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[60vh] flex flex-col  justify-center py-10 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-2 gap-[50px] ">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-[20px] bg-pink-50/20 p-6 rounded-lg w-full max-w-[800px] mx-auto">
              <div className="relative w-full h-[300px]">
                <Image src={project.image} fill className="object-cover rounded-lg" alt="no image" />
              </div>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.Description}</p>
              <ul className="flex flex-wrap gap-4  md:flex xl:flex">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent ">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
