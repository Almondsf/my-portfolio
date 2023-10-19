import Link from "next/link";
import { useRouter } from "next/router";
import Github from "../assets/github";
import Linkedin from "../assets/Linkedin";
import Twitter from "../assets/Twitter";
import Instagram from "../assets/IG";

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
    <div className="py-5 flex justify-between items-center">
      <Link href="/" className="text-3xl font-medium">
        Oluwafemi
      </Link>
      <div className="flex gap-10">
        <Link
          className={
            asPath === "/"
              ? "bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#F40076] to-[#c48c2d]"
              : ""
          }
          href="/"
        >
          Home
        </Link>
        <Link href="/">About</Link>
        <Link href="/">Resume</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="flex gap-6">
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
  );
};

export default Navbar;
