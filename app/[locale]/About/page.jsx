import React from "react";

const About_Project = () => {
  return (
    <div className="mx-auto w-4/5 pt-4">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">About application</h1>
      
      <div className=" text-white text-sm ">
        <p className="py-5">
          <span className="font-bold">“Bildilçin” </span>
           – Multipurpose online dictionary Conception and
          development by «Kibrit.tech» LLC
        <a href="http://www.kibrit.tech/" className="text-[#ff5f53] underline text-sm font-thin block">www.kibrit.tech</a>
        </p>
   
        <p className="py-5">
          “Bildilçin” is noncommercial project, which serves the purposes of
          preserving the purity of our native language and its wide correct
          usage. This application is our modest attempt to strengthen national
          identity of our people and our voluntary contribution to{" "}
          <a href="https://president.az/az/articles/view/7744" className="text-[#ff5f53] underline text-sm font-thin">
            State program on the use of the Azerbaijani language in conformity
            with the requirements of globalization and on the development of
            linguistics in Azerbaijan.
          </a>
        </p>
     
        <p className="py-5 italic">
          All the dictionaries used in the application are the property of their
          respective authors/institutions, meant for personal use only and
          cannot be used for commercial purposes.
        </p>
      </div>
    </div>
  );
};

export default About_Project;
