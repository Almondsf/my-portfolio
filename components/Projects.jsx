import Image from "next/image";
import Github from "../assets/github";
import LiveLink from "../assets/link";
import Linkedin from "../assets/Linkedin";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cafe from "../assets/cafe-desktop.png";

const Projects = () => {
  var carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const projects = [
    {
      title: "Cinemania",
      desc: "I'm thrilled to present my latest project, an e-commerce website in development. Leveraging the capabilities of Next.js and Express.js, powered by JavaScript, this platform is designed to redefine onl...",
      image: [
        {
          imageOne: <Cafe />,
        },
      ],
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
    <div id="projects" className="lg:pt-24 my-24 ">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F40076] to-[#342711] text-[35px] lg:text-[48px]">
        Projects
      </h2>
      <div className=" lg:grid-cols-3 grid md:grid-cols-2 grid-cols-1 w-[85%] mx-auto md:w-full gap-6 lg:mt-4 mt-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white text-black rounded-md p-4 flex flex-col gap-4 cursor-default"
          >
            <Slider {...carouselSettings}>
              <div className="">
                <Image
                  src={Cafe}
                  // alt={altText}
                  className=""
                  height={250}
                  width={500}
                  priority
                />
              </div>
            </Slider>
            <h2 className="text-xl">{project.title}</h2>
            <p>{project.desc}</p>
            <div className="flex justify-between">
              <span className="flex items-center gap-1">
                <LiveLink />
                <a href="">Live Preview</a>
              </span>{" "}
              <span className="flex items-center gap-1">
                <Github />
                <a href="">View Code</a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
