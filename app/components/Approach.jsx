import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Approach = () => {
  //image reveal
  const left = useRef(null); // Reference to the element
  useEffect(() => {
    // Set up the GSAP animation with ScrollTrigger
    const element = left.current;
    gsap.fromTo(
      element,
      { x: -500, opacity: 0 }, // Start: offscreen to the right and invisible
      {
        x: 0,
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

  //numbers animation
  const digitRefs = useRef([]);
  const steps = [
    {
      title: "Client Requirements Gathering",
      description:
        "Understanding the clients needs and objectives to build a roadmap for the project.",
    },
    {
      title: "Design and Development",
      description:
        "Creating design mockups and developing the website, ensuring it meets the clients expectations.",
    },
    {
      title: "Testing and Optimization",
      description:
        "Thoroughly testing the website for bugs, performance, and responsiveness across devices.",
    },
    {
      title: "Launch and Maintenance",
      description:
        "Launching the website and providing ongoing support for any updates or maintenance.",
    },
  ];

  useEffect(() => {
    digitRefs.current.forEach((digit, index) => {
      gsap.fromTo(
        digit,
        { opacity: 0, y: 50, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: digit,
            start: "top 95%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: true,
            once: false,
          },
        }
      );
    });
  }, []);

  return (
<div className="relative bg-neutral-900">
  {/* Dots Background */}
  <div className="absolute top-0 right-0 bg-blue-500 p-4 z-[1]">
    {/* Empty div for the solid background box */}
  </div>
  <img
  className="absolute top-0 right-0 w-16 sm:w-20 md:w-40 lg:w-48 z-[1]"  // Width adjustments while keeping aspect ratio
  src="/images/dots.svg"
  alt="dots"
/>


  {/* Text Content */}
  <div className="relative max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto z-[10]">
    <div className="max-w-3xl mb-10 lg:mb-14">
      <h2 className="text-white font-semibold text-3xl md:text-6xl md:leading-tight">
        My Web Development Approach
      </h2>
      <p className="mt-1 text-base lg:text-lg text-neutral-400">
        I follow a structured approach to delivering high-quality websites that cater
        to my clients&apos; needs. From gathering requirements to product launch and
        ongoing maintenance, each step is essential to the success of the project.
      </p>
    </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                ref={left}
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Web Development Process"
              />
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-sec text-base lg:text-lg font-medium uppercase">
                  Steps
                </h3>
              </div>

              {steps.map((step, index) => (
                <div className="flex gap-x-5 ms-1" key={index}>
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span
                        ref={(el) => (digitRefs.current[index] = el)}
                        className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-sec font-semibold text-3xl uppercase rounded-full"
                      >
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-neutral-400">
                      <span className="text-white">{step.title}:</span>{" "}
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-sec font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href="https://calendly.com/abdulrazmail/30min"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                Schedule a consultation
              </a>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Approach;
