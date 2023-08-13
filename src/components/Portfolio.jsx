import React from "react";

import todolist from "../assets/portfolio/todolist.png"
import tvshowapp from "../assets/portfolio/tvshowapp.png";
import weatherapp from "../assets/portfolio/weather-app.png";
import recipebook from  "../assets/portfolio/recipe-book.png"
import ecommerce from "../assets/portfolio/ecommerce.png";
import chatmate from "../assets/portfolio/chatmate.png"
import gym from "../assets/portfolio/gym.png"

const Portfolio = () => {
  const portfolios = [
    {
      id:1,
      src:chatmate,
      link:"https://chatmate-backend.onrender.com/Chat",
      repo:"  https://github.com/nakul412/ChatMate",
    },
    {
      id:2,
      src: recipebook,
      link: 'https://recipeapp-rho.vercel.app/',
      repo: 'https://recipeapp-rho.vercel.app/'
    },
    {
      id:3,
      src:ecommerce,
      link:"https://ecommerce-site-jkf3-git-main-nakul412.vercel.app",
      repo:"https://github.com/nakul412/EcommerceSite",
    },
    {
      id:4,
      src:gym,
      link:"https://eatsnlifts.netlify.app/",
      repo:"https://github.com/nakul412/Eats-Lifts",
    },
    {
      id: 5,
      src: weatherapp,
      link: 'https://my-weather-app-reactttt.netlify.app',
      repo: 'https://github.com/nakul412/weather-app'
    },
    {
      id: 6,
      src: tvshowapp,
      link: 'https://nakul412.github.io/tvshow.github.io/',
      repo: 'https://github.com/nakul412/tvshow.github.io'
    },
    {
      id: 7,
      src: todolist,
      link: 'https://to-do-listttt.netlify.app',
      repo: 'https://github.com/nakul412/Todo-list'
    },
    
   
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
