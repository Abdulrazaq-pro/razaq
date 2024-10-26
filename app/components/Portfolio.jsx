import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="rounded-xl group flex flex-col h-full bg-white border border-gray-200 shadow-sm ">
          <div className="h-52 flex flex-col justify-center items-center bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-t-xl overflow-hidden">
            <Image
              className="size-28 rounded-xl"
              src="/images/karimah.jpg"
              width="56"
              height="56"
            />
          </div>
          <div className="p-4 md:p-6">
            <div class="lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3 items-center">
              <div class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
                <a
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
                </a>
              </div>
              <div class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
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
                  <span class="ml-2 text-[9px]">figma</span>
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 ">
              Karimah&apos;s Porfolio
            </h3>
            <p className="mt-3 text-gray-500 ">
              Portfolio website for a Linkedin manager
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200  ">
            <a
              className="font-bold w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none   "
              href="#"
            >
              GO TO
            </a>
            <a
              className="w-full py-3 font-bold px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Github
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
          <div className="h-52 flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-purple-700 rounded-t-xl">
            <div className="w-28 h-28 rounded-xl bg-white flex items-center justify-center">
              {/* Set width and height explicitly to form a box */}
              <Image
                src="/images/daratech.png"
                width={56} // Fixed width of 56 pixels
                height={56} // Fixed height of 56 pixels
                className="object-contain" // Ensure the image fits inside without stretching
                alt="Ticketmaster"
                layout="intrinsic" // Maintain the aspect ratio of the image
              />
            </div>
          </div>
          <div className="p-4 md:p-6">
            <div class="lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3 items-center">
              <div class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
                <a
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
                </a>
              </div>
              <div class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://www.figma.com/community/file/1179068859697769656"
                  target="_blank"
                >
                  <img
                    src="/images/github.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">figma</span>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Daratech</h3>
            <p className="mt-3 text-gray-500 ">
              A home page for a Tech company
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
            <a
              className="font-bold w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              GO TO
            </a>
            <a
              className="font-bold w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              href="#"
            >
              Github
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl ">
          <div className="h-52 flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-t-xl">
            <div className="w-28 h-28 rounded-xl bg-white flex items-center justify-center">
              {/* Set width and height explicitly to form a box */}
              <Image
                src="/images/ticketmaster.png"
                width={56} // Fixed width of 56 pixels
                height={56} // Fixed height of 56 pixels
                className="object-contain" // Ensure the image fits inside without stretching
                alt="Ticketmaster"
                layout="intrinsic" // Maintain the aspect ratio of the image
              />
            </div>
          </div>

          <div className="p-4 md:p-6">
            <div class="lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3 items-center">
              <div class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
                <a
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
                </a>
              </div>
              <div class=" inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://www.figma.com/community/file/1179068859697769656"
                  target="_blank"
                >
                  <img
                    src="/images/github.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5 "
                  />
                  <span class="ml-2 text-[9px]">figma</span>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">DaraTech</h3>
            <p className="mt-3 text-gray-500 ">
              Clone of the popular Ticketmaster app
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
            <a
              className="font-bold w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              href="#"
            >
              GO TO
            </a>
            <a
              className="font-bold w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              href="#"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
