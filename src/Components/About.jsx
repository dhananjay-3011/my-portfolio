import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 vorder-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione
          tempora sed at facilis illum explicabo, similique perferendis
          laboriosam incidunt ad, qui ipsam soluta consequatur laborum minus aut
          totam nihil, maxime modi recusandae minima assumenda tempore. Pariatur
          unde, ipsum praesentium laudantium, mollitia odio nulla, ad enim neque
          maiores nam at!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          minima consequuntur explicabo quo pariatur! Commodi veniam laboriosam
          adipisci, inventore natus animi quae laborum nulla perspiciatis
          assumenda debitis. Omnis deserunt similique debitis libero delectus.
          Adipisci molestiae rem quae quo, ipsum cum perferendis odit soluta ut
          eveniet aliquam non laboriosam accusamus necessitatibus?
        </p>
      </div>
    </div>
  );
};

export default About;
