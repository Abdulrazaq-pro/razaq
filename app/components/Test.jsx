import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

const Test = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const createClipPath = (amplitude, frequency, phase) => {
      const points = [];
      const steps = 100; // Number of points along the top edge
      const angle = 10; // Angle to tilt the wave (in percentage)

      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * 100; // X value from 0% to 100%
        const y =
          amplitude * Math.sin(((frequency * i) / steps) * Math.PI * 2 + phase); // Sine wave for Y value
        const yOffset = (x / 100) * angle; // Slanting the wave by increasing the y offset progressively
        points.push(`${x}% ${y + yOffset + 10}%`); // Adjusted y to start from a baseline (10%) and add the tilt
      }

      return `polygon(0 0, ${points.join(", ")}, 100% 100%, 0% 100%)`;
    };

    const getAmplitude = () => {
      const screenWidth = window.innerWidth;
      return screenWidth < 768 ? 2 : 5; // Smaller amplitude for mobile (reduce wave height)
    };

    const animateClipPath = () => {
      gsap.to(
        {},
        {
          duration: 5,
          repeat: -1,
          ease: "none",
          onUpdate: () => {
            const time = performance.now() / 1000; // Time variable for phase shift
            const clipPath = createClipPath(getAmplitude(), 3, time * 2); // Adjust amplitude for mobile
            divRef.current.style.clipPath = clipPath;
          },
        }
      );
    };

    // Re-calculate on resize
    const handleResize = () => {
      animateClipPath();
    };

    window.addEventListener("resize", handleResize);
    animateClipPath();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative ">
      <div
        ref={divRef}
        className="bg-white py-24 shadow-lg relative"
        style={{
          clipPath: "polygon(0 0, 100% 9%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12 bg z-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 "
          ></div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div className=" ">
              <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl ">
                Build in your way but with our experts{" "}
                <span className="text-primary ">Support.</span>
              </h1>
              <p className="mt-8 text-gray-600 ">
                Develop your front-end web project in your unique style, but
                with the guidance and expertise of our professionals.
              </p>
              <div>
                <form action="" className="w-full mt-12">
                  <div className="relative flex items-center px-2 p-1 rounded-full bg-white  border-primary/10 shadow-md md:p-2 lg:pr-3">
                    <div className="pl-6 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 m-auto fill-blue-900/60 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      autocomplete="email"
                      placeholder="Your mail address"
                      className="w-full p-4 rounded-full placeholder-gray-600  bg-transparent"
                      type="email"
                    />
                    <div className="md:pr-1.5 lg:pr-0">
                      <button
                        type="button"
                        title="Start buying"
                        className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary  before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                      >
                        <span className="relative w-max text-white  font-semibold block">
                          Send
                        </span>
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative h-6 w-6 mx-auto text-white  md:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg> */}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale ">
                <Image
                  src="/images/clients/airbnb.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Airbnb Logo"
                  width={48}
                  height={48}
                />
                <Image
                  src="/images/clients/ge.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="GE Logo"
                  width={48}
                  height={48}
                />
                <Image
                  src="/images/clients/coty.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Coty Logo"
                  width={48}
                  height={48}
                />
                <Image
                  src="/images/clients/microsoft.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Microsoft Logo"
                  width={48}
                  height={48}
                />
              </div> */}
            </div>
            <div className="relative ms-4">
              <Image
                className="w-full rounded-md"
                src="/images/prof.jpg"
                alt="Hero Image"
                width={700}
                height={800}
                layout="responsive"
              />
              <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6  "></div>

              {/* SVG */}
              <div className="absolute bottom-0 start-0">
                <svg
                  className="w-2/3 ms-auto h-auto text-white "
                  width="630"
                  height="451"
                  viewBox="0 0 630 451"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="531"
                    y="352"
                    width="99"
                    height="99"
                    fill="currentColor"
                  />
                  <rect
                    x="140"
                    y="352"
                    width="106"
                    height="99"
                    fill="currentColor"
                  />
                  <rect
                    x="482"
                    y="402"
                    width="64"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="433"
                    y="402"
                    width="63"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="384"
                    y="352"
                    width="49"
                    height="50"
                    fill="currentColor"
                  />
                  <rect
                    x="531"
                    y="328"
                    width="50"
                    height="50"
                    fill="currentColor"
                  />
                  <rect
                    x="99"
                    y="303"
                    width="49"
                    height="58"
                    fill="currentColor"
                  />
                  <rect
                    x="99"
                    y="352"
                    width="49"
                    height="50"
                    fill="currentColor"
                  />
                  <rect
                    x="99"
                    y="392"
                    width="49"
                    height="59"
                    fill="currentColor"
                  />
                  <rect
                    x="44"
                    y="402"
                    width="66"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="234"
                    y="402"
                    width="62"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="334"
                    y="303"
                    width="50"
                    height="49"
                    fill="currentColor"
                  />
                  <rect x="581" width="49" height="49" fill="currentColor" />
                  <rect x="581" width="49" height="64" fill="currentColor" />
                  <rect
                    x="482"
                    y="123"
                    width="49"
                    height="49"
                    fill="currentColor"
                  />
                  <rect
                    x="507"
                    y="124"
                    width="49"
                    height="24"
                    fill="currentColor"
                  />
                  <rect
                    x="531"
                    y="49"
                    width="99"
                    height="99"
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* End SVG */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
