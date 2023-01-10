
import React, { useState} from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
//function for form reset
function handleSubmit(e){
  setTimeout(() => {
    e.target.reset();
  }, 1000);
}

const Contact = () => {
  const form = useRef();
    
  const[info,setyou]=useState({
      name:"",
      email:"",
      message:"",
  })
  const put=(event)=>{
        let n=event.target.name;
        const value=event.target.value;
        setyou({...info,[n]:value})
  }

  function sendemail(e){
     
      e.preventDefault();
      emailjs.sendForm('service_20pttsp', 'template_tum15sk',form.current,"gk_eE9Y-6Wcxl9vnw")
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      alert("Your message has been sent.")

      setyou({
          name:"",
          email:"",
          message:"",
      })
   }
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        
        <div className=" flex justify-center items-center">
          <form
            
            name="contact"
            method="POST"
            action="https://getform.io/f/a5bbeab4-3505-457e-bcda-603c8bc15711"
            className=" flex flex-col w-full md:w-1/2"
            ref={form} onSubmit={sendemail}>
            <input
              type="text"
              name="name"
              value={info.name}
              onChange={put}
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={info.email}
              onChange={put}
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={info.message}
              onChange={put}
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
