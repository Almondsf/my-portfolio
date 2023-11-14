// import Link from "next/link";
import { useRouter } from "next/router";
import Github from "../assets/github";
import Linkedin from "../assets/Linkedin";
import Twitter from "../assets/twitter";
import Instagram from "../assets/IG";
import Menu from "../assets/Menu";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const socialIcons = [
    { name: <Github />, url: "https://github.com/Almondsf" },
    {
      name: <Linkedin />,
      url: "https://www.linkedin.com/in/oluwafemi-oloyede/",
    },
    { name: <Twitter />, url: "https://twitter.com/oluwafemi_Cs/" },
    { name: <Instagram />, url: "https://www.instagram.com/oluwafemi______/" },
  ];

  const { asPath } = useRouter();

  return (
    <div className="w-full fixed top-0 z-50 bg-black">
      <div className="w-[90%] lg:flex justify-between items-center lg:py-8 py-4   bg-black">
        <div className="text-3xl font-medium hidden lg:flex">
          <Link
            className="cursor-pointer"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Oluwafemi
          </Link>
        </div>
        <div className="lg:flex gap-10 hidden">
          <div>
            <Link
              activeClass="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#F40076] to-[#c48c2d]"
              className="cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              activeClass="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#F40076] to-[#c48c2d]"
              className="cursor-pointer"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </div>
          <div>
            <Link
              className="cursor-pointer "
              to="resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Resume
            </Link>
          </div>
          <div>
            <Link
              activeClass="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#F40076] to-[#c48c2d]"
              className="cursor-pointer"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </div>
          <div>
            <Link
              activeClass="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#F40076] to-[#c48c2d]"
              className="cursor-pointer"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="lg:flex gap-6 hidden">
          {socialIcons.map((Icon) => (
            <a
              key={Icon.url}
              href={`${Icon.url}`}
              target="_blank"
              className="text-2xl"
            >
              {Icon.name}
            </a>
          ))}
        </div>
      </div>
      <div className="lg:hidden p-2 w-fit rounded-full fixed right-4 text-4xl bg-white text-black  bg-opacity-70">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
