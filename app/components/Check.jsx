import React from "react";

const Check = () => {
  return (
    <div>
      <div class="bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <div
          aria-hidden="true"
          class="fixed inset-0 h-[200vh] origin-top scale-y-0 bg-gradient-to-b from-gray-200 from-80% to-transparent transition-transform duration-700 dark:scale-y-100 dark:from-gray-950"
        ></div>
        <header
          data-size="full"
          class="w-fit rounded-2xl shadow-lg mx-auto fixed bottom-4 z-50 inset-x-0 "
        >
          <div class="h-14 max-w-[calc(100vw-1.5rem)] sm:max-w-lg flex mx-auto border bg-white/70 rounded-2xl border-gray-950/20 dark:border-white/10 dark:bg-gray-800/70 backdrop-blur-xl items-center">
            <div class="px-4 w-full flex gap-6 justify-between items-center mx-auto">
              <div class="flex gap-4 items-center">
                <a href="/" class="w-fit">
                  <span class="sr-only">Tailus templates</span>
                  <svg
                    class="w-7 h-7 text-gray-950 dark:text-white"
                    viewBox="0 0 84 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M53.6523 31.5142C53.6523 28.5967 51.2872 26.2316 48.3697 26.2316C45.4522 26.2316 43.0871 28.5967 43.0871 31.5142C43.0871 34.4317 45.4522 36.7968 48.3697 36.7968C51.2872 36.7968 53.6523 34.4317 53.6523 31.5142Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M42.6502 36.769C42.5195 36.7593 42.3875 36.7543 42.2543 36.7543C39.3572 36.7543 37.0087 39.1029 37.0087 42C37.0087 44.8971 39.3572 47.2457 42.2543 47.2457C45.1514 47.2457 47.5 44.8971 47.5 42C47.5 40.92 47.1736 39.9162 46.6141 39.0819C45.0637 38.7237 43.691 37.9013 42.6502 36.769Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M48.3708 47.2122C51.2834 47.2122 53.6445 49.5733 53.6445 52.4859C53.6445 55.3984 51.2834 57.7595 48.3708 57.7595C45.4583 57.7595 43.0971 55.3984 43.0971 52.4859C43.0971 51.4104 43.4191 50.4101 43.9718 49.5761C45.5507 49.2193 46.9472 48.3816 47.9994 47.225C48.1221 47.2165 48.246 47.2122 48.3708 47.2122Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M40.6028 52.4859C40.6028 51.718 40.7143 50.9761 40.9219 50.2755C40.809 50.0315 40.678 49.7976 40.5306 49.5755C38.9544 49.2187 37.56 48.3825 36.5088 47.2283C36.3856 47.2197 36.2612 47.2153 36.1358 47.2153C36.0102 47.2153 35.8855 47.2197 35.7621 47.2284C34.7111 48.3823 33.317 49.2184 31.7411 49.5753C31.1877 50.4093 30.8653 51.4099 30.8653 52.4859C30.8653 55.3967 33.225 57.7564 36.1358 57.7564C38.2573 57.7564 40.0861 56.503 40.9219 54.6962C40.7143 53.9957 40.6028 53.2538 40.6028 52.4859Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.512C40.595 30.7489 40.705 30.0115 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.512C30.8654 32.5894 31.1892 33.5912 31.7448 34.4253C33.3117 34.7828 34.6983 35.6141 35.7457 36.7605C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.2572 36.7741 36.3858 36.7694 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84ZM42 74.518C24.0408 74.518 9.48201 59.9592 9.48201 42C9.48201 24.0408 24.0408 9.48201 42 9.48201C59.9592 9.48201 74.518 24.0408 74.518 42C74.518 59.9592 59.9592 74.518 42 74.518Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div class="flex gap-4 items-center">
                <div class="-mr-3 relative flex items-center h-14">
                  <span
                    data-size="full"
                    id="deviceIndicator"
                    class="absolute my-auto bottom-2 data-[size=full]:translate-x-0 data-[size=md]:translate-x-10 data-[size=sm]:translate-x-20 block w-10 h-0.5 bg-gray-950 dark:bg-white rounded-full scale-x-50 transition-transform duration-300"
                  ></span>
                  <div class="flex relative">
                    <button
                      data-size="full"
                      data-device="full"
                      class="relative h-8 w-10 flex text-gray-700 dark:text-gray-500 data-[size=full]:text-gray-950 data-[size=full]:dark:text-white rounded-lg hover:bg-gray-950/10 active:bg-gray-950/20 dark:hover:bg-white/5 dark:active:bg-white/10 dark:hover:text-white transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 m-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        ></path>
                      </svg>
                    </button>
                    <button
                      data-size="full"
                      data-device="md"
                      class="relative h-8 w-10 flex text-gray-700 dark:text-white/50 data-[size=md]:text-gray-700 data-[size=md]:dark:text-white rounded-lg hover:bg-gray-950/10 active:bg-gray-950/20 dark:hover:bg-white/5 dark:active:bg-white/10 dark:hover:text-white transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 m-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </button>
                    <button
                      data-size="full"
                      data-device="sm"
                      class="relative h-8 w-10 flex text-gray-700 dark:text-white/50 data-[size=sm]:text-gray-700 data-[size=sm]:dark:text-white rounded-lg hover:bg-gray-950/10 active:bg-gray-950/20 dark:hover:bg-white/5 dark:active:bg-white/10 dark:hover:text-white transition duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 m-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <span class="h-6 w-px rounded-full block bg-gray-950/20 dark:bg-white/20"></span>
                <div class="-ml-3">
                  <astro-island
                    uid="1yEeyS"
                    prefix="r1"
                    component-url="/_astro/ThemeSwitcher.7cf775da.js"
                    component-export="default"
                    renderer-url="/_astro/client.bb1cf6b8.js"
                    props="{}"
                    client="idle"
                    // opts='{"name":"ThemeSwitcher","value":true}'
                    await-children=""
                  >
                    <button
                      class="w-10 h-8 flex items-center rounded-lg justify-center group transition hover:bg-gray-950/10 active:bg-gray-950/20 dark:hover:bg-white/5 dark:active:bg-white/10"
                      title="Switch to dark mode"
                      role="button"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[1.125rem] h-[1.125rem] text-gray-700 dark:text-gray-300 group-hover:text-gray-950 dark:group-hover:text-white transition duration-200"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </astro-island>
                </div>
              </div>
              <div class="flex -mr-1.5">
                <a
                  href="https://tailus.lemonsqueezy.com/checkout/buy/ed22873b-956a-4c2a-8762-42703a08293e"
                  class="items-center h-9 flex px-3.5 rounded-lg transition duration-300 gap-2 overflow-hidden shadow-md shadow-gray-950/20 dark:shadow-gray-950/30 border border-white/20 hover:from-gray-600 hover:to-gray-950 dark:border-white/5 dark:border-t-white/20 bg-gradient-to-b from-gray-700 to-gray-900 dark:bg-gradient-to-r dark:to-white dark:from-gray-100 dark:hover:from-gray-300 dark:hover:to-white"
                >
                  <span class="block relative text-base leading-none text-white dark:text-gray-900">
                    Buy
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>
        <main>
          <section
            data-size="full"
            class="data-[size=md]:scale-[0.8] data-[size=sm]:scale-75 w-screen h-screen relative z-10 ease-in-out flex transition-all duration-700 will-change-auto items-center"
          >
            <div
              data-size="full"
              class="w-full dark:border-white/20 data-[size=md]:max-h-[56rem] data-[size=md]:h-full data-[size=full]:border-b-0 data-[size=full]:h-full m-auto data-[size=full]:p-0 p-1 data-[size=full]:rounded-b-none rounded-3xl data-[size=sm]:rounded-[2.25rem] shadow-gray-950/10  shadow-2xl data-[size=md]:pb-0 bg-white dark:bg-gray-950 border border-gray-950/10 data-[size=full]:border-none data-[size=full]:max-w-full  data-[size=md]:max-w-2xl data-[size=sm]:max-w-sm data-[size=sm]:h-full data-[size=sm]:max-h-[44rem]"
            >
              <iframe
                loading="lazy"
                data-size="full"
                class="dark:border-gray-900 transition-all duration-500 ease-in-out h-full min-w-full border border-gray-100 rounded-[18px] data-[size=sm]:rounded-[30px] mx-auto w-full data-[size=full]:border-none data-[size=full]:rounded-none"
                src="https://astrolus.tailus.io"
              ></iframe>
            </div>
          </section>
        </main>
        <div
          id="dom-inspector-1725311371588"
          class="dom-inspector dom-inspector-theme-default"
          //   style="z-index: 9999"
        >
          <div class="content"></div>
          <div class="padding padding-top"></div>
          <div class="padding padding-right"></div>
          <div class="padding padding-bottom"></div>
          <div class="padding padding-left"></div>
          <div class="border border-top"></div>
          <div class="border border-right"></div>
          <div class="border border-bottom"></div>
          <div class="border border-left"></div>
          <div class="margin margin-top"></div>
          <div class="margin margin-right"></div>
          <div class="margin margin-bottom"></div>
          <div class="margin margin-left"></div>
          <div class="tips">
            <div class="tag"></div>
            <div class="id"></div>
            <div class="class"></div>
            <div class="line">&nbsp;|&nbsp;</div>
            <div class="size"></div>
            <div class="triangle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Check;
