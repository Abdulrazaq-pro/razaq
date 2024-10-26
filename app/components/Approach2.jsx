import React from "react";
import Image from "next/image";

const Jobs = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div class="w-full rounded-lg shadow bg-gray-800 border-gray-700">
          <div className="p-8 rounded-md w-full">
            <Image
              src="/images/ticketmaster copy.png"
              alt="product image"
              layout="responsive"
              width={100} // This represents the percentage width of the container (100%).
              height={100} // Adjust this to maintain the aspect ratio of the image (or use auto for dynamic height).
              className="object-cover rounded-md"
            />
          </div>

          <div class="px-5 pb-5">
            <div class="lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3 items-center">
              <div class="inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://www.figma.com/community/file/1179068859697769656"
                  target="_blank"
                >
                  <img
                    src="/images/figma.svg"
                    alt="Figma"
                    class="shrink-0 size-2.5"
                  />
                  <span class="ml-2 text-[9px]">figma</span>
                </a>
              </div>
              <div class="inline-flex items-center justify-center bg-gray-200 rounded-full px-2 py-1">
                <a
                  class="inline-flex shrink-0 justify-center items-center font-medium rounded-full text-gray-800"
                  href="https://github.com/Abdulrazaq-pro"
                  target="_blank"
                >
                  <img
                    src="/images/github.svg"
                    alt="Github"
                    class="shrink-0 size-2.5"
                  />
                  <span class="ml-2 text-[9px]">github</span>
                </a>
              </div>
            </div>
            <h5 class="text-xl font-semibold tracking-tight text-white">
              Ticketmaster Clone
            </h5>

            <div class="text-white mt-2.5 mb-5">
              Portfolio website for a LinkedIn manager
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div class="w-full rounded-lg shadow bg-gray-800 border-gray-700">
          <div className="p-8 rounded-md w-full">
            <Image
              src="/images/daratech copy.png"
              alt="product image"
              layout="responsive"
              width={100} // This represents the percentage width of the container (100%).
              height={100} // Adjust this to maintain the aspect ratio of the image (or use auto for dynamic height).
              className="object-cover rounded-md"
            />
          </div>

          <div class="px-5 pb-5">
            <div class=" lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3 items-center">
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
            <h5 class="text-xl font-semibold tracking-tight  text-white">
              TicketmasterKarimah&apos;s Porfolio
            </h5>

            <div class=" text-white mt-2.5 mb-5">
              Portfolio website for a Linkedin manager
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div class="w-full rounded-lg shadow bg-gray-800 border-gray-700">
          <div className="p-8 rounded-md w-full">
            <Image
              src="/images/karimah.jpg"
              alt="product image"
              layout="responsive"
              width={100} // This represents the percentage width of the container (100%).
              height={100} // Adjust this to maintain the aspect ratio of the image (or use auto for dynamic height).
              className="object-cover rounded-md"
            />
          </div>

          <div class="px-5 pb-5">
            <div class=" lg:ms-1 flex xl:gap-x-3 gap-x-2 my-3 items-center">
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
            <h5 class="text-xl font-semibold tracking-tight  text-white">
              TicketmasterKarimah&apos;s Porfolio
            </h5>

            <div class=" text-white mt-2.5 mb-5">
              Portfolio website for a Linkedin manager
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach2;
