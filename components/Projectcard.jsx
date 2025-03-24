// components/ProjectCard.tsx
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import Image from "next/image";

const ProjectCard = ({ gif, github, live }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 w-full max-w-4xl mx-auto">
      <div className="w-full md:w-1/2">
        {gif ? (
          <Image
            src={gif}
            alt="project gif"
            width={500}
            height={300}
            className="rounded-lg border-2 border-blue-400 object-cover"
          />
        ) : (
          <div className="bg-gray-300 rounded-lg border-2 border-blue-400 aspect-video w-full"></div>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <a
          href={github}
          target="_blank"
          className="bg-red-400 hover:bg-red-500 text-black px-6 py-2 rounded-md flex items-center gap-2"
        >
          <FaGithub />
          Github
        </a>
        <a
          href={live}
          target="_blank"
          className="bg-red-400 hover:bg-red-500 text-black px-6 py-2 rounded-md flex items-center gap-2"
        >
          <FaGlobe />
          Live
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
