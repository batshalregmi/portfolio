import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useState } from "react"
import { Linkedin, GithubIcon, FileText, ArrowDown } from "lucide-react"

const About = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="bg-[#0a0a0a] p-6 flex flex-col gap-6">
          <a href="#" className="hover:underline underline-offset-4" >
            Projects
          </a>
          <a href="#" className="hover:underline underline-offset-4" >
            About
          </a>
        </SheetContent>
      </Sheet>
      <main className="flex-1">
        <section className="container mx-auto md:h-[100vh] flex flex-col md:flex-row items-center justify-center gap-12 relative">
          <div className="space-y-4 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold">Batshal Regmi</h1>
            <p className="text-lg text-gray-400">Computer Science Student | Focusing on Cyber Security</p>
            <p className="max-w-[600px] text-gray-300">
              I'm a passionate junior studying computer science at Georgia Tech. I'm constantly
              exploring new technologies and working on personal projects to expand my skills.
              Scroll down to see some of the things I've worked on.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/batshal-regmi/"
                className="inline-flex items-center justify-center rounded-md bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:ring-offset-2"
                target="_blank">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/batshalregmi"
                className="inline-flex items-center justify-center rounded-md bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:ring-offset-2"
                target="_blank"
              >
                <GithubIcon className="mr-2 h-5 w-5" />
                GitHub
              </a>
              <a
                href="https://ishortn.ink/brresume"
                className="inline-flex items-center justify-center rounded-md bg-[#1a1a1a] px-6 py-3 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:ring-offset-2"
                target="_blank"
              >
                <FileText className="mr-2 h-5 w-5" />
                Resume
              </a>
            </div>
          </div>
          <div>
            <a href="#projects">
              <ArrowDown className="hidden md:inline-flex h-8 w-8 text-gray-300 absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce" />
            </a>

          </div>
        </section>
      </main>
    </div>

  );
};

export default About;
