import React from "react";

const Participate = () => {
  return (
    <div className="mx-auto w-4/5 py-4 text-white text-sm">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">
        Participate in project
      </h1>
      <div>
        <h2 className="text-[#ff5f53] py-3">Dear users!</h2>
        <p className="">
          If you like “Bildilçin” application, participate in its improvement
          and development process:
        </p>
        <ul className="list-disc ml-6 px-4 py-2">
          <li className="py-2">
            Inform us about literal errors you discover within dictionaries.
            This takes not more than a couple of seconds – without leaving the
            dictionary entry, just select text fragment, which contains error,
            and press “Ctrl“ + “Enter” keys;
          </li>
          <li className="py-2">
            Share the information about “Bildilçin” in social networks, install
            the mobile version of the application, rate it and provide positive
            feedback. We believe that growing popularity of the project may
            inspire different authors to present us their dictionaries, which we
            will gladly add to “Bildilchin” for you.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-[#ff5f53] ">Dear authors of dictionaries!</h2>
        <p className="py-2">
          If you wish to participate in our non-commercial project, by
          presenting your dictionary of any purpose (explanatory, translation or
          terminological) for our adding it into “Bildilçin” application,
          contact us by sending an e-mail from “Contact us“ page of our
          web-site.
        </p>
        <p className="py-1">Respectfully yours,</p>
        <p>“Bildilçin” developer team</p>
      </div>
    </div>
  );
};

export default Participate;
