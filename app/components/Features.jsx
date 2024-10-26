import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Features = () => {
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

  // lefts
  const elementRefs = useRef([]);

  useEffect(() => {
    // Create a timeline to control the sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRefs.current[0], // Use the first element as the trigger for all
        start: "top 80%",
        toggleActions: "play none none none", // Play once when in view
      },
    });

    // Loop through each element and create animations
    elementRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { x: 500, opacity: 0 }, // Start offscreen and invisible
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        index * 0.5 // Stagger delay: 0.5 seconds between each animation
      );
    });

    // Cleanup: kill the ScrollTrigger associated with the timeline
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill(); // Properly kill the ScrollTrigger instance
      }
    };
  }, []);

  return (
    <div className="relative z-20 py-8  overflow-hidden md:pt-12 md:pb-28 sm:pt-8 sm:pb-18 xs:pt-12 xs:pb-12">
      <div className=" z-20 mx-auto w-11/12 max-w-screen-xl">
        <div className="flex flex-col gap-y-3">
          <div ref={left}  className="flex items-center gap-2 mb-6 overflow-hidden">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-white  uppercase">
              Qualites of my JOBS
            </h2>
          </div>
          <div className="flex flex-col gap-y-4">
            <div ref={(el) => (elementRefs.current[0] = el)}>
              
              <FeatureItem
              
                iconSrc="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/65a578d3e5dfcad920e06d0a_icon-flexibel-design.svg"
                iconAlt="Icon Flexible design"
                heading="Flexible design"
                description="A blank canvas with complete freedom and control, to create a unique website."
              />
            </div>
            <div ref={(el) => (elementRefs.current[1] = el)}>
              <FeatureItem
                iconSrc="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/65a578d291aa81fd0b2a542a_icon-snel-dev.svg"
                iconAlt="Icon Fast development"
                heading="Fast development"
                description=""
              />{" "}
            </div>
            <div ref={(el) => (elementRefs.current[2] = el)}>
              <FeatureItem
                iconSrc="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/65a578d272699f73e6d342e3_icon-hoge-prestaties.svg"
                iconAlt="Icon High performance"
                heading="High performance"
                description="By using optimized code and fast hosting, pages load quickly."
              />{" "}
            </div>
            <div ref={(el) => (elementRefs.current[3] = el)}>
              <FeatureItem
                iconSrc="https://cdn.prod.website-files.com/636423ea1c03ca74c0a976d7/65a578d2bb6755d2d27c1bfe_icon-schaalbaar.svg"
                iconAlt="Icon Scalable"
                heading="Scalable"
                description="A website made for growth. Move with developments on a flexible platform."
              />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute w-[150vw] h-[150vw] top-[-55vw] right-[-55vw] bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div> */}
      <div className="hidden absolute w-[140vw] h-[140vw] bottom-[-40vw] left-[-60vw] bg-gradient-radial from-blue-500/20 via-transparent to-transparent"></div>
    </div>
  );
};

const FeatureItem = ({ iconSrc, iconAlt, heading, description }) => (
  <div className="relative flex items-center gap-x-3 px-2 py-3 border-b border-white/20 sm:px-8 sm:py-5 xs:px-6 xs:py-10">
    <div className="flex-none w-8 sm:w-10 relative z-10">
      <img src={iconSrc} alt={iconAlt} className="w-full" loading="lazy" />
    </div>
    <div className="flex-grow relative z-10">
      <h3 className="text-xl font-semibold text-white sm:text-lg xs:text-base">
        {heading}
      </h3>
      <p className="mt-2 text-gray-400 xs:text-xs md:text-md">{description}</p>
    </div>
    <div className="absolute inset-0 rounded-md bg-gray-800"></div>
    <div className="absolute bottom-[-0.5rem] right-[-0.5rem] flex items-center justify-center w-6 h-6 text-2xl bg-black rounded-md z-10">
      <div className="w-2 h-2 bg-white rounded"></div>
    </div>
  </div>
);

export default Features;
