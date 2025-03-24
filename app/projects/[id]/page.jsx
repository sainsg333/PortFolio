"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { BsGithub,BsGlobe } from 'react-icons/bs';
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import projectImage1 from '@/assets/work/project1.png';
import projectImage2 from '@/assets/work/project2.png';
import projectImage4 from '@/assets/work/project4.png';
import projectImage5 from '@/assets/work/project5.jpg';
import projectImage6 from '@/assets/work/project6.png';
import projectImage8 from '@/assets/work/project8.png';
import projectImage9 from '@/assets/work/project9.png';
import projectImage10 from '@/assets/work/project10.png';
import projectImage11 from '@/assets/work/project11.png';
import projectImage12 from '@/assets/work/project12.png';
import { PlayIcon, PencilIcon, CodeBracketIcon, BeakerIcon, RocketLaunchIcon } from '@heroicons/react/24/solid';
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const projects = [
  {
    id: 1,
    num: "01",
    category: "Full Stack",
    title: "Chat Application",
    Description: "Built a real-time chat app using the MERN stack and Socket.io.",
    image: projectImage1,
    linker: "https://chat-app-mern-front.vercel.app/",
    githublink: "https://github.com/sainsg333/chat_app_mern",
    stack: [
      { name: "ReactJs" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "MongoDB" },
      { name: "SocketIO" },
    ],
    timeline: [
      {
        date: "Jan 2025",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Initial planning and setup.",
        advancements: ["Defined project scope", "Setup repository", "Initial UI design"],
      },
      {
        date: "Feb 2025",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "Architecture Design",
        phaseDescription: "Designed backend and frontend structure.",
        advancements: ["Database schema created", "API endpoints planned", "Socket.io setup"],
      },
      {
        date: "Mar 2025",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Core Development",
        phaseDescription: "Core chat features implemented.",
        advancements: ["Real-time messaging", "User authentication", "Socket.io integration"],
      },
      {
        date: "Apr 2025",
        icon: BeakerIcon,
        iconBg: "#9C27B0",
        phaseTitle: "Testing Phase",
        phaseDescription: "Tested and refined functionality.",
        advancements: ["Bug fixes", "Performance optimization", "Cross-browser testing"],
      },
      {
        date: "May 2025",
        icon: RocketLaunchIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Deployment",
        phaseDescription: "Deployed app and finalized.",
        advancements: ["Deployed to Vercel", "Added documentation", "User feedback collected"],
      },
    ],
  },
  {
    id: 2,
    num: "02",
    category: "Full Stack",
    image: projectImage2,
    title: "Lead Management System",
    Description: "Developed a lead management system with Google Two-Factor Authentication.",
    linker: "https://lead-front-pi.vercel.app/",
    githublink: "https://github.com/sainsg333/Lead_Management",
    stack: [
      { name: "NextJs" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
      { name: "Google 2FA" },
    ],
    timeline: [
      {
        date: "Nov 2024",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Planning and architecture design.",
        advancements: ["Scope defined", "Database schema created", "Setup NextJs"],
      },
      {
        date: "Dec 2024",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "System Design",
        phaseDescription: "Designed APIs and authentication flow.",
        advancements: ["API structure planned", "Google 2FA flow designed", "UI mockups"],
      },
      {
        date: "Jan 2025",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Core Development",
        phaseDescription: "Built lead tracking and auth.",
        advancements: ["Lead CRUD operations", "Google 2FA integration", "API development"],
      },
      {
        date: "Feb 2025",
        icon: BeakerIcon,
        iconBg: "#9C27B0",
        phaseTitle: "Testing Phase",
        phaseDescription: "Ensured security and functionality.",
        advancements: ["Security testing", "Bug fixes", "User testing"],
      },
      {
        date: "Mar 2025",
        icon: RocketLaunchIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Deployment",
        phaseDescription: "Deployed and monitored.",
        advancements: ["Deployed to Vercel", "Performance tweaks", "Final review"],
      },
    ],
  },
  {
    id: 3,
    num: "03",
    category: "AI/ML & Security",
    image: "",
    title: "Security Detection System",
    Description: "Built a security system using YOLOv8 with ROI and alert notifications.",
    linker: "",
    githublink: "",
    stack: [
      { name: "YOLOv8" },
      { name: "Python" },
      { name: "SMTP" },
      { name: "Twilio" },
    ],
    timeline: [
      {
        date: "Sep 2024",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Research and setup.",
        advancements: ["Defined ROI logic", "Installed YOLOv8", "Setup notification services"],
      },
      {
        date: "Oct 2024",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "System Design",
        phaseDescription: "Planned detection and notification logic.",
        advancements: ["Alert system flowchart", "YOLOv8 configuration", "Integration plan"],
      },
      {
        date: "Nov 2024",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Core Development",
        phaseDescription: "Core detection and alerts implemented.",
        advancements: ["Intruder detection", "Email/SMS alerts", "ROI optimization"],
      },
      {
        date: "Dec 2024",
        icon: BeakerIcon,
        iconBg: "#9C27B0",
        phaseTitle: "Testing Phase",
        phaseDescription: "Tested system reliability.",
        advancements: ["False positive reduction", "Notification testing", "Stress testing"],
      },
    ],
  },
  {
    id: 4,
    num: "04",
    category: "AI/ML",
    title: "Mineral Grain Recognition",
    image: projectImage4,
    Description: "CNN-driven mineral grain recognition in water sand samples.",
    linker: "",
    githublink: "",
    stack: [
      { name: "Python" },
      { name: "TensorFlow" },
      { name: "CNN" },
    ],
    timeline: [
      {
        date: "Jul 2024",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Data collection and model setup.",
        advancements: ["Collected sand samples", "Preprocessed images", "CNN architecture designed"],
      },
      {
        date: "Aug 2024",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "Data Preparation",
        phaseDescription: "Prepared dataset for training.",
        advancements: ["Image augmentation", "Dataset split", "Labeling completed"],
      },
      {
        date: "Sep 2024",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Model Development",
        phaseDescription: "Model training and testing.",
        advancements: ["Trained CNN model", "Achieved 85% accuracy", "Integrated predictions"],
      },
      {
        date: "Oct 2024",
        icon: BeakerIcon,
        iconBg: "#9C27B0",
        phaseTitle: "Evaluation Phase",
        phaseDescription: "Evaluated and refined model.",
        advancements: ["Hyperparameter tuning", "Error analysis", "Final validation"],
      },
    ],
  },
  {
    id: 5,
    num: "05",
    category: "AI/ML & Accessibility",
    title: "Navigation Assistance for Visually Impaired",
    Description: "Intelligent object detection and navigation system using YOLOv8.",
    linker: "",
    image: projectImage5,
    githublink: "https://github.com/sainsg333/Deep_learning_visually_impaired",
    stack: [
      { name: "YOLOv8" },
      { name: "Python" },
      { name: "pyttsx3" },
    ],
    timeline: [
      {
        date: "May 2024",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Research and initial setup.",
        advancements: ["Defined object classes", "Setup YOLOv8", "Integrated text-to-speech"],
      },
      {
        date: "Jun 2024",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "System Design",
        phaseDescription: "Planned detection and feedback flow.",
        advancements: ["Navigation logic designed", "Audio output planned", "User scenarios"],
      },
      {
        date: "Jul 2024",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Core Development",
        phaseDescription: "Built detection and navigation.",
        advancements: ["Object detection working", "Audio feedback implemented", "Initial testing"],
      },
      {
        date: "Aug 2024",
        icon: BeakerIcon,
        iconBg: "#9C27B0",
        phaseTitle: "User Testing",
        phaseDescription: "Tested with real users.",
        advancements: ["User feedback collected", "Accuracy improved", "Bug fixes"],
      },
      {
        date: "Sep 2024",
        icon: RocketLaunchIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Finalization",
        phaseDescription: "Polished and documented.",
        advancements: ["Optimized performance", "Added documentation", "Released prototype"],
      },
    ],
  },
  {
    id: 6,
    num: "06",
    category: "Frontend",
    title: "Portfolio",
    Description: "Personal portfolio built using NextJs.",
    linker: "#",
    image: projectImage6,
    githublink: "https://github.com/sainsg333/Portfolio",
    stack: [
      { name: "NextJs" },
      { name: "CSS" },
    ],
    timeline: [
      {
        date: "Mar 2024",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Planning and design.",
        advancements: ["Wireframes created", "Setup NextJs"],
      },
      {
        date: "Apr 2024",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "UI Design",
        phaseDescription: "Designed portfolio layout.",
        advancements: ["Styled components", "Color scheme selected", "Responsive planning"],
      },
      {
        date: "May 2024",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Development Phase",
        phaseDescription: "Built and styled portfolio.",
        advancements: ["Responsive design", "Deployed online"],
      },
    ],
  },
  {
    id: 7,
    num: "07",
    category: "AI/ML",
    title: "Text Generation with GPT-2",
    Description: "Text generation system using GPT-2 from Hugging Face.",
    linker: "",
    githublink: "",
    image: "",
    stack: [
      { name: "Python" },
      { name: "Hugging Face" },
      { name: "GPT-2" },
    ],
    timeline: [
      {
        date: "Jan 2024",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Setup and model selection.",
        advancements: ["Installed GPT-2", "Prepared dataset"],
      },
      {
        date: "Feb 2024",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "Data Preparation",
        phaseDescription: "Processed and cleaned data.",
        advancements: ["Text preprocessing", "Dataset formatting", "Validation split"],
      },
      {
        date: "Mar 2024",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Development Phase",
        phaseDescription: "Fine-tuned and tested.",
        advancements: ["Generated coherent text", "Optimized output"],
      },
      {
        date: "Apr 2024",
        icon: BeakerIcon,
        iconBg: "#9C27B0",
        phaseTitle: "Evaluation",
        phaseDescription: "Evaluated model performance.",
        advancements: ["Quality assessment", "Tweaked parameters", "Final testing"],
      },
    ],
  },
  {
    id: 8,
    num: "08",
    category: "Frontend",
    title: "Calculator",
    Description: "Simple calculator built with HTML, CSS, and JavaScript.",
    linker: "https://sainsg333.github.io/Calsy/",
    githublink: "https://github.com/sainsg333/Calsy",
    image: projectImage8,
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    timeline: [
      {
        date: "Nov 2023",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Design and setup.",
        advancements: ["UI designed", "Basic structure created"],
      },
      {
        date: "Dec 2023",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "UI Styling",
        phaseDescription: "Styled calculator interface.",
        advancements: ["CSS applied", "Button layout finalized"],
      },
      {
        date: "Jan 2024",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Development Phase",
        phaseDescription: "Added functionality.",
        advancements: ["Math operations implemented", "Deployed online"],
      },
    ],
  },
  {
    id: 9,
    num: "09",
    category: "Frontend",
    title: "Industrial Visit Page",
    Description: "Static page for industrial visit details.",
    linker: "https://sainsg333.github.io/industrial_visit/",
    githublink: "https://github.com/sainsg333/industrial_visit",
    image: projectImage9,
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    timeline: [
      {
        date: "Sep 2023",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Content planning.",
        advancements: ["Gathered info", "Setup files"],
      },
      {
        date: "Oct 2023",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "Design Phase",
        phaseDescription: "Created page layout.",
        advancements: ["Styled with CSS", "Planned interactivity"],
      },
      {
        date: "Nov 2023",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Development Phase",
        phaseDescription: "Built and deployed.",
        advancements: ["Responsive layout", "Added interactivity"],
      },
    ],
  },
  {
    id: 10,
    num: "10",
    category: "Frontend",
    title: "Dice Game",
    Description: "Interactive dice game using HTML, CSS, and JavaScript.",
    linker: "https://sainsg333.github.io/Dice_game/",
    githublink: "https://github.com/sainsg333/Dice_game",
    image: projectImage10,
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    timeline: [
      {
        date: "Jul 2023",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Game logic planning.",
        advancements: ["Defined rules", "Setup project"],
      },
      {
        date: "Aug 2023",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "UI Design",
        phaseDescription: "Designed game interface.",
        advancements: ["Styled dice visuals", "Layout completed"],
      },
      {
        date: "Sep 2023",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Development Phase",
        phaseDescription: "Built game mechanics.",
        advancements: ["Random dice roll", "Score tracking"],
      },
    ],
  },
  {
    id: 11,
    num: "11",
    category: "Frontend",
    title: "Basic Portfolio Sample",
    Description: "Simple portfolio using HTML, CSS, and JavaScript.",
    image: projectImage11,
    linker: "https://sainsg333.github.io/portfolio_basic/",
    githublink: "https://github.com/sainsg333/portfolio_basic",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    timeline: [
      {
        date: "May 2023",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Basic design planning.",
        advancements: ["Created layout", "Setup files"],
      },
      {
        date: "Jun 2023",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "Styling Phase",
        phaseDescription: "Applied styles to layout.",
        advancements: ["CSS styling added", "Color scheme chosen"],
      },
      {
        date: "Jul 2023",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Development Phase",
        phaseDescription: "Built and deployed.",
        advancements: ["Added sections", "Made responsive"],
      },
    ],
  },
  {
    id: 12,
    num: "12",
    category: "Frontend",
    title: "Basic Registration Page",
    image: projectImage12,
    Description: "Simple registration page using HTML and CSS.",
    linker: "https://sainsg333.github.io/Projects/",
    githublink: "https://github.com/sainsg333/portfolio_basic",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
    ],
    timeline: [
      {
        date: "Mar 2023",
        icon: PlayIcon,
        iconBg: "#4CAF50",
        phaseTitle: "Project Kickoff",
        phaseDescription: "Form design.",
        advancements: ["Planned fields", "Setup HTML"],
      },
      {
        date: "Apr 2023",
        icon: PencilIcon,
        iconBg: "#FF9800",
        phaseTitle: "Styling Phase",
        phaseDescription: "Designed form visuals.",
        advancements: ["Applied CSS", "Form layout finalized"],
      },
      {
        date: "May 2023",
        icon: CodeBracketIcon,
        iconBg: "#2196F3",
        phaseTitle: "Development Phase",
        phaseDescription: "Finalized form.",
        advancements: ["Validated layout", "Deployed online"],
      },
    ],
  },
];
const page = ({ params }) => {
  const { id } = params;
  const project = projects.find((p) => p.id === parseInt(id));
  if (!project) return <p>Project not found</p>;

  return (
    <div className="min-h-screen bg-[#2f2c38] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl mb-6 text-white/80">{project.Description}</p>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-full md:w-1/2 h-[350px] rounded-xl border-4 border-blue-400 overflow-hidden">
            <Image
              src={project.image}
              alt="Project preview"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>

          <div className="flex flex-wrap gap-4 md:w-1/2 justify-center">
            <div className="flex gap-6 flex-wrap">
              <a
                href={project.githublink || "#"}
                target={project.githublink ? "_blank" : ""}
                className={`relative py-3 px-8 rounded-2xl flex items-center gap-3 transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 shadow-md hover:shadow-xl hover:scale-105 ${
                  project.githublink
                    ? "cursor-pointer hover:bg-white/20"
                    : "cursor-not-allowed opacity-50"
                }`}
                onClick={(e) => !project.githublink && e.preventDefault()}
              >
                <BsGithub className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
                <span>{project.githublink ? "Github" : "Hidden"}</span>
              </a>
              <a
                href={project.linker || "#"}
                target={project.linker ? "_blank" : ""}
                className={`relative py-3 px-8 rounded-2xl flex items-center gap-3 transition-all duration-300 backdrop-blur-md bg-white/10 border border-white/20 shadow-md hover:shadow-xl hover:scale-105 ${
                  project.linker
                    ? "cursor-pointer hover:bg-white/20"
                    : "cursor-not-allowed opacity-50"
                }`}
                onClick={(e) => !project.linker && e.preventDefault()}
              >
                <BsGlobe className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
                <span>{project.linker ? "Live" : "Hidden"}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-10">
          <h2 className="text-3xl mb-4">Tech Stack:</h2>
          <div className="flex flex-wrap gap-4">
            {project.stack.map((item, i) => (
              <span
                key={i}
                className="bg-pink-500/20 py-2 px-4 rounded-xl border border-pink-400"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* Development Timeline */}
        <div className="mt-20">
          <h2 className="text-4xl mb-10 text-center">Development Timeline</h2>
          <div className="relative border-l-4 border-accent ml-6">
            {project.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="mb-10 ml-6 relative"
              >
                <VerticalTimelineElement
                  contentStyle={{
                    background: "#1d1836",
                    color: "#fff",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                  date={item.date}
                  iconStyle={{
                    background: item.iconBg,
                    width: "50px", // Set explicit size for the icon container
                    height: "50px", // Match width for a circle
                    display: "flex", // Ensure flex works inside
                    justifyContent: "center", // Center horizontally
                    alignItems: "center", // Center vertically
                  }}
                  icon={
                    <div className="flex w-full h-full">
                      {item.icon && (
                        <item.icon
                          className="w-6 h-6 text-white" // Fixed size, color for visibility
                        />
                      )}
                    </div>
                  }
                >
                  <div>
                    <h3 className="text-white text-[24px] font-bold">{item.phaseTitle}</h3>
                    <p
                      className="text-secondary text-[16px] font-semibold"
                      style={{ margin: 0 }}
                    >
                      {item.phaseDescription}
                    </p>
                  </div>
                  <ul className="mt-5 list-disc ml-5 space-y-2">
                    {item.advancements.map((point, index) => (
                      <li
                        key={`timeline-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page