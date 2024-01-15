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
  avatarUrl: "https://www.linkedin.com/in/norarose-aroyan/overlay/photo/",
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
      badges: ["Remote"],
      title: "Junior Product Manager",
      start: "2023",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code.",
    },
  ],
  skills: ["JavaScript", "Python"],
} as const;
