import React from "react";

const About = () => {
  
  return (
    <div>
      <div className='relative flex-col w-full box-border [border-bottom:1px_solid_var(--primary-dark)] bg-[rgb(6,_7,_8)] text-[rgb(136,_136,_137)] text-[16px] m-0 font-normal font-[Inter,_-apple-system,_BlinkMacSystemFont,_"Segoe_UI",_Roboto,_Oxygen,_Ubuntu,_Cantarell,_"Fira_Sans",_"Droid_Sans",_"Helvetica_Neue",_sans-serif]'>
        <div className="w-full max-w-[var(--reading-width)] flex-col mt-[var(--size-6x)] mb-[var(--size-6x)] gap-[var(--size-6x)] box-border">
          <div className="flex box-border flex-col justify-center text-center gap-[var(--size-1x)] px-[var(--size-1x)] py-[0]">
            <h4 className="box-border font-[var(--font-sans)] font-semibold text-[var(--font-xs)] uppercase tracking-[1.6px]">
              Hardskills
            </h4>
            <h2 className="box-border text-[var(--font-xl)] font-[var(--font-sans)] font-bold tracking-[-0.8px]">
              Technical
            </h2>
            <p className="box-border font-[var(--font-accent)] text-[var(--font-r-s)] leading-[1.6] tracking-[0px] font-semibold">
              As a creative technologist, I craft intuitive digital experiences
              using a diverse set of tools and languages.
            </p>
          </div>
          <section className="flex box-border relative flex-row gap-[16px]">
            <div className="box-border p-0 flex-[1_1_calc(60%_+_1px)]">
              <div className="flex box-border flex-col gap-[var(--size-1x)] border-[1px] border-solid border-[var(--primary-dark)] rounded-[32px] bg-[var(--background-dim2)] [box-shadow:0_0_30px_var(--background)] overflow-hidden p-[var(--padding)] mb-[var(--size-1x)]">
                <span className="flex box-border p-[8px] items-center bg-[var(--primary-dark)] w-[fit-content] rounded-[8px] [aspect-ratio:1_/_1]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fat"
                    data-icon="chart-network"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M160 64C160 28.65 188.7 0 224 0C259.3 0 288 28.65 288 64C288 86.31 276.6 105.1 259.3 117.4L296.7 199.1C308.9 194.5 322.2 192 336 192C370.5 192 401.4 207.6 421.1 232.2L521.1 160.9C515.3 151.3 512 140 512 128C512 92.65 540.7 64 576 64C611.3 64 640 92.65 640 128C640 163.3 611.3 192 576 192C558.4 192 542.5 184.9 530.1 173.5L431.3 245.2C441.9 262.3 448 282.4 448 303.1C448 322.2 443.7 339.4 435.9 354.6L525.7 408.5C537.4 393.6 555.6 384 576 384C611.3 384 640 412.7 640 448C640 483.3 611.3 512 576 512C540.7 512 512 483.3 512 448C512 438.8 513.9 430.1 517.4 422.2L427.7 368.3C407.4 397.2 373.9 416 336 416C276.8 416 228.4 370.1 224.3 311.1H127.5C123.6 343.6 96.64 368 64 368C28.65 368 0 339.3 0 303.1C0 268.7 28.65 239.1 64 239.1C96.64 239.1 123.6 264.4 127.5 295.1H224.3C227 257 249.7 223.6 282.2 205.8L244.9 124.5C238.4 126.8 231.3 127.1 224 127.1C188.7 127.1 160 99.35 160 63.1V64zM224 112C250.5 112 272 90.51 272 64C272 37.49 250.5 16 224 16C197.5 16 176 37.49 176 64C176 90.51 197.5 112 224 112zM16 304C16 330.5 37.49 352 64 352C90.51 352 112 330.5 112 304C112 277.5 90.51 256 64 256C37.49 256 16 277.5 16 304zM576 496C602.5 496 624 474.5 624 448C624 421.5 602.5 400 576 400C561.4 400 548.3 406.5 539.5 416.8L540.1 417.1L531.9 430.9L531.3 430.5C529.2 435.9 528 441.8 528 448C528 474.5 549.5 496 576 496H576zM576 176C602.5 176 624 154.5 624 128C624 101.5 602.5 80 576 80C549.5 80 528 101.5 528 128C528 154.5 549.5 176 576 176zM336 400C389 400 432 357 432 304C432 250.1 389 208 336 208C282.1 208 240 250.1 240 304C240 357 282.1 400 336 400z"
                    ></path>
                  </svg>
                </span>
                <h3 className="box-border text-[var(--font-m)] tracking-[-0.16px] font-[var(--font-sans)] font-semibold relative">
                  Polymath foundations
                </h3>
                <p className="box-border font-[var(--font-sans)] text-[var(--font-r)] leading-[1.6] tracking-[-0.32px]">
                  With a strong foundation in both design and development, I
                  bring a unique perspective to every project and am constantly
                  learning and evolving to stay up-to-date with the latest
                  industry trends.
                </p>
              </div>
              <div className="flex box-border mb-[var(--size-1x)] flex-col gap-[var(--size-1x)] border-[1px] border-solid border-[var(--primary-dark)] rounded-[32px] bg-[var(--background-dim2)] [box-shadow:0_0_30px_var(--background)] overflow-hidden p-[var(--padding)]">
                <span className="flex box-border p-[8px] items-center bg-[var(--primary-dark)] w-[fit-content] rounded-[8px] [aspect-ratio:1_/_1]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fat"
                    data-icon="grid-2-plus"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M176 32C202.5 32 224 53.49 224 80V176C224 202.5 202.5 224 176 224H80C53.49 224 32 202.5 32 176V80C32 53.49 53.49 32 80 32H176zM176 48H80C62.33 48 48 62.33 48 80V176C48 193.7 62.33 208 80 208H176C193.7 208 208 193.7 208 176V80C208 62.33 193.7 48 176 48zM176 288C202.5 288 224 309.5 224 336V432C224 458.5 202.5 480 176 480H80C53.49 480 32 458.5 32 432V336C32 309.5 53.49 288 80 288H176zM176 304H80C62.33 304 48 318.3 48 336V432C48 449.7 62.33 464 80 464H176C193.7 464 208 449.7 208 432V336C208 318.3 193.7 304 176 304zM288 80C288 53.49 309.5 32 336 32H432C458.5 32 480 53.49 480 80V176C480 202.5 458.5 224 432 224H336C309.5 224 288 202.5 288 176V80zM304 80V176C304 193.7 318.3 208 336 208H432C449.7 208 464 193.7 464 176V80C464 62.33 449.7 48 432 48H336C318.3 48 304 62.33 304 80zM384 272C388.4 272 392 275.6 392 280V376H488C492.4 376 496 379.6 496 384C496 388.4 492.4 392 488 392H392V488C392 492.4 388.4 496 384 496C379.6 496 376 492.4 376 488V392H280C275.6 392 272 388.4 272 384C272 379.6 275.6 376 280 376H376V280C376 275.6 379.6 272 384 272z"
                    ></path>
                  </svg>
                </span>
                <h3 className="box-border text-[var(--font-m)] tracking-[-0.16px] font-[var(--font-sans)] font-semibold relative">
                  Software/Tools I love to work with
                </h3>
                <p className="box-border font-[var(--font-sans)] text-[var(--font-r)] leading-[1.6] tracking-[-0.32px]">
                  With over 4 years of experience creating digital assets, I
                  have a deep and intuitive understanding of how the interfaces
                  of the best software products in the world are designed. This
                  is just some of the software I have used over that time.
                </p>
                <ul
                  style={{ opacity: 1 }}
                  className="flex box-border relative [flex-flow:wrap] gap-y-[var(--size-2-)] font-[var(--font-accent)] font-semibold text-[var(--font-xs)] [border-top:1px_solid_var(--primary-dark)] bg-[var(--background-dim)] ml-[calc(var(--padding-left)*-1)] mr-[calc(var(--padding-right)*-1)] mb-[calc(var(--padding-bottom)*-1)] pt-[var(--padding-top,1rem)] pr-[var(--padding-right)] pb-[var(--padding-bottom)] pl-[var(--padding-left)] opacity-100"
                >
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Xcode
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Android Studio
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Figma
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      VSCode
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="mailbox"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 208V384c0 35.3 28.7 64 64 64H224c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144S0 128.5 0 208zm64 0c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm256 0V384c0 24.6-9.2 47-24.4 64H512c35.3 0 64-28.7 64-64V208c0-79.5-64.5-144-144-144H245.2C290.5 95.9 320 148.5 320 208zm64 0c0-8.8 7.2-16 16-16h64 32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V224H400c-8.8 0-16-7.2-16-16z"
                      ></path>
                    </svg>
                    <span className="box-border flex-grow text-center">
                      Postman
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Git
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Github
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Terminal
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      MongoDB
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex box-border flex-col gap-[var(--size-1x)] border-[1px] border-solid border-[var(--primary-dark)] rounded-[32px] bg-[var(--background-dim2)] [box-shadow:0_0_30px_var(--background)] overflow-hidden p-[var(--padding)]">
                <span className="flex box-border p-[8px] items-center bg-[var(--primary-dark)] w-[fit-content] rounded-[8px] [aspect-ratio:1_/_1]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fat"
                    data-icon="laptop-code"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="currentColor"
                      d="M624 384h-608C7.188 384 0 391.2 0 400V416c0 35.2 28.81 64 64 64h512c35.19 0 64-28.8 64-64v-16C640 391.2 632.8 384 624 384zM624 416c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48v-16h608V416zM72 352c4.418 0 8-3.582 8-8V80c0-17.67 14.33-32 32-32h416c17.67 0 32 14.33 32 32v264c0 4.418 3.582 8 8 8S576 348.4 576 344V80C576 53.6 554.4 32 528 32h-416C85.6 32 64 53.6 64 80v264C64 348.4 67.58 352 72 352zM269.7 146.3c-3.125-3.125-8.188-3.125-11.31 0l-64 64c-3.125 3.125-3.125 8.188 0 11.31l64 64C259.9 287.2 261.1 288 264 288s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L211.3 216l58.34-58.34C272.8 154.5 272.8 149.5 269.7 146.3zM370.3 285.7C371.9 287.2 373.1 288 376 288s4.094-.7813 5.656-2.344l64-64c3.125-3.125 3.125-8.188 0-11.31l-64-64c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L428.7 216l-58.34 58.34C367.2 277.5 367.2 282.5 370.3 285.7z"
                    ></path>
                  </svg>
                </span>
                <h3 className="box-border text-[var(--font-m)] tracking-[-0.16px] font-[var(--font-sans)] font-semibold relative">
                  Technologies I love to build with
                </h3>
                <p className="box-border font-[var(--font-sans)] text-[var(--font-r)] leading-[1.6] tracking-[-0.32px]">
                  I deeply enjoy solving problems through code. From the front
                  end all the way to the back end to mobile apps and the APIs
                  in-between. No project is too challenging for me.
                </p>
                <ul
                  style={{ opacity: 1 }}
                  className="flex box-border relative [flex-flow:wrap] gap-y-[var(--size-2-)] font-[var(--font-accent)] font-semibold text-[var(--font-xs)] [border-top:1px_solid_var(--primary-dark)] bg-[var(--background-dim)] ml-[calc(var(--padding-left)*-1)] mr-[calc(var(--padding-right)*-1)] mb-[calc(var(--padding-bottom)*-1)] pt-[var(--padding-top,1rem)] pr-[var(--padding-right)] pb-[var(--padding-bottom)] pl-[var(--padding-left)] opacity-100"
                >
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      JavaScript
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      NodeJS
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      React
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      NextJS
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Typescript
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Flutter
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      WordPress
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      WooCommerce
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      TailwindCSS
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      HTML5
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      CSS3
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      SASS
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      ExpressJs
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      MongoDB
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Python
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      Django
                    </span>
                  </li>
                  <li
                    style={{
                      opacity: 0,
                      transform: "translateY(20px) translateZ(0px)",
                    }}
                    className="flex box-border relative flex-row overflow-hidden items-center rounded-[144px] px-[calc(var(--size-3-)*2)] py-[calc(var(--size-3-)*1)] uppercase opacity-0 [transform:translateY(20px)_translateZ(0px)]"
                  >
                    <i className="flex box-border font-normal leading-none antialiased !font-[devicon] justify-center items-center mr-[11.2px]"></i>
                    <span className="box-border flex-grow text-center">
                      ReactNative
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-border p-0 flex-[1_1_50%] relative">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "inline-block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  position: "relative",
                  maxWidth: "100%",
                }}
                className="inline-block box-border relative overflow-hidden !h-full opacity-100 border-[0] m-0 p-0 max-w-full"
              >
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                    maxWidth: "100%",
                  }}
                  className="block box-border opacity-100 border-[0] m-0 p-0 max-w-full"
                >
                  <img
                    style={{
                      display: "block",
                      maxWidth: "100%",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: 0,
                    }}
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27477%27%20height=%271111%27/%3e"
                    className="box-border rounded-[32px] filter brightness-[100%] h-full [aspect-ratio:3_/_4] object-cover overflow-visible block max-w-full opacity-100 border-[0] m-0 p-0"
                  />
                </span>
                <img
                  alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
                  src="/img/dataism-24.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    padding: 0,
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: 0,
                    height: 0,
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                  srcSet="/img/dataism-24.svg 1x, /img/dataism-24.svg 2x"
                  className="box-border rounded-[32px] filter brightness-[100%] h-[0] [aspect-ratio:3_/_4] object-cover overflow-visible absolute top-[0] left-[0] bottom-[0] right-[0] p-0 block w-[0] min-w-full max-w-full min-h-full max-h-full"
                />
                <noscript className="box-border">
                  <img
                    alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
                    srcSet="/img/dataism-24.svg 1x, /img/dataism-24.svg 2x"
                    src="/img/dataism-24.svg"
                    decoding="async"
                    data-nimg="intrinsic"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      boxSizing: "border-box",
                      padding: 0,
                      border: "none",
                      margin: "auto",
                      display: "block",
                      width: 0,
                      height: 0,
                      minWidth: "100%",
                      maxWidth: "100%",
                      minHeight: "100%",
                      maxHeight: "100%",
                    }}
                    loading="lazy"
                  />
                </noscript>
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;



