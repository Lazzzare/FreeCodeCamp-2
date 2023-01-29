import React from "react";
import Laura from "../assets/Laura.png";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";

const Card = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img src={Laura} alt="laura's Photo" />
      </div>
      {/* CardContent */}
      <div className="flex flex-col items-center bg-[#1A1B21] w-[317px]">
        <h1 className="mt-5 font-bold text-[25px] text-white">Laura Smith</h1>
        <p className="text-[#F3BF99] text-[14px] font-normal">
          Frontend Developer
        </p>
        <span className="text-white text-[11px]">laurasmith.website</span>
        {/* TwoBotton */}
        <div className="flex flex-row gap-[17px] mt-[15px] mb-8">
          <div className="bg-[#D1D5DB] rounded-md hover:bg-[#7d7c7c]">
            <a
              href=""
              className="flex gap-2 w-[115px] h-[34px] items-center justify-center mx-auto"
            >
              <MdEmail />
              Email
            </a>
          </div>
          <div className="bg-[#5093E2] items-center rounded-md text-white hover:bg-[#1c7ce9]">
            <a
              href=""
              className="flex gap-2 w-[115px] h-[34px] items-center justify-center mx-auto"
            >
              <AiFillLinkedin />
              Linkedin
            </a>
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-col px-[36px]">
          {/* About */}
          <h1 className="text-[#F5F5F5] font-bold text-[18px]">About</h1>
          <p className="items-center text-[#DCDCDC] text-[12px]">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="flex flex-col px-[36px] mt-[27px] pb-[24px]">
          {/* Interest */}
          <h1 className="text-[#F5F5F5] font-bold text-[18px]">Interest</h1>
          <p className="items-center text-[#DCDCDC] text-[12px]">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-row justify-center items-center gap-[23px] bg-[#161619] h-[64px] w-[317px]">
        <a
          href=""
          className="bg-[#918E9B] items-center justify-center flex rounded-md p-1"
        >
          <AiOutlineTwitter size={23} />
        </a>
        <a
          href=""
          className="bg-[#918E9B] items-center justify-center flex rounded-md p-1"
        >
          <AiFillFacebook size={23} />
        </a>
        <a
          href=""
          className="bg-[#918E9B] items-center justify-center flex rounded-md p-1"
        >
          <AiOutlineInstagram size={23} />
        </a>
        <a
          href=""
          className="bg-[#918E9B] items-center justify-center flex rounded-md p-1"
        >
          <AiOutlineGithub size={23} />
        </a>
      </div>
    </div>
  );
};

export default Card;
