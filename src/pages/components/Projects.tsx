import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";


type project = {
  name: string;
  description: string;
  image: string;
  imageFit?: "cover" | "contain";
  link?: string;
  linkText?: string;
  techStack: string[];
  githubRepo?: string;
};

const initialProjects: project[] = [
  {
    name: "Better Spotify Wrapped",
    description: "An Android app that provides a better Spotify Wrapped experience. It allows users to view their top tracks, artists, and genres.",
    image: "/img/spotify.png",
    imageFit: "cover",
    link: "https://sites.google.com/view/betterspotifywrapped/home",
    linkText: "Website",
    techStack: ["Android", "Firebase", "Spotify API"],
    githubRepo: "https://github.com/batshalregmi/cs-2340-spotify-wrapped",
  },
  {
    name: "College Schedule App",
    description: "An Android app that helps students plan their college schedules. It allows students to add courses, view their schedules, and set reminders for classes.",
    image: "/img/college-scheduler.png",
    imageFit: "contain",
    techStack: ["Android", "Java", "Material Design"],
    githubRepo: "https://github.com/batshalregmi/cs-2340-CollegeScheduler",
  },,
  {
    name: "GBA Flappy Bird",
    description: "A simple version of the popular game Flappy Bird for the Game Boy Advance (GBA). Developed using C and ran using mgba.",
    image: "/img/gba-flappybird.png",
    imageFit: "cover",
    techStack: ["C", "GBA Development", "Emulation", "Docker"],
    githubRepo: "https://github.com/batshalregmi/gba-flappybird",
  },
  {
    name: "Brotat",
    description: "A discord bot that provides useful utilities for server owners and fun commands for members. Used by over 5,000 servers and over 500,000 users.",
    image: "/img/brotat.png",
    imageFit: "contain",
    techStack: ["Python", "Discord.py", "Heroku", "MongoDB", "Other API's"],
    link: "https://top.gg/bot/371320386693890048",
    linkText: "Bot Info Page",
  },
  {
    name: "NFC PCB Business Card",
    description: "A custom PCB business card with an embedded NFC chip. It was designed in EasyEDA and manufactured by JLCPCB.",
    image: "/img/nfc-pcb.png",
    imageFit: "contain",
    techStack: ["PCB Design", "NFC", "Hardware", "EasyEDA"],
    githubRepo: "https://github.com/batshalregmi/pcb-nfc-card"
  },
  {
    name: "Elite Dangerous AFK Notifier",
    description: "A rust application that notifies the user about in-game events in Elite Dangerous when away from keyboard. It uses the Elite Dangerous journal to get the data.",
    image: "/img/elite-dangerous.png",
    imageFit: "contain",
    techStack: ["Rust", "Automation", "JSON", "Pushover API"],
    githubRepo: "https://github.com/batshalregmi/ED-AFK-Notifier",
  },
  {
    name: "Discord to Minecraft Chat Bridge",
    description: "A plugin and Discord bot that allows users to chat between Discord and Minecraft servers.",
    image: "/img/mc-disc.png",
    imageFit: "contain",
    techStack: ["Java", "Spigot", "Discord API", "Webhooks", "Minecraft Server API"],
    githubRepo: "https://github.com/batshalregmi/Discord-To-Minecraft",
  },
  {
    name: "Portfolio Website",
    description: "The website you are currently viewing. Built using Astro, React and Tailwind CSS.",
    image: "/img/portfolio.png",
    imageFit: "contain",
    techStack: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    githubRepo: "https://github.com/batshalregmi/portfolio"
  },
  {
    name: "Homelab",
    description: "A long term project to build a home lab for learning and experimenting with different technologies.",
    image: "/img/homelab.png",
    imageFit: "contain",
    techStack: ["Networking", "Docker", "Linux", "Proxmox"],
    link: "https://gist.github.com/batshalregmi/6c93ea84e3e1b0876cf9e1c5dc43f7e0",
    linkText: "Overview"
  }
]



const Projects = () => {
  const [projects, setProjects] = useState(initialProjects);

  return (
    <section id="projects" className="container mx-auto py-24 px-4 md:px-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-gray-400">Some of the things I've worked on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[#1a1a1a]">
              <img
                src={project.image}
                width="400"
                height="300"
                alt={project.name}
                className={`rounded-t-lg w-full h-[200px] ${project.imageFit === 'contain' ? 'object-contain' : 'object-cover'}`}
              />
              <CardContent className="p-4 space-y-2 text-white">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <div key={techIndex} className="px-3 py-1 rounded-md bg-[#2a2a2a] text-white">{tech}</div>
                  ))}
                </div>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex justify-between items-center mt-2">
                  {project.link && project.linkText ? (
                    <a href={project.link} className="text-blue-500 hover:underline" style={{ position: 'relative', top: '-2px' }}>
                      {project.linkText}
                    </a>
                  ) : (
                    <span></span> // This ensures the space is preserved even if there's no link
                  )}
                  {project.githubRepo && (
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                      <Github />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    
    
  );
};

export default Projects;