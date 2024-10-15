"use client";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue} from "@/components/ui/select";
import { FaPhoneAlt,FaEnvelope,FaMapMarkedAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info =[
  {
    icon:<FaPhoneAlt />,
    title:"Phone",
    Description:"+91 9640164778"
  },
  {
    icon:<FaEnvelope />,
    title:"Email",
    Description:"sainsg333@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:"Address",
    Description:"Rajamundry"
  },
]

import {motion} from "framer-motion";
const Contact = () => {
  return (
        <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
        className="py-6"
>
  <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-[30px]">
      <div className="xl:w-[54%] order-2 xl:order-none">
        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
          <h3 className="text-4xl text-accent">Let's work together</h3>
          <p className="text-white/60">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, repellat nam! Error, similique fuga. Harum, corporis ipsum libero velit ratione minus ducimus obcaecati quasi error dolor necessitatibus soluta voluptatum labore?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <Input type="firstname" placeholder="FirstName" />
            <Input type="lastname" placeholder="LastName" />
            <Input type="email" placeholder="Email Address" />
            <Input type="phone" placeholder="Phone Number" />
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent><SelectGroup>
                <SelectLabel>select a service</SelectLabel>
                <SelectItem value="est">Machine learning</SelectItem>
                <SelectItem value="cst">Web Development</SelectItem>
                <SelectItem value="mst">App Development</SelectItem>
              </SelectGroup></SelectContent>
              
          </Select>
          <Textarea className="h-[200px]" placeholder="Type your message here" />
          <Button size="md" className="max-w-40">Send Message</Button>
        </form>
      </div>
      <div
      className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
        <ul className="flex flex-col gap-10"
        >{info.map((item,index)=>{
          return (<li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:w-[72px] h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
              <div className="text-[28px] ">
                {item.icon}
              </div>
              </div>

              <div className="flex-1">
                <p className="text-white/60">{item.title}</p>
                <h3 className="text-xl">{item.Description}</h3>
            </div>
          </li>)
        })}</ul>
      </div>
    </div>
  </div>
</motion.section>
  )
}

export default Contact