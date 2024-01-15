import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Nora-Rose Aroyan",
  initials: "NA",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/sydney",
  about: "A Product Manager.",
  summary: "As a Product Manager, I manage products ;)",
  avatarUrl:
    "https://media.licdn.com/dms/image/D5603AQFaQvY-fHdXmw/profile-displayphoto-shrink_800_800/0/1697517454867?e=1710979200&v=beta&t=0-t6ZAAQWyVF6mOtk50MMBJtsWw0yGECwsqvOACVJBI",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "norarosearoyan@gmail.com",
    tel: "+61466383683",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/norarose-aroyan/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Technology, Sydney",
      degree:
        "Bachelor's Degree in Business and Creative Intelligence and Innovation",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "BLD ACDMY",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Junior Product Manager",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "Implemented systems in the product purchase journey, lead cross-functional agile teams, develop and manage product roadmaps.",
    },
    {
      company: "BLD ACDMY",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Innovation Specialist",
      logo: ParabolLogo,
      start: "2022",
      end: "2022",
      description:
        "Led the end-to-end design, prototyping, and development of a comprehensive line of digital products.",
    },
    {
      company: "Snowmelt",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Systemic Design Internship",
      logo: ParabolLogo,
      start: "2020",
      end: "2020",
      description:
        "Developed expertise in creating effective systemic solutions while navigating client demands and time constraints.",
    },
  ],
  skills: [
    "Scum",
    "Product Development",
    "Economic Analysis",
    "Figma",
    "Ux/UI Design",
    "Systemic Design",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
