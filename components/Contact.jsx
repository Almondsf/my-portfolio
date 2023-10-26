import Image from "next/image";

const Contact = () => {
  return (
    <div className="my-20">
      <h2 className="bg-clip-text text-center text-transparent bg-gradient-to-r from-[#F40076] to-[#342711] text-[48px]">
        Contact
      </h2>
      <div className="my-10">
        {/* <Image src="/banner1.jpg" alt="bg" width={700} height={400} /> */}
        <form action="" className="flex flex-col gap-10 w-1/2">
          <div className="flex flex-col gap-4">
            <label htmlFor="">Name</label>
            <input
              className="placeholder:text-gray-300 placeholder:font-light outline-none border-b bg-inherit"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Email</label>
            <input
              className="placeholder:text-gray-300 placeholder:font-light outline-none border-b bg-inherit"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Subject</label>
            <input
              className="placeholder:text-gray-300 placeholder:font-light outline-none border-b bg-inherit"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Message</label>
            <textarea
              className="placeholder:text-gray-300 placeholder:font-light outline-none border-b bg-inherit"
              name=""
              id=""
              // cols="10"
              rows="2"
              placeholder="Enter your message"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
