import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  // {
  //   imageUrl: mui,
  //   name: "Material-UI",
  //   type: "Frontend",
  // },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  // {
  //   imageUrl: redux,
  //   name: "Redux",
  //   type: "State Management",
  // },
  // {
  //   imageUrl: sass,
  //   name: "Sass",
  //   type: "Frontend",
  // },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Subhead",
    company_name: "National Students’ Space Challenge 2023",
    icon: "", // Replace this with the actual icon variable or image link
    iconBg: "#accbe1",
    date: "July 2023 - Aug 2023",
    points: [
      "Designed and developed frontend of multiple pages for the National Students’ Space Challenge 2023.",
      "Utilized React.js best practices along with collaboration with co-team members using Git and GitHub.",
    ],
  },
  {
    title: "Executive Member",
    company_name: "Space Technology Students’ Society",
    icon: "", // Replace this with the actual icon variable or image link
    iconBg: "#fbc3bc",
    date: "May 2023 - Feb 2024",
    points: [
      "Designed and developed pages for the Space Technology Students’ Society using React JS.",
      "Monitored the society's codebase to ensure its stability and fixed minor bugs to improve overall performance.",
      "Led an online web development workshop, mentored 100+ students, and distributed completion certificates.",
    ],
  },
];

export const socialLinks = [
  // {
  //   name: "Contact",
  //   iconUrl: contact,
  //   link: "/contact",
  // },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/bipinkumar8521",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/https://www.linkedin.com/in/bipin-kumar-iitkgp/",
  },
];

export const projects = [
  {
    iconUrl: "", // Replace with actual icon URL or variable
    theme: "btn-back-red",
    name: "StudySphere",
    description:
      "Developed a teaching and learning platform using Next.js with features like one-click login, video conferencing, secure payment processing, and automated certificate generation.",
    link: "https://studysphere-dev.vercel.app/", // Replace with the actual GitHub link if available
  },
  {
    iconUrl: "", // Replace with actual icon URL or variable
    theme: "btn-back-green",
    name: "ImageGenius",
    description:
      "Built an AI-powered image transformation platform featuring generative fill, image restoration, and secure payment handling with Razorpay.",
    link: "https://imagegenius-ai.vercel.app/", // Replace with the actual GitHub link if available
  },
  {
    iconUrl: "", // Replace with actual icon URL or variable
    theme: "btn-back-blue",
    name: "YourPlaces",
    description:
      "Created a full-stack MERN social platform allowing users to share and explore different places, complete with image upload, authentication, and advanced search functionality.",
    link: "https://yourplacesweb.netlify.app/", // Replace with the actual GitHub link if available
  },
  {
    iconUrl: "", // Replace with actual icon URL or variable
    theme: "btn-back-yellow",
    name: "Magic Match Game",
    description:
      "Built a React-based memory match game with features like a timer, high-score tracking using local storage, music integration, and user feedback through EmailJS.",
    link: "https://bipinkumar8521.github.io/memory-match/",
  },
];
