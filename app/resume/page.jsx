"use client"; 

import { Description } from "@radix-ui/react-dialog";
import { Instrument_Sans } from "next/font/google";
import { FaHtml5,FaCss3,FaJs,FaReact,FaNodeJs } from "react-icons/fa";
import { SiTailwindcss,SiNextdotjs } from "react-icons/si";


const about={
  title:"About me",
  Description:"I am a BTech IT student at GMRIT, skilled in Python (Django, Flask), Machine Learning, PHP, CSS, and MERN stack. I am passionate about Full Stack development, AI, and data science, aiming to contribute to IT innovations.",
  info:[
    {
      fieldName:"Name",
      fieldValue:"Nagireddy Sai Gowtham"
    },
    {
      fieldName:"Phone",
      fieldValue:"+91 9640164778"
  },{
      fieldName:"Experience",
      fieldValue:"2+ years"
    },{
      fieldName:"LinkedIn",
      fieldValue:"nagireddysaigowtham"
    },{
      fieldName:"Nationality",
      fieldValue:"India"
    },
    {
      fieldName:"Email",
      fieldValue:"sainsg333@gmail.com"
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
    {
      fieldName:"Languages",
      fieldValue:"English, Telugu"
    },
  ]
}

const experience={
  icon:'/assets/resume/badge.svg',
  title:"My experience",
  Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items:[
    {
      title:"Software Developer",
      company:"CEMS",
      duration:"july 2023",
    },
    {
      title:"App Developement",
      company:"AICTE",
      duration:"august 2023",
    },
    {
      title:"ML Developer",
      company:"Andhra University",
      duration:"july 2024",
    }
  ]
}

const education={
  icon:'/assets/resume/cap.svg',
  title:"My Education",
  Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items:[
    {
      title:"Full Stack Web Developement",
      degree:"Certified by HarvardX",
      university:"GMR Institue of Technology",
      duration:"August 2024",
    },
    {
      title:"Introduction to Cloud",
      degree:"Certified Devops engineer",
      university:"IBM",
      duration:"October 2024",
    },
    {
      title:"Google cloud",
      degree:"Certified G-cloud engineer",
      university:"Google",
      duration:"2023-2024",
    },
    {
      title:"Bachelor of Technology",
      degree:"Computer Science",
      university:"GMR Institue of Technology",
      duration:"2021-2025",
    },
    {
      title:"Intermediate",
      degree:"MPC Stream",
      university:"Sri Chaitanya",
      duration:"2019-2021",
    },
    {
      title:"Secondary School",
      degree:"Board of secondary education AP",
      university:"Sri Chaintya E.M School",
      duration:"2015-2019",
    }
  ]
}

const skills={
  title:"My Skills",
  Description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  skillList:[
    {
      icon:<FaHtml5/>,
      name:"html 5",
    },
    {
      icon:<FaCss3/>,
      name:"css 3",
    },
    {
      icon:<FaJs/>,
      name:"javascript",
    },
    {
      icon:<FaReact/>,
      name:"React.Js",
    },
    {
      icon:<SiNextdotjs/>,
      name:"next.Js",
    },
    {
      icon:<SiTailwindcss/>,
      name:"Tailwind.css",
    },
    {
      icon:<FaNodeJs/>,
      name:"Node.js",
    },

  ]
}

import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { easeIn, motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full  ax-w-[300px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>

        </TabsList>
        <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" >
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.Description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => {
                    return (<li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent">
                        </span>
                        <p className="text-white/60 font-size:18px">{item.company}</p>
                      </div>
                    </li>
)})}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" >
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.Description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => {
                    return (<li key={index} className="bg-[#232329] h-[220px] py-5 px-5 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[50px] text-center lg:text-left">{item.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent">
                        </span>
                        <p className="text-white/60 font-size:18px">{item.degree}</p>

                      </div>
                      <div className="flex items-center gap-3"><span className="w-[6px] h-[6px] rounded-full bg-accent">
                        </span>
                      <p className="text-white/60 font-size:18px flex flex-row items-center ">{item.university}</p>
                      </div>
                    </li>
)})}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" >
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.Description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill,index)=>{
                  return(
                    <li key={index} className="flex items-center gap-3">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-atuo xl:mx-0">
                {about.info.map((item,index)=>{
                  return (
                    <li className="flex items-center justify-center xl:justify-start gap-4" key={index}>
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text:xl">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>

            </div>
          </TabsContent>
        </div>
      </Tabs>
      </div>

    </motion.div>
 )
}

export default Resume