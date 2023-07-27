"use client";

import React from "react";
import { useState } from "react";
import Dict_card from "./Dict_card/Dict_card";
import Popup from "./Popup/Popup";

const Dictionaries = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="mx-auto w-4/5 pt-4">
      <h1 className="text-[#ff5f53] font-light text-2xl md:text-5xl md:py-4">Dictionaries</h1>

      <div>
      <div onClick={openPopup}>
        <Dict_card
          className="cursor-pointer"
          name={"Azerbaijani explanatory dictionary"}
          author={"ANAS Institute of Linguistics named after Nasimi"}
        />
      </div>
      <Popup isOpen={isOpen} onClose={closePopup} />
    </div>

      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
      <Dict_card name={"here"} author={"also here"} />
    </div>
  );
};

export default Dictionaries;
