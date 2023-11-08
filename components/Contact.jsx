import React, { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const sendMail = async (e) => {
    e.preventDefault();
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      subjectRef.current.value,
      messageRef.current.value
    );
    const data = {
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await fetch("/api/emailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast("Your message has been sent successfully! 📤", { icon: "✅" });
      } else {
        toast(
          "Oops! There was an issue sending your message. Please try again. 🥺",
          { icon: "❌" }
        );
      }
    } catch (error) {
      toast("Oops! An unexpected error occurred. Please try again. 🥺", {
        icon: "❌",
      });
    }
  };

  return (
    <div>
      <h2 className=" bg-clip-text text-center text-transparent bg-gradient-to-r from-[#F40076] to-[#342711] text-[35px] lg:text-[48px]">
        Contact
      </h2>
      <div className="my-10">
        {/* <Image src="/banner1.jpg" alt="bg" width={700} height={400} /> */}
        <Toaster />
        <form action="" className="flex flex-col gap-10 lg:w-1/2">
          <div className="flex flex-col gap-4">
            <label htmlFor="">Name</label>
            <input
              ref={nameRef}
              className="placeholder:text-gray-300 placeholder:font-light outline-none border-b bg-inherit"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Email</label>
            <input
              ref={emailRef}
              className="placeholder:text-gray-300 placeholder:font-light outline-none border-b bg-inherit"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Subject</label>
            <input
              ref={subjectRef}
              className="placeholder:text-gray-300 placeholder:font-light outline-none border-b bg-inherit"
              type="text"
              placeholder="Subject"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="">Message</label>
            <textarea
              ref={messageRef}
              className="placeholder:text-gray-300 placeholder:font-light outline-none border-b bg-inherit"
              name=""
              id=""
              // cols="10"
              rows="3"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            onClick={sendMail}
            className="text-black bg-white py-3 text-center rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
