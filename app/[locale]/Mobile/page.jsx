import React from "react";

const Mobile = () => {
  return (
      <div className="mx-auto w-4/5 py-4 h-full text-white text-sm ">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">Mobile App</h1>
      <p className="pt-5">
        Dear users,For your convenience, we have developed also a mobile version
        of “Bildilçin” application. By installing it, you will get even more
        functions and advantages, such as:
      </p>
      <ul className="list-disc ml-6 px-4 py-2">
        <li className="py-2">
          Finding meaning of words and phrases anytime and anywhere without
          Internet-connection;
        </li>
        <li className="py-2">Adding dictionary articles you like to “Bookmark” list;</li>
        <li className="py-2">
          Easily finding from “History” list the words you have viewed before;
        </li>
        <li className="py-2">
          Customizing the application according to your needs by turning off/on
          dictionaries and setting the sequence of dictionaries displaying;
        </li>
        <li className="py-2">
          Downloading new dictionaries (explanatory, translation and
          terminological) as they appear.
        </li>
      </ul>
      <p>
        In addition, the possibility to set language (English, Azerbaijani or
        Russian) and “theme” for interface will make your work with dictionaries
        even more comfortable and pleasant!
      </p>
    </div>
  );
};

export default Mobile;
