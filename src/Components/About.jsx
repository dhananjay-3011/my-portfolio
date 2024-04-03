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
          As a final-year MCA student, I'm deeply passionate about frontend
          development and continuously strive to enhance my skills. Proficient
          in HTML, CSS, JavaScript, and React.js, I've undertaken diverse
          projects, from building todo applications to crafting interactive
          restaurant menus. Alongside my frontend expertise, I've also delved
          into backend development with frameworks like Django and WordPress, as
          well as languages like Python and PHP, ensuring holistic understanding
          and contribution to full-stack projects. Skilled in Git, GitHub, and
          Netlify, I excel in collaborative environments, valuing teamwork and
          effective communication. I'm eager to join a dynamic team where I can
          contribute my expertise, learn from experienced professionals, and
          make meaningful contributions to innovative projects. With a
          commitment to continuous learning and a passion for leveraging
          technology to solve real-world problems, I'm excited about the
          opportunities that lie ahead in my journey as a frontend developer.
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
