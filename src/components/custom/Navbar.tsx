'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { PiGreaterThanBold } from 'react-icons/pi';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
// import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const menus = [
    'Global Advisory',
    'Wealth Management',
    'Asset Management',
    'Alternative Assets',
    'About us',
    'Corporate Sustainability',
    'Careers',
    'Newsroom',
    'Simplified tender offer filed by Concordia',
    'Contact us',
  ];

  // window onLoad Entry
  const navBarFix = useRef<HTMLDivElement>(null);

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

  useEffect(() => {
    if (navBarFix.current) {
      navBarFix.current.style.top = '0';
    }

    const handleScroll = () => {
      const scrollValue = window.scrollY;
      if (navBarFix.current) {
        navBarFix.current.style.top = '0';
        navBarFix.current.style.position =
          scrollValue >= 82 ? 'fixed' : 'relative';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {' '}
      <div
        className={`transition-all grid place-items-start px-4 md:px-20 duration-300 fixed h-svh w-full bg-[var(--menu-bg)] text-white pt-25 z-30 ${
          isNavMenuOpen ? 'top-0' : '-top-[100%]'
        }`}
      >
        <div
          className={`cursor-pointer absolute left-6 md:left-12 top-6 md:top-8 z-40 ${
            !isNavMenuOpen ? `hidden` : 'block text-[var(--footer-link)]'
          }`}
          onClick={() => {
            setIsNavMenuOpen(false);
          }}
        >
          <RiCloseFill className="text-3xl" />
        </div>
        {menus.map((e) => (
          <a
            href="#"
            className="transition-all duration-300 flex justify-between gap-10 items-center w-[400px] md:text-2xl menuLinkHover"
            key={e}
          >
            {e}
            <PiGreaterThanBold className="h-4 w-4" />
          </a>
        ))}
      </div>
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
          <div className="aboslute z-40 left-0">
            <div
              className={`cursor-pointer relative z-40 ${
                !isNavMenuOpen ? `block` : 'hidden'
              }`}
              onClick={() => {
                setIsNavMenuOpen((prev) => !prev);
              }}
            >
              <RiMenu3Fill className="text-3xl rotate-180" />
            </div>
            <div
              className={`cursor-pointer relative z-40 ${
                !isNavMenuOpen ? `hidden` : 'block text-[var(--footer-link)]'
              }`}
              onClick={() => {
                setIsNavMenuOpen(false);
              }}
            >
              <RiCloseFill className="text-3xl" />
            </div>
          </div>
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
                  className="w-50"
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
    </>
  );
};

export default Navbar;
