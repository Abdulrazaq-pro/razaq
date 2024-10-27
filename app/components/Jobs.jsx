import React from "react";
import Image from "next/image";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Jobs = () => {
  const elements = useRef([]);
  useEffect(() => {
    // GSAP animation for all four elements, staggered
    gsap.fromTo(
      elements.current,
      { y: -20, opacity: 70 }, // Start offscreen to the right and invisible
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.2, // Elements animate one after the other with a 0.2s delay
        scrollTrigger: {
          trigger: elements.current[0], // Triggered when the first element hits the viewport
          start: "top 80%", // Animation will start when the top of the first element hits 80% of the viewport
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup on unmount
    // return () => {
    //   ScrollTrigger.kill();
    // };
  }, []);
  const elements2 = useRef([]);
  useEffect(() => {
    // GSAP animation for all four elements, staggered
    gsap.fromTo(
      elements2.current,
      { y: -20, opacity: 70 }, // Start offscreen to the right and invisible
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.2, // Elements animate one after the other with a 0.2s delay
        scrollTrigger: {
          trigger: elements2.current[0], // Triggered when the first element hits the viewport
          start: "top 80%", // Animation will start when the top of the first element hits 80% of the viewport
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup on unmount
    // return () => {
    //   ScrollTrigger.kill();
    // };
  }, []);
  const elements3 = useRef([]);
  useEffect(() => {
    // GSAP animation for all four elements, staggered
    gsap.fromTo(
      elements3.current,
      { y: -20, opacity: 70 }, // Start offscreen to the right and invisible
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.2, // Elements animate one after the other with a 0.2s delay
        scrollTrigger: {
          trigger: elements3.current[0], // Triggered when the first element hits the viewport
          start: "top 80%", // Animation will start when the top of the first element hits 80% of the viewport
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup on unmount
    // return () => {
    //   ScrollTrigger.kill();
    // };
  }, []);
  const elements4 = useRef([]);
  useEffect(() => {
    // GSAP animation for all four elements, staggered
    gsap.fromTo(
      elements4.current,
      { x: 100, opacity: 0.5 }, // Start offscreen to the right and invisible
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.2, // Elements animate one after the other with a 0.2s delay
        scrollTrigger: {
          trigger: elements4.current[0], // Triggered when the first element hits the viewport
          start: "top 80%", // Animation will start when the top of the first element hits 80% of the viewport
          toggleActions: "play none none none",
        },
      }
    );

    // Cleanup on unmount
    // return () => {
    //   ScrollTrigger.kill();
    // };
  }, []);
  return (
    <div
      id="jobs"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-white  uppercase py-4">
        PAST JOBS
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div class="w-full rounded-lg shadow bg-gradient-to-r from-neutral-800/30 via-neutral-700/30 to-neutral-600/30 outline outline-2 outline-neutral-700/20">
          <div className="p-10 rounded-md w-full ">
            <Image
              src="/images/ticketmaster copy.png"
              alt="product image"
              layout="responsive"
              width={100} // This represents the percentage width of the container (100%).
              height={100} // Adjust this to maintain the aspect ratio of the image (or use auto for dynamic height).
              className="object-cover rounded-md "
            />
          </div>

          <div class="px-5">
            <div class="lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3 items-center">
              <div
                ref={(el) => (elements.current[0] = el)}
                class="inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <div
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://www.figma.com/files/team/1290452465899574316"
                  target="_blank"
                >
                  <img
                    src="/images/html.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5"
                  />
                  <span class="ml-2 text-[9px]">html</span>
                </div>
              </div>
              <div
                ref={(el) => (elements.current[1] = el)}
                class="inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <div
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/css.svg"
                    alt="Github"
                    class="shrink-0 size-2.5"
                  />
                  <span class="ml-2 text-[9px]">css</span>
                </div>
              </div>
              <div
                ref={(el) => (elements.current[2] = el)}
                class="inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <div
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/javascript.svg"
                    alt="Github"
                    class="shrink-0 size-2.5"
                  />
                  <span class="ml-2 text-[9px]">JS</span>
                </div>
              </div>
              <div
                ref={(el) => (elements.current[3] = el)}
                class="inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <div
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/sql.svg"
                    alt="Github"
                    class="shrink-0 size-2.5"
                  />
                  <span class="ml-2 text-[9px]">SQL</span>
                </div>
              </div>
            </div>
            <h5 class="text-xl font-semibold tracking-tight text-white">
              Ticketmaster Clone
            </h5>

            <div class="text-white mt-2.5 mb-5">
              clone of the popular Ticketmaster
            </div>
          </div>

          <div className="flex justify-around pb-3">
            <a
              href="https://www.karimahlawal.com"
              className="underline text-neutral-200"
            >
              view site
            </a>
            <a
              href="https://github.com/Abdulrazaq-pro/"
              className="underline text-neutral-200"
            >
              github
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div class=" w-full rounded-lg shadow bg-gradient-to-r from-neutral-800/30 via-neutral-700/30 to-neutral-600/30 outline outline-2 outline-neutral-700/20">
          <div className="p-10 rounded-md w-full">
            <Image
              src="/images/daratech copy.png"
              alt="product image"
              layout="responsive"
              width={100} // This represents the percentage width of the container (100%).
              height={100} // Adjust this to maintain the aspect ratio of the image (or use auto for dynamic height).
              className="object-cover rounded-md"
            />
          </div>

          <div class="px-5">
            <div class=" lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3 items-center">
              <div
                ref={(el) => (elements2.current[0] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <div
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://www.figma.com/community/file/1179068859697769656"
                  target="_blank"
                >
                  <img
                    src="/images/figma.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">figma</span>
                </div>
              </div>
              <div
                ref={(el) => (elements2.current[1] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <div
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/github.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">github</span>
                </div>
              </div>
              <div
                ref={(el) => (elements2.current[2] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <div
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/nextjs.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">nextJS</span>
                </div>
              </div>
            </div>
            <h5 class="text-xl font-semibold tracking-tight  text-white">
              DaraTech&apos;s Landing Page
            </h5>

            <div class=" text-white mt-2.5 mb-5">
              Landing page for a tech company Daratech
            </div>
          </div>
          <div className="flex justify-around pb-3">
            <a
              href="https://daratech.vercel.app/"
              className="underline text-neutral-200"
            >
              view site
            </a>
            <a
              href="https://github.com/Abdulrazaq-pro/daratech"
              className="underline text-neutral-200"
            >
              github
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div class="w-full rounded-lg shadow bg-gradient-to-r from-neutral-800/30 via-neutral-700/30 to-neutral-600/30 outline outline-2 outline-neutral-700/20">
          <div className="p-10 rounded-md w-full">
            <Image
              src="/images/karimah.jpg"
              alt="product image"
              layout="responsive"
              width={100} // This represents the percentage width of the container (100%).
              height={100} // Adjust this to maintain the aspect ratio of the image (or use auto for dynamic height).
              className="object-cover rounded-md"
            />
          </div>

          <div class="px-5">
            <div class=" lg:ms-1 flex xl:gap-x-3 gap-x-1 my-3 items-center">
              <div
                ref={(el) => (elements3.current[0] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://www.figma.com/community/file/1179068859697769656"
                  target="_blank"
                >
                  <img
                    src="/images/react.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">react</span>
                </a>
              </div>
              <div
                ref={(el) => (elements3.current[1] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/github.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">github</span>
                </a>
              </div>
              <div
                ref={(el) => (elements3.current[2] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/tailwind.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">tailwind</span>
                </a>
              </div>
            </div>
            <h5 class="text-xl font-semibold tracking-tight  text-white">
              Karimah&apos;s Porfolio
            </h5>

            <div class=" text-white mt-2.5 mb-5">
              A portfolio website for a linkedin manager
            </div>
          </div>

          <div className="flex justify-around pb-3">
            <a
              href="https://www.karimahlawal.com"
              className="underline text-neutral-200"
            >
              view site
            </a>
            <a
              href="https://github.com/Abdulrazaq-pro/Karimah-Portfolio"
              className="underline text-neutral-200"
            >
              github
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div
          href="https://www.karimahlawal.com"
          class="w-full rounded-lg shadow bg-gradient-to-r from-neutral-800/30 via-neutral-700/30 to-neutral-600/30 outline outline-2 outline-neutral-700/20"
        >
          <div className="p-10 rounded-md w-full">
            <Image
              src="/images/luxe.png"
              alt="product image"
              layout="responsive"
              width={100} // This represents the percentage width of the container (100%).
              height={100} // Adjust this to maintain the aspect ratio of the image (or use auto for dynamic height).
              className="object-cover rounded-md"
            />
          </div>

          <div class="px-5 ">
            <div class=" lg:ms-1 flex xl:gap-x-3 gap-x-1 my-3 items-center">
              <div
                ref={(el) => (elements4.current[0] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://www.figma.com/community/file/1179068859697769656"
                  target="_blank"
                >
                  <img
                    src="/images/react.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">react</span>
                </a>
              </div>
              <div
                ref={(el) => (elements4.current[1] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/github.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">github</span>
                </a>
              </div>
              <div
                ref={(el) => (elements4.current[2] = el)}
                class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1"
              >
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/tailwind.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">tailwind</span>
                </a>
              </div>
            </div>
            <h5 class="text-xl font-semibold tracking-tight  text-white">
              Luxe&apos;s Site
            </h5>

            <div class=" text-white mt-2.5 mb-5">Official website for Luxe</div>
          </div>
          <div className="flex justify-around pb-3">
            <a
              href="https://hotel-one-pearl.vercel.app/"
              className="underline text-neutral-200"
            >
              view site
            </a>
            <a
              href="https://github.com/Abdulrazaq-pro/Hotel"
              className="underline text-neutral-200"
            >
              github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
