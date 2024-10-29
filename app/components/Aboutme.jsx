import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Aboutme = () => {
  const right = useRef(null);
  const zoom = useRef(null);
  const textRef = useRef(null);

  // Image reveal animation
  useEffect(() => {
    const element = right.current;
    gsap.fromTo(
      element,
      { x: 500, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  //zoom
  useEffect(() => {
    const element = zoom.current;
    gsap.fromTo(
      element,
      { scale: 0.7, opacity: 0.4 }, // Start with a smaller scale and 0 opacity
      {
        scale: 1, // Zoom to full size
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  // Ball animation
  useEffect(() => {
    gsap.to(".ball", {
      x: 100,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Icon animations
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".icon1",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .to(".icon1", {
        y: 10,
        duration: 0.2,
        repeat: 1,
        yoyo: true,
        delay: 0.8,
      });
  }, []);

  useEffect(() => {
    gsap.to(".icon2", {
      scrollTrigger: {
        trigger: ".icon2",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: -20,
      duration: 1,
      repeat: 1,
      yoyo: true,
      delay: 3,
    });
  }, []);

  // Typewriter animation with fixed space
  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 3,
      text: "I&apos;m a self-taught Full Stack Developer with 4 years of experience building modern, responsive websites and web applications. I specialize in working with the latest frameworks like React and Next.js, and I’m passionate about creating visually appealing and high-performing solutions. My goal is to deliver sleek and functional products that meet both business needs and user expectations.",
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div id="about" className="relative">
      <div className="bg-white rounded-[3rem] py-8 md:py-12 relative z-[99]">
        <div>
          <div className="max-w-[75rem] mx-auto px-8 sm:px-10 lg:px-12 my-12">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
              <div>
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight ">
                  <div className="relative inline-block text-xl sm:text-3xl lg:text-4xl">
                    Abdul-Razaq
                    <div className="absolute left-0 top-full w-6 h-[2.5px] bg-blue-500 rounded-full ball"></div>
                  </div>
                  <div>
                    Know more<span className="text-primary"> About me</span>
                  </div>
                </h1>
                <p
                  ref={textRef}
                  className="mt-3 text-lg text-gray-800"
                  style={{ minHeight: "5rem" }} // Adjust this value based on your needs
                >
                  I&apos;m a self-taught Full Stack Developer with 4 years of
                  experience building modern, responsive websites and web
                  applications. I specialize in working with the latest
                  frameworks like React and Next.js, and I’m passionate about
                  creating visually appealing and high-performing solutions. My
                  goal is to deliver sleek and functional products that meet
                  both business needs and user expectations.
                </p>

                <div className="lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3">
                  <div className="icon1 inline-flex items-center justify-center bg-gray-200 rounded-lg p-1">
                    <a
                      className="inline-flex shrink-0 justify-center items-center size-10 font-medium text-gray-800"
                      href="mailto:adisaabdulra@gmail.com"
                      target="_blank"
                    >
                      <img className="size-5" src="/images/gmail.jpeg" alt="" />
                    </a>
                  </div>
                  <div className="icon1 inline-flex items-center justify-center bg-gray-200 rounded-lg p-1">
                    <a
                      className="inline-flex shrink-0 justify-center items-center size-10 font-medium text-gray-800"
                      href="https://wa.me/2349055002293"
                      target="_blank"
                    >
                      <img className="size-5" src="/images/whatsapp.png" />
                    </a>
                  </div>

                  <div className="icon2 inline-flex items-center justify-center bg-gray-200 rounded-lg p-1">
                    <a
                      className="inline-flex shrink-0 justify-center items-center size-10 font-medium rounded-full text-gray-800"
                      href="https://github.com/Abdulrazaq-pro"
                      target="_blank"
                    >
                      <img
                        className="shrink-0 size-5"
                        src="/images/github.svg"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="icon1 inline-flex items-center justify-center bg-gray-200 rounded-lg p-1">
                    <a
                      className="inline-flex shrink-0 justify-center items-center size-10 font-medium rounded-full text-gray-800"
                      href="https://x.com/ken_editts"
                      target="_blank"
                    >
                      <img
                        className="shrink-0 size-3.5"
                        src="/images/twitter.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="icon2 inline-flex items-center justify-center bg-gray-200 rounded-lg p-1">
                    <a
                      className="inline-flex shrink-0 justify-center items-center size-10 font-medium rounded-lg text-gray-800"
                      href="https://www.fiverr.com/s/ljl2bdA"
                      target="_blank"
                    >
                      <img src="/images/fiverr logo.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative ms-4">
                <Image
                  className="w-full rounded-md"
                  src="/images/me.jpg"
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
    </div>
  );
};

export default Aboutme;
