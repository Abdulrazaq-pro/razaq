"use client";

import styles from "../styles/Navbar.module.css";
// components/Navbar.js
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  //animationfrom up

  const up = useRef(null); // Reference to the element
  useEffect(() => {
    // Set up the GSAP animation with ScrollTrigger
    const element = up.current;
    gsap.fromTo(
      element,
      { y: -250, opacity: 40 }, // Start: offscreen to the right and invisible
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element, // Element to trigger the animation
          start: "top 80%", // Animation will start when the top of the element hits 80% of the viewport
          toggleActions: "play none none none", // Only play the animation when the trigger point is reached
        },
      }
    );

    // Cleanup on unmount
    // return () => {
    //   ScrollTrigger.kill();
    // };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="Navbar" className={`${styles.navbar_container} relative p-2`}>
      <ul className={styles.navbar_menu}>
        <li className={`${styles.navbar_menuHeader} m-1 item-center`}>
          {/* <img className="w-[100px]" src="/images/logo.png" alt="" /> */}
          {/* <a ref={up} className="" href="/">
            ABDUL- <span className="text-sec">RAZAQ</span>
          </a> */}

          <div className="">
            <a className="logo z-[1000] font-semibold" href="/">
              Abdul
              <span className=" bg-gradient-to-br from-primary via-primary/70 to-primary/30 bg-clip-text text-transparent ">
                Razaq
              </span>
            </a>
            <div className="flex items-center gap-1 -mt-1">
              <div className="h-[6px] w-8 bg-primary"></div>
              <p className="text-[7px]">portfolio</p>
            </div>
          </div>
          <button
            className={styles.menuContainer}
            onMouseLeave={() => setIsOpen(false)}
            onClick={toggleMenu}
          >
            <div
              className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
              id="hamburger"
            >
              <div className={styles.line}></div>
              <div className={styles.line}></div>
              <div className={styles.line}></div>
            </div>
          </button>
        </li>
        <li
          className={`${styles.navbar_menuContent} ${
            isOpen ? styles.open : ""
          }`}
          data-open={isOpen}
        >
          <ul>
            <li
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <a href="#about">About Me</a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("jobs")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <a href="#jobs">Jobs</a>
            </li>
            <li
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("review")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <a href="#review">Review</a>
            </li>
            <li>
              <button className={styles.theme_toggle} data-theme="unicorn">
                {/* <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M4.823 21.933l2.734-1.171-3.241-8.847-1.561 4.372 2.068 5.646zm-2.594-4.174l-2.229 6.241 3.903-1.672-1.674-4.569zm6.248 2.609l2.934-1.258-3.482-9.141-2.215-1.969-.872 2.443 3.635 9.925zm7.523-3.224l-6.453-5.736 2.785 7.308 3.668-1.572zm-.826-5.003l2.201-1.445c.23-.152.295-.462.143-.693-.152-.232-.463-.295-.692-.143l-2.201 1.445c-.231.151-.295.461-.144.692.096.147.256.226.418.226.095 0 .19-.026.275-.082m-2.993-4.312l1.112-2.388c.117-.25.008-.548-.242-.664-.251-.116-.548-.009-.665.242l-1.111 2.388c-.117.25-.008.547.242.664l.211.047c.189 0 .368-.107.453-.289m-2.627.709c1.539-2.963 1.644-5.73.314-8.222-.09-.169-.263-.265-.442-.265-.37 0-.621.398-.44.736 1.166 2.184 1.058 4.637-.32 7.29-.127.245-.031.547.214.674.073.038.152.057.23.057.18 0 .355-.099.444-.27m6.505 6.095c2.017-1.434 4.463-1.64 7.272-.613.327.119.672-.123.672-.47 0-.203-.125-.395-.328-.47-3.136-1.147-5.894-.9-8.196.738-.224.16-.277.472-.117.698.098.136.251.209.407.209.101 0 .202-.03.29-.092m3.757-6.757l-1.697.014.938 1.415-.511 1.618 1.635-.455 1.381.986.073-1.696 1.365-1.009-1.591-.592-.538-1.61-1.055 1.329zm-7.307 3.624c.276-.009.492-.24.483-.517-.056-1.627.36-1.937 1.377-2.051 1.689-.191 1.785-1.312 1.842-1.982.053-.637.071-.851.773-.903.63-.046 1.331-.16 1.76-.659.461-.538.466-1.358.402-2.164-.021-.276-.266-.478-.537-.459-.275.021-.481.262-.459.537.062.787.011 1.23-.165 1.434-.149.174-.48.271-1.074.314-1.553.114-1.644 1.179-1.697 1.816-.057.668-.082.973-.956 1.071-2.075.234-2.315 1.619-2.266 3.08.01.27.231.483.5.483h.017m7.842-8.675c0 1.006.818 1.824 1.825 1.824 1.006 0 1.824-.818 1.824-1.824 0-1.007-.818-1.825-1.824-1.825-1.007 0-1.825.818-1.825 1.825m-6.623-2.841c1.104 0 2 .897 2 2 0 1.104-.896 2-2 2-1.103 0-2-.896-2-2 0-1.103.897-2 2-2" />
                </svg> */}
                <a
                  href="/docs/Abdulrazaq's resume .pdf" // Change this to the actual path of your file
                  download="Abdulrazaq's resume" // Optionally specify the name for the downloaded file
                  className="text-blue-500 hover:underline"
                >
                  <img
                    className="w-[100px]"
                    src="/images/briefcase.svg"
                    alt=""
                  />
                </a>
              </button>
            </li>
          </ul>
        </li>
      </ul>
      <span className={styles.navbar_menuBlackout} data-open={isOpen}></span>
    </nav>
  );
};

export default Navbar;