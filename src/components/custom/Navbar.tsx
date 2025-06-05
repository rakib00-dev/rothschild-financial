'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
// import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // window onLoad Entry
  const navBarFix = useRef<HTMLDivElement>(null);
  const header_section = useRef(null);

  // const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      if (navBarFix.current && header_section.current) {
        navBarFix.current.style.top = '0';
      }
    });

    // header NavBar onScroll
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      if (scrollValue >= 82) {
        if (navBarFix.current) {
          navBarFix.current.style.top = '0';
          navBarFix.current.style.position = 'fixed';
        }
      } else {
        if (navBarFix.current) {
          navBarFix.current.style.top = '0';
          navBarFix.current.style.position = 'relative';
        }
      }
    });

    console.log(navBarFix);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: 'spring',
        }}
        className={`mx-auto transition-all bg-white w-full h-20 top-5 border-b-1 border-gray-200 z-20 `}
        id="navBarFix"
        ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-center items-center px-6 md:px-12 py-4 max-w-7xl border-b-1 border-gray-200 bg-white/60 p-4 w-full h-20 m-auto lg:py-0.5"
        >
          <ul className="flex justify-center mx-auto items-center gap-5">
            <div
              // className={!isNavOpen ? `block lg:hidden` : 'hidden lg:hidden'}
              onClick={() => {
                // setIsNavOpen((prev) => !prev);
              }}
            >
              <RiMenu3Fill className="text-3xl rotate-180" />
            </div>
            <div
              className={false ? `block lg:hidden` : 'hidden lg:hidden'}
              onClick={() => {}}
            >
              <RiCloseFill className="text-3xl" />
            </div>
          </ul>

          <div id="menu" className=" justify-center items-center w-full flex">
            <div
              id="logo"
              className="text-md font-medium w-32 md:w-64 md:text-lg"
            >
              <Link
                href="/"
                className="flex items-center"
                onClick={() => {
                  scrollToTop();
                }}
              >
                <img
                  src="/images/navbar/rothschildandco_svg.svg"
                  alt="logo"
                  className="w-60"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          <div
            id="language"
            className="lg:flex gap-1 font-bold cursor-pointer hidden"
          >
            EN
          </div>
        </nav>
      </motion.div>

      {/* small screen */}
      {/* <OutsideClickHandler
        onOutsideClick={() => {
          // setIsNavOpen(false);
        }}
      ></OutsideClickHandler> */}
    </>
  );
};

export default Navbar;
