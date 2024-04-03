// import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: arrayDestruct,
//     },
//     {
//       id: 2,
//       src: reactParallax,
//     },
//     {
//       id: 3,
//       src: navbar,
//     },
//     {
//       id: 4,
//       src: reactSmooth,
//     },
//     {
//       id: 5,
//       src: installNode,
//     },
//     {
//       id: 6,
//       src: reactWeather,
//     },
//   ];
//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 text-white w-full text-shite md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             PortFolio
//           </p>
//           <p className="py-6">Check out some of work right here</p>
//         </div>

//         {portfolios.map(({ id, src }) => (
//           <div
//             key={id}
//             className="grid sm:grid-cols-2 md:grid-cols-3 gay-8 px-12 sm:px-0"
//           >
//             <div className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Demo
//                 </button>
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import fetchdata from "../assets/portfolio/fetchdata.jpg";
import todoap from "../assets/portfolio/todoap.jpg";
import restromenu from "../assets/portfolio/restromenu.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import eatryapp from "../assets/eatryapp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: eatryapp,
      liv: `https://eatryapp.netlify.app`,
      git: `https://github.com/dhananjay-3011/eatry-app`,
    },
    {
      id: 2,
      src: todoap,
      liv: `https://toodosite.netlify.app/`,
      git: `https://github.com/dhananjay-3011/todolist`,
    },
    {
      id: 3,
      src: fetchdata,
      liv: `https://fetchgiitdata.netlify.app/`,
      git: `https://github.com/dhananjay-3011/Fetching-Github-Data`,
    },
    {
      id: 4,
      src: restromenu,
      liv: `https://restroomenu.netlify.app/`,
      git: `https://github.com/dhananjay-3011/RestroMenu`,
    },
    {
      id: 5,
      src: installNode,
      liv: `https://eatryapp.netlify.app`,
    },
    {
      id: 6,
      src: reactWeather,
      liv: `https://eatryapp.netlify.app`,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liv, git }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-200"
              />
              <div className="flex items-center justify-center">
                <a href={liv}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Live
                  </button>
                </a>
                <a href={git}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
