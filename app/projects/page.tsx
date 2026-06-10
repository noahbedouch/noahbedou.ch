import { ProjectCard } from "../components/ProjectCard";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const projects = [
  {
    title: "Find a Way Out",
    image: "/FAWO.png",
    description:
      "Find a Way Out is a small, 2D wave survival game created for the GMTK 2025 jam.",
    link: "https://britishtoastgames.itch.io/find-a-way-out",
    github: "https://github.com/British-Toast-Games/gmtk25",
  },
  {
    title: "noahbedou.ch",
    image: "/site.png",
    description:
      "Portfolio site built with Next.js and Tailwind CSS - you're looking at it right now!",
    link: "",
    github: "https://github.com/noahbedouch/noahbedou.ch",
  },
  {
    title: "Project 3",
    image: "/noah.jpg",
    description: "yo",
    link: "",
    github: "",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar />

      <div className="px-6 py-24 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here you&apos;ll find a collection of my recent projects.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
