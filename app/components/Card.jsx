import styles from "../styles/Card.module.css";

const projects = [
  {
    id: 1,
    technologies: "NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION",
    image: "https://www.adeolaadeoti.site/webp/alexxandria-1.webp",
    alt: "alexxandria model",
    title: "Alexxandria Forque",
    link: "https://alexxandria.vercel.app/",
    linkText: "VISIT THE WEBSITE",
    socialLinks: [
      {
        href: "#",
        icon: "https://www.adeolaadeoti.site/svg/dribble.svg",
        alt: "dribble icon",
      },
      {
        href: "https://github.com/adeolaadeoti/alexxandria",
        icon: "https://www.adeolaadeoti.site/svg/github.svg",
        alt: "github icon",
      },
    ],
    beforeImage:
      "https://www.adeolaadeoti.site/_next/static/media/01.ac89de5a.svg",
  },
  {
    id: 2,
    technologies: "REACT JS, FRAMER MOTION",
    image: "https://www.adeolaadeoti.site/webp/safarika-1.webp",
    alt: "safarika",
    title: "Safarika",
    link: "https://safarika-adeola.netlify.app/",
    linkText: "VISIT THE WEBSITE",
    socialLinks: [
      {
        href: "https://dribbble.com/shots/12361426-Safarika-Adventure",
        icon: "https://www.adeolaadeoti.site/svg/dribble.svg",
        alt: "dribble icon",
      },
      {
        href: "https://github.com/adeolaadeoti/safarika",
        icon: "https://www.adeolaadeoti.site/svg/github.svg",
        alt: "github icon",
      },
    ],
    beforeImage:
      "https://www.adeolaadeoti.site/_next/static/media/02.e02a06bb.svg",
  },
  {
    id: 3,
    technologies: "NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION",
    image: "https://www.adeolaadeoti.site/webp/heatrow-1.webp",
    alt: "heatrow",
    title: "Heatrow Estate",
    link: "https://heatrow.vercel.app/",
    linkText: "VISIT THE WEBSITE",
    socialLinks: [
      {
        href: "#",
        icon: "https://www.adeolaadeoti.site/svg/dribble.svg",
        alt: "dribble icon",
      },
      {
        href: "https://github.com/adeolaadeoti/heatrow",
        icon: "https://www.adeolaadeoti.site/svg/github.svg",
        alt: "github icon",
      },
    ],
    beforeImage:
      "https://www.adeolaadeoti.site/_next/static/media/03.e30b3d61.svg",
  },
  {
    id: 4,
    technologies: "HTML, SCSS, JAVASCRIPT, GSAP",
    image: "https://www.adeolaadeoti.site/webp/adeola-1.webp",
    alt: "adeola model",
    title: "AdeolaAdeoti version 1",
    link: "https://github.com/adeolaadeoti/adeolaadeoti-portfolio",
    linkText: "VIEW SOURCE CODE",
    socialLinks: [
      {
        href: "https://dribbble.com/shots/12338926-Adeola-Adeoti-Portfolio",
        icon: "https://www.adeolaadeoti.site/svg/dribble.svg",
        alt: "dribble icon",
      },
      {
        href: "https://github.com/adeolaadeoti/adeolaadeoti-portfolio",
        icon: "https://www.adeolaadeoti.site/svg/github.svg",
        alt: "github icon",
      },
    ],
    beforeImage:
      "https://www.adeolaadeoti.site/_next/static/media/04.35e7dbd7.svg",
  },
  // Other projects...
];

const Card = () => {
  return (
    <section id="sectionProjects" className="container mx-auto mt-20 px-6">
      <h1 className="text-5xl font-black mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-pink-400">
          Yeah, I work hard
        </span>
        <small className="ml-2">💼</small>
      </h1>
      <p className="text-lg text-gray-500 mb-12">
        Each project is unique. Here are some of my works.
      </p>
      {projects.map((project) => (
        <div key={project.id} className={`${styles.projectCard} mb-20`}>
          <div
            className={`${styles.beforeImage}`}
            style={{ backgroundImage: `url(${project.beforeImage})` }}
          ></div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            {/* <div className="hidden md:flex items-center">
              <h4
                className={`${styles.technologyText} text-xs tracking-widest text-gray-500`}
              >
                {project.technologies}
              </h4>
            </div> */}
            <div className={``}>
              <img
                src={project.image}
                alt={project.alt}
                className="object-contain rounded-3xl w-full h-full"
              />
            </div>
            <div className={``}>
              <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tracking-widest mb-6 inline-block"
              >
                {project.linkText}
              </a>
              <ul className="flex justify-center md:justify-start space-x-4 mt-10">
                {project.socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={link.icon} alt={link.alt} className="w-5 h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Card;
