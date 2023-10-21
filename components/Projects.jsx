import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Cinemania",
      desc: "I'm thrilled to present my latest project, an e-commerce website in development. Leveraging the capabilities of Next.js and Express.js, powered by JavaScript, this platform is designed to redefine onl...",
      image: "",
      preview: "",
      repo: "",
    },
    {
      title: "Cinemania",
      desc: "I'm thrilled to present my latest project, an e-commerce website in development. Leveraging the capabilities of Next.js and Express.js, powered by JavaScript, this platform is designed to redefine onl...",
      image: "",
      preview: "",
      repo: "",
    },
    {
      title: "Cinemania",
      desc: "I'm thrilled to present my latest project, an e-commerce website in development. Leveraging the capabilities of Next.js and Express.js, powered by JavaScript, this platform is designed to redefine onl...",
      image: "",
      preview: "",
      repo: "",
    },
    {
      title: "Cinemania",
      desc: "I'm thrilled to present my latest project, an e-commerce website in development. Leveraging the capabilities of Next.js and Express.js, powered by JavaScript, this platform is designed to redefine onl...",
      image: "",
      preview: "",
      repo: "",
    },
    {
      title: "Cinemania",
      desc: "I'm thrilled to present my latest project, an e-commerce website in development. Leveraging the capabilities of Next.js and Express.js, powered by JavaScript, this platform is designed to redefine onl...",
      image: "",
      preview: "",
      repo: "",
    },
  ];
  return (
    <div>
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F40076] to-[#342711] text-[48px]">
        Projects
      </h2>
      <div className=" md:grid-cols-3 grid gap-6 mt-5">
        {projects.map((project, idx) => (
          <div className="bg-white text-black rounded-md p-4 flex flex-col gap-4 cursor-default">
            <Image/>
            <h2 className="text-xl">{project.title}</h2>
            <p>{project.desc}</p>
            <div className="flex justify-between"><span><a href="">Live Preview</a></span> <span><a href="">View Code</a></span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
