'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';
// import { Link, Hrehref, useLocation } from 'react-router-dom';

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // const location = useLocation();

  const [isHovered, setIsHovered] = useState(false);
  const [isResourceHovered, setIsResourceHovered] = useState(false);

  // large screen nav list
  const NavLists = () => {
    return (
      <>
        <Link
          href={'#'}
          className={
            'capitalize flex justify-start items-center gap-2 text-sm sm:font-bold'
          }
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          onClick={() => setIsHovered((prev) => !prev)}
          style={{ color: '#0b3558' }}
        >
          solutions{' '}
          <FaChevronDown
            className={
              isHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </Link>
        <Link
          href="/our-work"
          className={
            'capitalize flex justify-start items-center gap-2 text-sm sm:font-bold'
          }
          onClick={() => {
            scrollToTop();
          }}
        >
          our work
        </Link>
        <Link
          href="/pricing"
          className={'capitalize  text-sm sm:font-bold'}
          onClick={() => scrollToTop()}
        >
          pricing
        </Link>
        <Link
          href="#"
          className={
            'capitalize  flex justify-start items-center gap-2  text-sm sm:font-bold'
          }
          onMouseOver={() => setIsResourceHovered(true)}
          onMouseOut={() => setIsResourceHovered(false)}
          onClick={() => setIsResourceHovered((prev) => !prev)}
          style={{ color: '#0b3558' }}
        >
          resources{' '}
          <FaChevronDown
            className={
              isResourceHovered ? `rotate-180 transition-all` : 'transition-all'
            }
          />
        </Link>
        <Link href="/contact" className={'capitalize  text-sm sm:font-bold'}>
          contact
        </Link>
      </>
    );
  };

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          type: 'spring',
        }}
        className="mx-auto transition-all bg-white/60 w-full h-20 relative top-0 border-b-1  border-gray-200 z-20"
        id="navBarFix"
        // ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl border-b-1 border-gray-200 bg-white/60 p-4 w-full h-20 m-auto lg:py-0.5"
        >
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
                src="/images/navbar/Designpro-logo-large.png"
                alt="logo"
                className="w-60"
                loading="lazy"
              />
            </Link>
          </div>
          {/* large screen */}
          <div
            id="menu"
            className="hidden justify-end items-center w-full lg:flex"
          >
            <ul className="flex justify-center mx-auto items-center gap-5">
              <NavLists />
            </ul>
            <div id="contact" className="flex gap-1">
              {location.pathname.toString() !== '/log-in' && (
                <Link
                  href="/log-in"
                  className="transition-all duration-200 text-sm px-3 py-2.5 text-gray-800 font-bold rounded-md text-dark hover:text-gray-950 hover:underline"
                  onClick={() => {
                    scrollToTop();
                  }}
                >
                  Log In
                </Link>
              )}
              <Link
                href="/contact"
                className="transition-all duration-200 text-sm px-3 py-2.5 text-blue-500 border border-blue-500 rounded-md font-bold hover:text-white hover:bg-blue-300 "
                onClick={() => {
                  scrollToTop();
                }}
              >
                Get Started
              </Link>
              <Link
                href="/book-a-call"
                className="transition-all duration-200 text-sm rounded-md bg-blue-600 px-3 py-2.5 font-medium text-white hover:bg-blue-500/90"
                onClick={() => {
                  scrollToTop();
                }}
              >
                Book A Call
              </Link>
            </div>
          </div>
          <div
            // className={!isNavOpen ? `block lg:hidden` : 'hidden lg:hidden'}
            onClick={() => {
              // setIsNavOpen((prev) => !prev);
            }}
          >
            <RiMenu3Fill className="text-3xl" />
          </div>
          <div
            // className={isNavOpen ? `block lg:hidden` : 'hidden lg:hidden'}
            onClick={() => {
              // setIsNavOpen((prev) => prev);
            }}
          >
            <RiCloseFill className="text-3xl" />
          </div>
        </nav>
      </motion.div>

      {/*solutions dropdown menu */}
      <div
        className={
          isHovered
            ? ` transition-all flex justify-center items-center place-items-center m-auto`
            : 'transition-all hidden top-50 opacity-0'
        }
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        onClick={() => setIsHovered((prev) => !prev)}
      >
        <div
          className="hidden fixed rounded-xl bg-white top-[48px] m-auto flex-col justify-start items-start flex-wrap shadow-xl w-[40rem] lg:flex"
          style={{ zIndex: 1122 }}
        >
          {/* <DropDown
            href="photoshop-design"
            title="photoshop design"
            src="/images/navbar/photoshop-design.png"
          />
          <DropDown
            href="/graphic-design"
            title="graphic design"
            src="/images/navbar/graphic-design.svg"
          />
          <DropDown
            href="/custom-illustrations"
            title="Custom Illustrations"
            src="/images/navbar/design-blog.png"
          />

          <DropDown
            href="presentation-design"
            title="presentation design"
            src="/images/navbar/web-design.svg"
          />
          <DropDown
            href="motion-graphics"
            title="motion graphics"
            src="/images/navbar/motion-graphic.png"
          />
          <DropDown
            href="video-editing"
            title="video editing"
            src="/images/navbar/video-editing.png"
          /> */}
        </div>
      </div>

      {/* resources droopDown menu */}
      {/* dropdown menu */}
      <div
        className={
          isResourceHovered
            ? ` transition-all flex justify-center items-center place-items-center m-auto `
            : 'transition-all hidden top-50 opacity-0'
        }
        onMouseOver={() => setIsResourceHovered(true)}
        onMouseOut={() => setIsResourceHovered(false)}
        onClick={() => setIsResourceHovered((prev) => !prev)}
      >
        <div
          className="hidden fixed rounded-xl bg-white top-[48px] right-[30%] m-auto flex-col justify-center items-center flex-wrap shadow-xl w-[18rem] lg:flex"
          style={{ zIndex: 1122 }}
        >
          {/* <DropDown
            href="/watch-demos"
            title="Watch Demos"
            src="/images/navbar/video-editing.png"
            className={'w-full'}
          />
          <DropDown
            href="/guides"
            title="guides"
            src="/images/navbar/guides.png"
            className={'w-full'}
          />
          <DropDown
            href="/design-blogs"
            title="design blogs"
            src="/images/navbar/design-blog.png"
            className={'w-full'}
          /> */}
          {/* <DropDown
            title="case studies"
            src="/images/navbar/case-study.png"
            className={'w-full'}
          /> */}
        </div>
      </div>

      {/* small screen */}
      <OutsideClickHandler
        onOutsideClick={() => {
          // setIsNavOpen(false);
        }}
      >
        <div
          id="menu"
          // className={
          //   isNavOpen
          //     ? 'transition-all fixed top-20 flex justify-start items-start flex-col w-full h-full pl-5 pt-5 gap-10 border rounded-md bg-white m-auto overflow-y-scroll lg:hidden'
          //     : 'hidden'
          // }
          style={{ zIndex: 122 }}
        >
          <ul className="flex justify-start items-start flex-col leading-6">
            {/* <NavListsSmallScreen /> */}
            <div className="flex flex-col-reverse gap-4 justify-end pr-16 sm:flex lg:pr-0">
              {/* <Link
                href="/#"
                className="rounded-md px-7 text-center py-3 text-base font-medium text-blue-500 hover:bg-blue-500/90"
              >
                Sign Up
              </Link> */}

              <Link
                href="/contact"
                className="transition-all duration-200 text-sm px-3 py-2.5 text-blue-500 border border-blue-500 rounded-md font-bold hover:text-white hover:bg-blue-300 "
                onClick={() => {
                  scrollToTop();
                  // setIsNavOpen(false);
                }}
              >
                Get Started
              </Link>
              <Link
                href="/book-a-call"
                className="transition-all duration-200 text-sm rounded-md bg-blue-600 px-3 py-2.5 font-medium text-white hover:bg-blue-500/90"
                onClick={() => {
                  scrollToTop();
                  // setIsNavOpen(false);
                }}
              >
                Book A Call
              </Link>
              <Link
                href="/log-in"
                className="transition-all underline duration-200 text-sm px-3 shadow text-center py-2.5 text-gray-800 font-bold rounded-md text-dark hover:text-gray-950 hover:underline"
                onClick={() => {
                  scrollToTop();
                  // setIsNavOpen(false);
                }}
              >
                Log In
              </Link>
            </div>
          </ul>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
