import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Brand Identity",
    icon: web,
  },
  {
    title: "SEO Optimisation",
    icon: mobile,
  },
  {
    title: "Social Media Marketing",
    icon: backend,
  },
  {
    title: "Content Creation",
    icon: creator,
  },

  {
    title: "Website Development Services",
    icon: creator,
  },
  {
    title: "Ads Management",
    icon: creator,
  },
  {
    title: "Video Editing",
    icon: creator,
  },
  {
    title: "Social Media Manager",
    icon: creator,
  },

];

const technologies = [
  {

    name: "HTML 5",
    icon: logo,
  },
  {
    name: "CSS 3",
    icon: logo,
  },
  {
    name: "JavaScript",
    icon: logo,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
  
];

const experiences = [
  {
    title: "Brand Identity",
    company_name: "",
    icon: logo,
    iconBg: "#383E56",
    date: "",
    points: [

      "Brand identity is the visible elements of a brand, such as color, design, and logo that identify and distinguish the brand in consumers' minds. Consistent marketing and messaging lead to consistent brand identity.",
    ],
  },
  {
    title: "Social Media Marketing",
    company_name: "",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      " Social media marketing is the use of social media platforms and websites to promote a product or service.",
    ],
  },
  {
    title: "Website Development Services",
    company_name: "",
    icon: logo,
    iconBg: "#383E56",
    date: "",
    points: [
      "Web development services involve everything related to building a web-based solution – whether it is a simple text page or a complex web application.",
    ],
  },
  {
    title: "SEO Optimisation",
    company_name: "",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic."
    ],
  },
  {
    title: "Content Creation",
    company_name: "",
    icon: logo,
    iconBg: "#383E56",
    date: "",
    points: [
      "Content creation is the contribution of information to any media and most especially to digital media for an end-user/audience in specific contexts.",
    ],
  },
  {
    title: "Ads Management",
    company_name: "",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Advertising management is a planned managerial process designed to oversee and control the various advertising activities involved in a program.",
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "",
    icon: logo,
    iconBg: "#383E56",
    date: "",
    points: [
      "Social media management refers to the process of creating, scheduling, analyzing, and engaging with content posted on various social media platforms on behalf of a brand or individual. The goal of social media management is to establish a strong and engaging online presence, build brand awareness, and ultimately drive business results.",
    ],
  },
  {
    title: "Video Editing",
    company_name: "",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Advertising management is a planned managerial process designed to oversee and control the various advertising activities involved in a program.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "Unprecedented Velocity refers to the speed at which My Social Fox delivers its digital services to clients. Our team is well-equipped and experienced to handle projects efficiently, providing fast turnaround times without compromising on quality. We understand the importance of a quick response in the digital world, and we strive to deliver our services as soon as possible, to help clients achieve their business goals in a timely manner.",
    name: "",
    designation: "",
    company: "",

    image: logo,
  },
  {
    testimonial:
    "Impeccable Reliability highlights the dependability and trustworthiness of My Social Fox. We pride ourselves on providing consistent and high-quality services that clients can rely on. We understand that building trust is an important factor in any business, and we work hard to establish a strong and long-lasting relationship with our clients. Our team is always ready to go above and beyond to ensure that our clients are completely satisfied with our services.",

    name: "",
    designation: "",
    company: "",
    image: logo,
  },
  {
    testimonial:
      "Together, Unprecedented Velocity and Impeccable Reliability convey that My Social Fox is a reliable and efficient digital agency that can deliver fast and high-quality results to help clients grow their business.",
    name: "",
    designation: "",
    company: "",
    image: logo,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
