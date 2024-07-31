import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { CodeIcon } from "lucide-react";
import { Github } from "lucide-react";

type Project = {
    name: string;
    description: string;
    image: string;
    imageFit?: "cover" | "contain";
    link?: string;
    linkText?: string;
    techStack: string[];
    githubRepo?: string;
};
const initialProjects: Project[] = [
    {
        name: "Email Creator",
        description: "A Python script that creates real email addresses.",
        techStack: ["Python", "Selenium", "Browser Automation"],
        image: "/img/email.png",
        imageFit: "contain",
    },
    {
        name: "Parking Bot",
        description: "A Python script that notifies the user when a parking spot is available on the GT Parking Website.",
        techStack: ["Python"],
        image: "/img/parking.png",
        imageFit: "contain",
    },
    {
        name: "Banner Assistant",
        description: "A Python script that assists the user on the Banner registration website.",
        techStack: ["Python"],
        image: "/img/banner.png",
        imageFit: "contain",
    }
];

const OtherProjects = () => {
    const [projects, setProjects] = useState(initialProjects);

    return (
        <section id="less-important-projects" className="container mx-auto py-24 px-4 md:px-6">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Other Projects</h2>
                    <p className="text-gray-400">Some of my smaller or less significant projects.</p>
                </div>
                <div className="grid gap-4">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex items-start gap-4 bg-[#1a1a1a]">
                            <img
                                src={project.image}
                                width="100"
                                height="100"
                                alt={project.name}
                                className={`rounded-lg w-[100px] h-[100px] object-${project.imageFit || 'cover'}`}
                            />
                            <div className="flex-1 space-y-2">
                                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, techIndex) => (
                                        <div key={techIndex} className="px-3 py-1 rounded-md bg-[#2a2a2a] text-white">{tech}</div>
                                    ))}
                                </div>
                                <p className="text-gray-300">{project.description}</p>
                                <div className="flex items-center">
                                    {project.link && project.linkText && (
                                        <a href={project.link} className="text-blue-500 hover:underline">
                                            <span>{project.linkText}</span>
                                        </a>
                                    )}
                                    {project.githubRepo && (
                                        <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="text-white hover:underline pl-2">
                                            <Github />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherProjects;
