import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Photo from "@/components/Photo";
const Home=()=> {
  return (
    <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">AI Developer | Software Engineer</span>
          <h1 className="h1 mb-6">Hello I'm <br /><span className="text-accent">Sai Nsg</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80 text-justify">I'm a passionate creator who loves designing and building innovative applications — from intelligent AI solutions to full-stack software projects. With a strong command of multiple programming languages, frameworks, and modern technologies, I thrive on turning ideas into real-world, impactful products.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8"
          ><a href="\assets\NAGIREDDY SAI GOWTHAM.pdf" download>
          <Button variant="outline" size='lg' className="uppercase flex items-center gap-2">
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </a>
          <div className="mb-8 xl:mb-0">
            <Social containerStyles="flex gap-6" 
            iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
            items-center text-accent text-base hover:bg-accent hover:text-primary hover:tansition-all duration-500" />
          </div>
          </div>
        </div>
        <div
        className="order-1 xl:order-none mb-8 xl:mb-0"
        ><Photo/></div>
      </div>
    </div>
    <Stats />
    </section>

  );
}
export default Home