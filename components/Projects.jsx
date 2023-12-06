import Image from "next/image";
import Github from "../assets/github";
import LiveLink from "../assets/link";
import Linkedin from "../assets/Linkedin";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cafe from "../assets/cafe-desktop.png";
import Cafe2 from "../assets/cafe-mobile.png";

const Projects = () => {
  var carouselSettings = {
    dots: false, // Set to false to hide dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };
  const projects = [
    {
      title: "Cafe Compass",
      desc: "Cafe Compass is a Next.js app that simplifies coffee exploration. Discover nearby coffee stores, explore detailed information, and upvote your favorites. The app combines user-friendly design with social interaction, enhancing the coffee discovery experience for enthusiasts.",
      images: [
        "/static/cafe/cafe-desktop.png",
        "/static/cafe/cafe-mobile.png",
        "/static/cafe/desktop-deets.png",
        "/static/cafe/mobile-details.png",
        "/static/cafe/nearme.png",
      ],
      preview: "https://cafe-compass.netlify.app/",
      repo: "https://github.com/Almondsf/discover-coffe-stores",
    },
    {
      title: "Cinemania",
      desc: "Cinemania: Elevate your movie nights with our app! Inspired by Netflix, Cinemania brings you a collection of trailers sourced from YouTube API, paired with seamless Magic Auth for hassle-free login. Experience cool animations, personalized recommendations, and curated collections. Cinemania - Where Netflix-inspired trailers meet excitement!",
      images: [
        "/static/cinemania/cinema-desk.png",
        "/static/cinemania/cinema-mobile.png",
        "/static/cinemania/home-desk.png",
        "/static/cinemania/home-mobile.png",
        "/static/cinemania/movie.png",
      ],
      preview: "",
      repo: "https://github.com/Almondsf/cinemania",
    },
    {
      title: "Nations Explorer",
      desc: "This app showcases comprehensive details about countries worldwide. Easily explore country profiles, seamlessly switch between dark and light modes for a personalized experience, and quickly find specific countries through the intuitive search feature.",
      images: [
        "/static/country/country1.png",
        "/static/country/country2.png",
        "/static/country/country3.png",
        "/static/country/country4.png",
        "/static/country/country5.png",
      ],
      preview: "https://allcountriesoftheworld.netlify.app/",
      repo: "https://github.com/Almondsf/rest-countries-api-with-color-theme-switcher-master-rest-countries-api-with-color-theme-switcher",
    },
    {
      title: "Cinemania",
      desc: "I'm thrilled to present my latest project, an e-commerce website in development. Leveraging the capabilities of Next.js and Express.js, powered by JavaScript, this platform is designed to redefine onl...",
      images: [],
      preview: "",
      repo: "",
    },
    {
      title: "Cinemania",
      desc: "I'm thrilled to present my latest project, an e-commerce website in development. Leveraging the capabilities of Next.js and Express.js, powered by JavaScript, this platform is designed to redefine onl...",
      images: [],
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
            className="bg-white text-black rounded-md p-4 flex flex-col gap-4 cursor-default "
          >
            {/* <Image src={Cafe2} className="h-56 w-auto object-contain" /> */}

            <Slider {...carouselSettings}>
              {project.images.map((image, index) => (
                <div key={index} className="h-3/5">
                  <Image
                    className="h-56 w-auto object-contain mx-auto"
                    src={image}
                    alt={index}
                    width={500}
                    height={100}
                  />
                </div>
              ))}
            </Slider>
            <h2 className="text-xl font-medium">{project.title}</h2>
            <p>{project.desc}</p>
            <div className="flex justify-between">
              <span className="flex items-center gap-1">
                <LiveLink />
                <a href={project.preview}>Live Preview</a>
              </span>{" "}
              <span className="flex items-center gap-1">
                <Github />
                <a href={project.repo}>View Code</a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
