import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology.
        </p>

        <br />

        <p className="text-xl">
        A critical thinker with a whole lot of enthusiasm to solve Real-World Problems and looking forward to grab an opportunity in the corporate to learn about the corporate environment. and constantly working towards learning new skills.
 <br /> <br />
        
        </p>
      </div>
    </div>
  );
};

export default About;
