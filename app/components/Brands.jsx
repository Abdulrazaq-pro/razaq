import Image from "next/image";

const Brands = () => {
  return (
    <section className="relative bg-black py-16 md:py-20 my-12">
      <div className="absolute top-0 left-0 h-4 w-full bg-gradient-to-l from-[#053e80] to-[#2143da]"></div>
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid grid-cols-1 gap-y-9 text-center text-white md:grid-cols-5 md:gap-12 xl:gap-10">
          <div>
            <figure className="figure-class flex items-center justify-center md:h-20">
              <Image
                alt="5 stars"
                src="/images/test.avif"
                width={80}
                height={80}
              />
            </figure>
            <h3 className="heading-class font-bold mt-4 lg:mt-5">4.8</h3>
            <p className="paragraph-class mx-auto mt-1 text-lg font-medium leading-5 md:mt-3 max-w-xs">
              Average rating from 350+ reviews on Clutch
            </p>
          </div>
          <div>
            <figure className="figure-class flex items-center justify-center md:h-20">
              <Image
                alt="handshake icon"
                src="/images/test.avif"
                width={80}
                height={80}
              />
            </figure>
            <h3 className="heading-class font-bold mt-4 lg:mt-5">90+</h3>
            <p className="paragraph-class mx-auto mt-1 text-lg font-medium leading-5 md:mt-3 max-w-xs">
              Clients with us for 4 years or more
            </p>
          </div>
          <div>
            <figure className="figure-class flex items-center justify-center md:h-20">
              <Image
                alt="employees icon"
                src="/images/test.avif"
                width={96}
                height={80}
              />
            </figure>
            <h3 className="heading-class font-bold mt-4 lg:mt-5">160+</h3>
            <p className="paragraph-class mx-auto mt-1 text-lg font-medium leading-5 md:mt-3 max-w-xs">
              Employees aligned with our mission
            </p>
          </div>
          <div>
            <figure className="figure-class flex items-center justify-center md:h-20">
              <Image
                alt="Inc. 500 Fastest-Growing Companies #145 Award"
                src="/images/test.avif"
                width={80}
                height={80}
              />
            </figure>
            <h3 className="heading-class font-bold mt-4 lg:mt-5">#145</h3>
            <p className="paragraph-class mx-auto mt-1 text-lg font-medium leading-5 md:mt-3 max-w-xs">
              On the Inc. 500
            </p>
          </div>
          <div>
            <figure className="figure-class flex items-center justify-center md:h-20">
              <Image
                alt="ad spend icon"
                src="/images/test.avif"
                width={80}
                height={80}
              />
            </figure>
            <h3 className="heading-class font-bold mt-4 lg:mt-5">$450M+</h3>
            <p className="paragraph-class mx-auto mt-1 text-lg font-medium leading-5 md:mt-3 max-w-xs">
              In annual ad-spend managed for clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
