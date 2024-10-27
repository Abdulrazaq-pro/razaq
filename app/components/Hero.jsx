"use client";

import styles from "../styles/Hero.module.css";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  //underline
  // Animate the underline path with GSAP
  // useEffect(() => {
  //   // GSAP animation for the underline path
  //   gsap.fromTo("#underline-path",
  //     { strokeDasharray: 200, strokeDashoffset: 200 },  // Start with the path hidden
  //     { strokeDashoffset: 0, duration: 20, ease: "power2.out" }  // Animate the stroke from left to right
  //   );
  // }, []);

  //down
  const down = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      down.current,
      {
        y: 200, // Starting position (200px below the default position)
        opacity: 0, // Start with the image hidden
      },
      {
        y: 0, // End at the default position
        opacity: 1, // Fade the image back to full opacity
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Easing effect for a smooth animation
      }
    );
  }, []);

  // div jumper
  const divRef = useRef(null); // Create a reference for the div

  useEffect(() => {
    gsap.to(divRef.current, {
      y: -100, // Move up 100px
      duration: 0.5, // Jump up for 0.5 seconds
      ease: "power1.out", // Easing for smoothness
      yoyo: true, // Come back down
      repeat: 1, // Repeat once (jump once)
    });
  }, []); // Runs once when the component mounts
  return (
    <div className={`${styles.whole} relative px-2  `}>
      <div className="absolute top-[12%] left-0 bg-blue-500 p-4 z-[1]">
        {/* Empty div for the solid background box */}
      </div>
      <img
        className="absolute opacity-40 md:opacity-65 top-[12%] left-0 w-16 sm:w-20 md:w-40 lg:w-48 z-[1]" // Width adjustments while keeping aspect ratio
        src="/images/dots.svg"
        alt="dots"
      />

      <div className={`${styles.hero} pt-32`}>
        <div className={styles.heroContent}>
          <div className="text-white text-3xl md:text-5xl lg:text-7xl font-bold box">
            Hi! Welcome to My
            <span ref={divRef} className="text-primary jump">
              {" "}
              Portfolio{" "}
            </span>
          </div>
          <p
            className={`${styles.subtitle}  text-base md:text-lg lg:text-xl xl:text-3xl my-5 text-neutral-300`}
          >
            I&apos;m a{" "}
            <span class="relative text-sec font-bold text-2xl inline-block">
              Full-StAcK
              <svg
                id="underline"
                class="absolute bottom-[-8px] left-0 w-full h-6 z-[20000]"
                viewBox="0 0 100 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="underline-path"
                  d="M0 10 C 20 25, 80 5, 100 10"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  fill="transparent"
                />
              </svg>
            </span>{" "}
            website developer
            <br />
            Let’s build your online presence quickly and efficiently.
          </p>
        </div>
      </div>
      
      <div class="py-2">
        <div class="flex justify-center my-3">
          <div
            href="./master-library"
            class="inline-flex items-center gap-2 p-2.5 bg-primary/25 rounded-full border border-gray-300 opacity-100 hover:opacity-90 mb-4"
          >
            <div class="flex items-center justify-center w-8 h-8 p-2 bg-gray-800 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-full text-white"
              >
                <path
                  d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div class="text-white ">
              <p class="font-semibold text-sm">Learn a little about ME!</p>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={down}
        className="w-[85%] md:w-[70%] mx-auto rounded-tr-3xl rounded-tl-3xl overflow-hidden z-[300]"
        style={{
          boxShadow:
            "0 0 0 10px rgba(255, 255, 255, 0.2), 0 0 0 15px rgba(255, 255, 255, 0.1)",
        }}
      >
        <img
          ref={down}
          src="/images/vscode.jpg"
          alt="Your Image"
          className="w-full"
        />
      </div>
      <div className={`${styles.backgroundPattern}`} />
    </div>
  );
}
