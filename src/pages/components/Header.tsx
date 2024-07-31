import { CodeIcon } from "lucide-react";

const Header = () => {

  return (
    <header className="md:flex container mx-auto py-8 px-4 md:px-6 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]">
      <a href="#" className="flex items-center gap-2">
        <CodeIcon className="w-8 h-8" />
      </a>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#home" className="hover:underline underline-offset-4">
          Home
        </a>
        <a href="#projects" className="hover:underline underline-offset-4">
          Projects
        </a>
        <a href="#about" className="hover:underline underline-offset-4">
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
