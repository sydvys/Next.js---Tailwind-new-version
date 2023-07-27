"use client";

// import "./globals.css";
// import { Inter } from "next/font/google";
import Link from "next-intl/link";
import { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const [isProjectOpen, setProjectOpen] = useState(false);  

  return (
    
    <nav className="w-full z-10 ">
    <div className="justify-between md:items-center md:flex px-10">
      <div>
        <div className="flex items-center justify-between py-4 md:py-8 md:block">
          <Link href="/">
            <div className="text-xs">
              <img
                className="w-20 md:w-32"
                src="./logo.svg"
                alt="logo"
              />
            </div>
          </Link>
          <div className="md:hidden relative bottom-3">
            <button
              className=" text-gray-700 rounded-md outline-none focus:border-gray-400"
              onClick={() => setNavbar(!navbar)}
            >
            
              {navbar ? (
                <svg
                  className="h-6 w-6 text-white z-50 absolute top-0 -right-3"
                  width="5"
                  height="5"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div>
        <div
          className={`flex-1 justify-self-center md:block relative" ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex bg-[#3c4e88] absolute inset-x-0 top-0 md:relative z-10">
            <li className="pb-3 text-lg py-2 px-3 justify-start hidden md:inline ">
              <Link
                target="_blank"
                href="https://www.facebook.com/kibrittech/"
                onClick={() => setNavbar(!navbar)}
              >
                <img
                  className="w-7 h-93 mx-auto"
                  src="./facebook.svg"
                  alt="facebook_logo"
                />
              </Link>
            </li>

            <li className="text-md text-white py-2 px-3">
              <Link href="/Help" onClick={() => setNavbar(!navbar)}>
                Help
              </Link>
            </li>
            <li className="text-md text-white py-2 px-3">
              <Link
                href="/Dict"
                onClick={() => setNavbar(!navbar)}
              >
                Dictionaries
              </Link>
            </li>

            <li className="text-md text-white py-2 px-3 relative">
              <div>
                <button
                  className="inline-flex w-full gap-x-1.5 rounded-md text-md"
                  onClick={() => setProjectOpen(!isProjectOpen)}
                >
                  Project
                  <ChevronDownIcon
                    className={`h-4 text-[#ff5f53] mt-2 transform ${
                      isProjectOpen ? "rotate-180" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              {isProjectOpen && (
                <div className="my-2 md:absolute left-0 z-10 w-48 origin-top-right">
                  <div className="">
                    <a
                      href="/About"
                      className="block px-4 py-2 text-md text-white"
                    >
                      About project
                    </a>
                    <a
                      href="/Thanks"
                      className="block px-4 py-2 text-md text-white"
                    >
                      Thanks
                    </a>
                    <a
                      href="/Participate"
                      className="block px-4 pt-2 text-md text-white"
                    >
                      Participate in project
                    </a>
                  </div>
                </div>
              )}
            </li>

            <li className="text-md text-white py-2 px-3">
              <Link href="/Mobile" onClick={() => setNavbar(!navbar)}>
                Mobile App
              </Link>
            </li>
            <li className="text-md text-white py-2 px-3">
              <Link
                href="/Contact"
                onClick={() => setNavbar(!navbar)}
              >
                Contact us
              </Link>
            </li>

            <div className="flex flex-row justify-between">
              <li className="pb-3 text-lg py-2 px-3 justify-start md:hidden">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/kibrittech/"
                  onClick={() => setNavbar(!navbar)}
                >
                  <img
                    className="w-7 h-93 mx-auto"
                    src="./facebook.svg"
                    alt="facebook_logo"
                  />
                </Link>
              </li>

              <li className="text-xl text-white pl-3">
                <Menu
                  as="div"
                  className="relative inline-block text-left"
                >
                  <div>
                    <Menu.Button className="inline-flex justify-center gap-x-1.5 py-2 text-[18px]">
                      En
                      <ChevronDownIcon
                        className="h-4 text-[#ff5f53] mt-2"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    // enter="transition ease-out duration-100"
                    // enterFrom="transform opacity-0 scale-95"
                    // enterTo="transform opacity-100 scale-100"
                    // leave="transition ease-in duration-75"
                    // leaveFrom="transform opacity-100 scale-100"
                    // leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 origin-top-right">
                      <div className="py-1">
                        <Menu.Item>
                          <a
                            href="#"
                            className="block px-4 py-1 text-sm text-white"
                          >
                            Az
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <Menu.Item>
                            <a
                              href="#"
                              className="block px-4 py-1 text-sm text-white"
                            >
                              Ru
                            </a>
                          </Menu.Item>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </nav>  
  )
}

export default Header