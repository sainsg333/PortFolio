import ProjectCard from "@/components/ProjectCard";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const project = [
  {
    num: '01',
    category: 'Full Stack',
    title: 'Project 1',
    Description: "Built a real-time chat app using the MERN stack and Socket.io...",
    linker: 'https://live-link-here.com',
    gif: '/your-gif-path-1.gif',
    github: 'https://github.com/your-repo-1',
    stack: [{ name: 'ReactJs' }, { name: 'NodeJs' }],
  },
  // Add more projects...
];

const Projects = () => {
  return (
    <div className="mt-20 flex flex-col gap-12">
      {project.map((proj, index) => (
        <ProjectCard
          key={index}
          gif={proj.gif}
          github={proj.github}
          live={proj.linker}
        />
      ))}
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <ExperienceCard
          key={`experience-${index}`}
          experience={experience}
        />
      ))}
    </VerticalTimeline>
    </div>
  );
};

export default Projects;
