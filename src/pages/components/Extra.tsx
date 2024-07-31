export default function Extra() {
  const skills = ['Java', 'Python', 'C', 'Git', 'Virtualization', 'Linux Systems', 'Proxmox', 'SQL', 'Docker', 'Google Cloud', 'AWS', 'Heroku'];
  const interests = ['Cybersecurity', 'Software Development', 'Self-Hosting', 'Open Source', 'DevOps', 'Android'];

  return (
    <section id="about" className="container mx-auto py-24 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-gray-400">
            I am a passionate tech enthusisnt, with a strong interest in software development and cybersecurity.
            Learn more about my skills and interests.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="px-3 py-1 rounded-md bg-[#1a1a1a]">{skill}</div>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <div key={index} className="px-3 py-1 rounded-md bg-[#1a1a1a]">{interest}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}