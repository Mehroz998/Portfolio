import { Swiper, SwiperSlide } from "swiper/react";
import '../App.css'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import {motion} from "motion/react"


const projects = [
  {
    title: "Quiz App",
    description: "Created a React Quiz App featuring timed questions, subject selection, and difficulty levels, providing instant feedback and final results to showcase user performance.",
    image: [
      "QuizApp/Screenshot (2).png",
      "QuizApp/Quiz_App_Logo_M.jpg",
      "QuizApp/Quiz_App_Logo_T.jpg"
    ],
    liveLink: "https://react-quiz-iota-lime.vercel.app/",
    githubLink: "https://github.com/Mehroz998/React_Quiz",
  },
  {
    title: "Chat App",
    description: "Built a real-time messaging application using MERN stack & Socket.io, featuring instant messaging, user authentication, and chat storage in MongoDB.",
    image: [
      "ChatApp/ChatApp.png",
      "ChatApp/ChatApp_M.jpg",
      "ChatApp/ChatApp_T.jpg"
    ],
    liveLink: "https://fascinating-anni-mehrozali-da2ca805.koyeb.app/",
    githubLink: "https://github.com/Mehroz998/ChatApp",
  },
  {
    title: "Food Recipe App",
    description: "Built a responsive Food Recipe App using React that fetches recipes via API, includes a search feature, and offers a clean, user-friendly interface for exploring dishes.",
    image: [
      "FoodApp/Foo_App.png",
      "FoodApp/Food_App_M.jpg",
      "FoodApp/Food_App_T.jpg"
    ],
    liveLink: "https://food-recipe-drab-omega.vercel.app/",
    githubLink: "https://github.com/Mehroz998/Food_Recipe",
  },
  {
    title: "Tic Tac Toe Game",
    description: "Build Tic Tac Toe game using React with a sleek UI and smooth gameplay, allowing users to enjoy the classic game with an interactive experience.",
    image: [
      "TicTacToe/TicTacToe.png",
      "TicTacToe/TicTacToe_M.jpg",
      "TicTacToe/TicTacToe_T.jpg"
    ],
    liveLink: "https://tic-tac-toe-beige-five.vercel.app/",
    githubLink: "https://github.com/Mehroz998/tic_tac_toe",
  },
  {
    title: "Spotify Web Clone",
    description: "Built a responsive Spotify Clone using HTML, CSS and JS.",
    image: [
      "Spotify/Spotify.png",
      "Spotify/Spoify_M.jpg",
      "Spotify/Spotify_T.jpg"
    ],
    liveLink: "https://equal-rural-storm.glitch.me/",
    githubLink: "https://github.com/Mehroz998/Spotify_Clone",
  },
];

const Project = () => {
  const [currIndex , setCurrIndex] = useState(0)
  const [img , setImg] = useState(0)


  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrIndex((currIndex) =>
        currIndex === projects[img].image.length-1 ? 0 : currIndex+1
      );
      setImg((img)=>img+1)
    }, 3000); // Image will change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  },[])


  return (
    <div id="Projects" className="w-full flex justify-center bg-black py-10">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className="w-[90%]">
        <motion.h2 initial={{y:-20 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:0.5}} className="text-5xl text-center my-8 text-red-600 font-bold">
          Projects
        </motion.h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation
          modules={[Pagination, Navigation,Autoplay ]}
          autoplay={{
            delay: 3000, // 5 seconds delay
            disableOnInteraction: true, // User interaction ke baad bhi autoplay continue rahega
            pauseOnMouseEnter: true,
          }}
          className="p-4"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <motion.div
              initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5 , delay:0.3}} 
              className="relative overflow-hidden rounded-lg shadow-lg  main my-8">
                {/* Project Image */}
                <img
                  src={project.image[currIndex]}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />

                {/* Project Title & Description (Always Visible) */}
                <div className="p-2 bg-red-600 text-white text-center">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                </div>

                {/* Hover Layer (Slides Up) */}
                <div className="absolute bottom-0 left-0 w-full h-0 flex flex-col items-center justify-center gap-4 transition-all duration-500 opacity-0 text-center hide">
                  <p className="text-sm text-gray-300  overflow-auto">{project.description}</p>
                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-red-600 px-4 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-gray-300 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold border-2 border-white hover:bg-gray-800 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-6 flex justify-center "></div>
      </motion.div>
      {/* Custom CSS for Pagination & Button Spacing */}
     <style>
        {`
          .swiper-pagination-bullet {
            background: white !important; /* Pagination dots white 
          }

          .swiper-button-prev, .swiper-button-next {
            margin: 0 10px; /* Adds spacing between navigation buttons 
          }
        `}
      </style>
    </div>
  );
};

export default Project;

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// const projects = [
//   {
//     title: "Quiz App",
//     description: "An interactive quiz application with a timer and score tracking.",
//     image: "/images/quiz-app.png",
//   },
//   {
//     title: "E-commerce Clone",
//     description: "A fully functional e-commerce website with product listings.",
//     image: "/images/ecommerce-clone.png",
//   },
//   {
//     title: "Dashboard (CRUD)",
//     description: "A dashboard with Create, Read, Update, and Delete operations.",
//     image: "/images/dashboard.png",
//   },
//   {
//     title: "Chat App",
//     description: "A real-time chat application using WebSockets.",
//     image: "/images/chat-app.png",
//   },
// ];

// const Project = () => {
//   return (
//     <div className="w-full flex justify-center bg-black">
//       <div className="w-[90%] py-12">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           My Projects
//         </h2>
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           pagination={{ clickable: true }}
//           navigation
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           modules={[Pagination, Navigation, Autoplay]}
//           className="p-4"
//         >
//           {projects.map((project, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-40 object-cover rounded-md"
//                 />
//                 <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
//                 <p className="text-gray-600 text-sm text-center">
//                   {project.description}
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* 🟢 Pagination Below Slider */}
//         <div className="mt-6 flex justify-center">
//           <div className="swiper-pagination"></div>
//         </div>
//       </div>

//       {/* Custom CSS for Pagination & Button Spacing */}
//       <style>
//         {`
//           .swiper-pagination-bullet {
//             background: white !important; /* Pagination dots white */
//           }

//           .swiper-button-prev, .swiper-button-next {
//             margin: 0 10px; /* Adds spacing between navigation buttons */
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Project;

