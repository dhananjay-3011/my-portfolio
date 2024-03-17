import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MyImage from "../assets/myimage.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
            FrontEnd Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md text-1.5xl">
            "Hello there! I'm <b> Dhananjay Singh Chouhan</b>, on an exciting
            journey of learning and exploring the world of web development.
            Currently, I'm immersing myself in the technologies of
            <u> HTML, CSS, JavaScript,React, Python, Django, Git, GitHub etc</u>
            . Enthusiastic to grow and contribute to innovative projects in the
            tech landscape.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="text-white w-fit px-3 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 group cursor-pointer "
            >
              PortFolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={MyImage}
            alt=""
            className="rounded-2xl  mx-auto w-2/3 md:w-80%"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
