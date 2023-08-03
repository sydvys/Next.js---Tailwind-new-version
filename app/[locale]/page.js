"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import AlertMessage from "./AlertMessage";
import { useState } from "react";

export default function Home({ children }) {
  const t = useTranslations("Index");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const heightClass = inputValue ? "h-80" : "h-32";

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <main className="h-full">
        <div
          className={`bg-gray-100 ${
            inputValue ? "h-80" : "h-32"
          } flex flex-col pt-5 items-center mx-auto w-2/5 xl:w-1/2 rounded-[5px]`}
        >
          <div className="p-3 flex items-start relative top-[-16px] w-full">
            <div className="relative flex items-start h-9 rounded-3px bg-white overflow-hidden w-full border-1 border-gray-300 ">
              <div className="grid place-items-start h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute top-1 left-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 placeholder:text-gray-500"
                type="text"
                id="search"
                placeholder={t("home.placeholder")}
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>

            <div className="relative bg-white">
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-sm pr-3 py-2 inline-flex items-center text-gray-400"
                type="button"
                onClick={() => setDropdownVisible(!dropdownVisible)}
              >
                <svg
                  className="w-2.5 h-2.5 mr-2 text-[#ff5f53]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                EN{" "}
              </button>

              <div
                id="dropdown"
                className={`absolute z-50 ${
                  dropdownVisible ? "block" : "hidden"
                } bg-[#475a95] divide-y divide-gray-100 rounded-lg shadow w-fit border-gray-500 border-2 `}
              >
                <ul
                  className="py-2 text-sm text-white"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a href="" className="block px-2 py-0.5 hover:bg-[#488bff]">
                      PY
                    </a>
                  </li>
                  <li>
                    <a href="" className="block px-2 py-0.5 hover:bg-[#488bff]">
                      AZ
                    </a>
                  </li>
                  <li>
                    <a href="" className="block px-2 py-0.5 hover:bg-[#488bff]">
                      EN
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full flex px-2 relative top-[-11px]">
            <button className="bg-[#ff5f53] text-white py-1 sm:px-4 rounded-l-[3px] w-full">
              {t("home.wordlist")}
            </button>
            <button className="bg-[#475a95] text-white py-1 sm:px-6 rounded-r-[3px] w-full">
              {t("home.entries")}{" "}
            </button>
          </div>

          <div className={` ${heightClass} flex `} >
            {inputValue && (
              <>
                <button className="h-fit bg-blue-500 text-white rounded">
                  Button 1
                </button>
                <button className="h-fit bg-green-500 text-white rounded">
                  Button 2
                </button>
                <button className="h-fit bg-pink-500 text-white rounded">
                  Button 2
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
