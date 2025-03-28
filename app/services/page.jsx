"use client";
import {BsArrowUpRight} from "react-icons/bs";
import Link from "next/link";

const services =[
  {
    num: '01',
    title: 'Web Development',
    href: '../work',
    description: 'Building responsive and scalable websites using the latest web technologies like HTML, CSS, JavaScript, and frameworks like React'
  },
  {
    num: '02',
    title: 'AI Building',
    href: '../work',
    description: 'Developing intelligent systems that analyze data, make predictions, and automate decision-making using state-of-the-art machine learning and deep learning algorithms and tools.'

  },
  {
    num: '03',
    title: 'App Development',
    href: '../work',
    description: 'Creating mobile applications that provide seamless user experiences, leveraging platforms such as Android, iOS, and cross-platform tools like flutter and kotlin'
  },
  {
    num: '04',
    title: 'Python Development',
    href: '#',
    description: 'Building robust, scalable web applications with Django, leveraging Python’s simplicity and Django’s powerful framework to deliver secure, high-performance solutions.'
  }
];

import {motion} from 'framer-motion';
import { Heading } from "lucide-react";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto ">
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay: 2.4,duration:0.4 ,ease:"easeIn"}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service,index)=>{
            return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-300 flex justify-center items-center hover:-rotate-180">
                <BsArrowUpRight className="text-primary  text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full "></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;