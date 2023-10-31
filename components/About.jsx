const About = () => {
  const work = [
    {
      title: "Frontend developer",
      type: "Full Time",
      company: "Risigner Innovation",
      duration: "August 2022 - Present",
    },
    {
      title: "Frontend developer",
      type: "per Time",
      company: "Plumpter",
      duration: "March 2023 - June 2023",
    },
    {
      title: "Frontend developer",
      type: "Full Time",
      company: "Side Hustle Internship",
      duration: "Nov 2021 - Aug 2022 ",
    },
  ];
  return (
    <div className="pt-20 mb-10 " id="about">
      <div className="mt-2">
        <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F40076] to-[#342711] text-[35px] lg:text-[48px]">
          About Me
        </h2>
        <div className="flex flex-col  gap-6">
          <p>
            Guided by a passion for problem-solving, I'm a developer who deeply
            appreciates the profound impact of technology in today's world. My
            primary focus is on using technology to create innovative
            applications and software that not only simplify daily life but also
            make it more enjoyable.
          </p>
          <p>
            In my leisure time, you'll find me watching educational TV shows and
            sitcoms. I'm also passionate about music, where I enjoy playing the
            piano and singing along. I make a point of attending tech events and
            other social gatherings to expand my network and meet new people.
            Currently, I'm developing a reading habit, and I'm excited to see
            where it takes me. 😄 Wish me luck!
          </p>
        </div>

        <div className="my-14">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F40076] to-[#342711] text-[35px] lg:text-[48px]">
            Work Experience
          </h2>
          <div className="lg:w-1/2 flex flex-col gap-7 lg:mt-4 mt-6">
            {work.map((e, idx) => (
              <div
                key={idx}
                className="flex flex-col lg:gap-6 gap-10 border-b pb-2 border-gray-700"
              >
                <div className="flex justify-between">
                  <h1>{e.title}</h1>
                  <p className="text-xs lg:text-sm bg-pink-600 p-[6px] rounded-full">
                    {e.type}
                  </p>
                </div>
                <div className="flex items-center  text-gray-400">
                  <div class="w-2 h-2 bg-white  mr-2 mt-1"></div>
                  <div className="flex w-full justify-between items-center">
                    <span className="text-xs lg:text-base">{e.company}</span>
                    <span className="text-xs lg:text-base">{e.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#F40076] to-[#342711] text-[35px] lg:text-[48px]">
            Education
          </h2>
          <div className="lg:w-1/2 flex flex-col gap-7 lg:mt-4 mt-6">
            <div className="flex flex-col gap-6 border-b pb-2  border-gray-700">
              <div className="flex justify-between">
                <h1>Bsc. in Pure and Applied Chemistry</h1>
                <p className="text-xs lg:text-sm bg-pink-600 p-[6px] rounded-full">
                  Full Time
                </p>
              </div>
              <div className="flex text-gray-400 text-xs lg:text-base items-center">
                <div class="w-2 h-2 bg-white  mr-2 mt-1"></div>
                <div className="justify-between flex w-full items-center">
                  <span>University of Lagos, Akoka. (UNILAG)</span>
                  <span>Jan 2022 - Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
