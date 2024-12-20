import React from "react";

const Statistics = () => {
  return (
    // Features
    <div className=" bg-blue-200 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Grid */}
      <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
        <div className="lg:col-span-4">
          {/* Stats */}
          <div className="lg:pe-6 xl:pe-12">
            <p className="text-6xl font-bold leading-10 text-blue-600">
              95%
              <span className="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2 dark:bg-neutral-800 dark:text-neutral-300">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
                +5% this quarter
              </span>
            </p>
            <p className="mt-2 sm:mt-3 text-gray-500 dark:text-neutral-500">
              of websites I’ve developed achieve a 95% or higher Lighthouse score
            </p>
          </div>
          {/* End Stats */}
        </div>
        {/* End Col */}

        <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:dark:bg-neutral-700">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
            {/* Stats */}
            <div>
              <p className="text-3xl font-semibold text-blue-600">99.9%</p>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">
                uptime across client websites
              </p>
            </div>
            {/* End Stats */}

            {/* Stats */}
            <div>
              <p className="text-3xl font-semibold text-blue-600">50+</p>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">
                successful project deployments
              </p>
            </div>
            {/* End Stats */}

            {/* Stats */}
            <div>
              <p className="text-3xl font-semibold text-blue-600">4,000+</p>
              <p className="mt-1 text-gray-500 dark:text-neutral-500">
                hours spent on front-end development
              </p>
            </div>
            {/* End Stats */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
    // End Features
  );
};

export default Statistics;
