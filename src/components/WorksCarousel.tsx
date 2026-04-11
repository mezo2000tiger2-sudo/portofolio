import { ProjectCard } from "./ProjectCard"

export function WorksCarousel() {
  const projects = [
    {
      title: "NEURAL_INTERFACE_V1",
      category: "2024",
      year: "Global",
      imageText: "N_V1"
    },
    {
      title: "SYSTEM_ORBIT_OS",
      category: "Product",
      year: "Application",
      imageText: "ORBIT"
    }
  ]

  return (
    <section id="works" className="py-24 bg-background ">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center justify-between border-b border-[#333] pb-6 mb-16">
          <span className="text-primary font-mono text-[10px] uppercase font-bold tracking-widest">SELECTED PROJECTS</span>
          <span className="text-[#8888aa] font-mono text-[10px] uppercase font-bold tracking-widest text-right">01 /<br />04</span>
        </div>
        <h2 className="text-5xl md:text-[8rem] font-heading font-extrabold text-white tracking-tighter uppercase leading-[0.8]">
          WORKS
        </h2>
      </div>

      <div className="w-full flex pl-6 md:pl-0 lg:pl-[10%] pt-12 pb-32 overflow-visible">
        <div className="flex gap-12 pb-10" id="works-carousel-track">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              year={project.year}
              imageText={project.imageText}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
