import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('/images/footer.jpg')",
      }}
    >
      <section id="footer-main" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Company Information */}
            <div className="w-full lg:w-1/3 mb-8 text-left">
              <div className="mb-4">
                <div>
                  <a className="logo z-[1000]font-semibold" href="/">
                    Abdul
                    <span className=" bg-gradient-to-br from-primary bg-clip-text text-transparent ">
                      Razaq
                    </span>
                  </a>
                  <div className="flex items-center gap-1 -mt-1">
                    <div className="h-[6px] w-8 bg-primary"></div>
                    <p className="text-[7px]">portfolio</p>
                  </div>
                </div>
              </div>
              <div className="text-gray-600">
                <p>
                  <a
                    href="tel:+2349055002293"
                    className="text-primary hover:text-maincolor"
                  >
                    +234 9055 002293
                  </a>
                </p>
                <p>Always available &#128640; </p>
              </div>
            </div>

            {/* Services Section */}
            <div className="w-full lg:w-1/3 mb-8 text-left">
              <h4 className="text-lg font-semibold mb-4">My Services</h4>
              <ul className="text-gray-600">
                <li>
                  <a href="#" className="hover:text-maincolor">
                    Front-End Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-maincolor">
                    Responsive Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-maincolor">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-maincolor">
                    Website Maintenance
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="w-full lg:w-1/3 mb-8 text-left">
              <h4 className="text-lg font-semibold mb-4">Connect with Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/2349055002293"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-maincolor hover:text-white"
                >
                  <img src="/images/whatsapp.png" className="" />
                </a>
                <a
                  href="https://twitter.com/ken_editts"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-maincolor hover:text-white"
                >
                  <img
                    class="shrink-0 size-3.5"
                    src="/images/twitter.svg"
                    alt=""
                  />
                </a>
                <a
                  href="https://instagram.jpg"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-maincolor hover:text-white"
                >
                  <img src="/images/linkedin.jpg" className="" />
                </a>
                <a
                  href="https://linkedin.com/in/abdulrazaq-adisa-6ba830292"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-maincolor hover:text-white"
                >
                  <img src="/images/fiverr logo.png" className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <section id="footer-bottom" className="py-6 border-t border-gray-300">
        <div className="container mx-auto text-left text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Abdul-Razaq | Full-Stack Developer
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
