"use client";
import { motion } from "framer-motion";
import React from "react";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";

const projects = [
  {
    id: 1,
    num: "01",
    category: "Full Stack",
    title: "Chat Application",
    Description:
      "Built a real-time chat app using the MERN stack and Socket.io. The backend handles user authentication and message persistence in MongoDB, while the React frontend provides a dynamic chat interface. Socket.io ensures seamless real-time communication between users.",
    linker: "/projects/1",
    stack: [
      { name: "ReactJs" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "MongoDB" },
      { name: "SocketIO" },
    ],
  },
  {
    id: 2,
    num: "02",
    category: "Full Stack",
    title: "Lead Management System",
    Description:
      "Developed a lead management system using NextJs, NodeJs, and ExpressJs, enhanced with Google Two-Factor Authentication. The app allows businesses to track leads efficiently, with a secure backend and a responsive frontend optimized for user interaction.",
    linker: "/projects/2",
    stack: [
      { name: "NextJs" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "Google 2FA" },
    ],
  },
  {
    id: 3,
    num: "03",
    category: "AI/ML & Security",
    title: "Security Detection System",
    Description:
      "Created a security detection system using YOLOv8 with Region of Interest (ROI) functionality. The system identifies intruders in real-time and sends alerts via email and SMS, including intruder photos, enhancing security monitoring capabilities.",
    linker: "/projects/3",
    stack: [
      { name: "YOLOv8" },
      { name: "Python" },
      { name: "SMTP" },
      { name: "Twilio" },
    ],
  },
  {
    id: 4,
    num: "04",
    category: "Deep Learning",
    title: "Mineral Grain Recognition",
    Description:
      "Developed a CNN-driven application for mineral grain recognition in water sand samples. The system uses deep learning to classify grains accurately, providing valuable insights for geological analysis with a robust image processing pipeline.",
    linker: "/projects/4",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "CNN" },
    ],
  },
  {
    id: 5,
    num: "05",
    category: "Deep Learning & Accessibility",
    title: "Navigation Assistance for Visually Impaired",
    Description:
      "Built an intelligent navigation and object detection system for the visually impaired using YOLOv8 and pyttsx3. The system processes real-time images to detect objects and provides audio navigation cues, improving mobility and independence.",
    linker: "/projects/5",
    stack: [
      { name: "YOLOv8" },
      { name: "Python" },
      { name: "pyttsx3" },
    ],
  },
  {
    id: 6,
    num: "06",
    category: "Frontend",
    title: "Portfolio",
    Description:
      "Designed a personal portfolio using NextJs, showcasing projects and skills. The site features a modern, responsive design with smooth navigation, optimized for performance and SEO to enhance online visibility.",
    linker: "/projects/6",
    stack: [
      { name: "NextJs" },
      { name: "CSS" },
    ],
  },
  {
    id: 7,
    num: "07",
    category: "AI/ML",
    title: "Text Generation with GPT-2",
    Description:
      "Implemented a text generation system using the GPT-2 model from Hugging Face. The application generates coherent text based on input prompts, leveraging fine-tuned natural language processing for creative and practical uses.",
    linker: "/projects/7",
    stack: [
      { name: "Python" },
      { name: "Hugging Face" },
      { name: "GPT-2" },
    ],
  },
  {
    id: 8,
    num: "08",
    category: "Frontend",
    title: "Calculator",
    Description:
      "Built a simple calculator web app using HTML, CSS, and JavaScript. It supports basic arithmetic operations (addition, subtraction, multiplication, division) with a clean, responsive interface for an enhanced user experience.",
    linker: "/projects/8",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
    ],
  },
  {
    id: 9,
    num: "09",
    category: "Frontend",
    title: "Industrial Visit Page",
    Description:
      "Created a static webpage for industrial visit details using HTML, CSS, and JavaScript. The design is visually appealing and interactive, providing essential information in a user-friendly, responsive layout.",
    linker: "/projects/9",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
    ],
  },
  {
    id: 10,
    num: "10",
    category: "Frontend",
    title: "Dice Game",
    Description:
      "Developed an interactive dice game using HTML, CSS, and JavaScript. The app features random dice rolls and score tracking, designed with a playful, responsive UI to engage users effectively.",
    linker: "/projects/10",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
    ],
  },
  {
    id: 11,
    num: "11",
    category: "Frontend",
    title: "Basic Portfolio Sample",
    Description:
      "Constructed a basic portfolio sample using HTML, CSS, and JavaScript. This project highlights fundamental web development skills with a simple, responsive design showcasing personal achievements.",
    linker: "/projects/11",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
      { name: "JavaScript" },
    ],
  },
  {
    id: 12,
    num: "12",
    category: "Frontend",
    title: "Basic Registration Page",
    Description:
      "Designed a basic registration page using HTML and CSS. The form includes essential input fields with a clean, responsive layout, focusing on usability and aesthetic simplicity.",
    linker: "/projects/12",
    stack: [
      { name: "HTML 5" },
      { name: "CSS 3" },
    ],
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
            <Link href={project.linker} key={project.id}>
                          <div key={index} className="flex flex-col gap-[20px] bg-pink-50/20 p-6 rounded-lg w-full max-w-[800px] mx-auto">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.Description}</p>
              <div className="border border-white/20"></div>
              <ul className="flex flex-wrap gap-4  md:flex xl:flex">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent ">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
