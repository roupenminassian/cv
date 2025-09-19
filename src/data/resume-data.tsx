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
import { CalendarIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Roupen Minassian",
  initials: "RM",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/sydney",
  about: "Data Specialist",
  summary: "Experienced in LLM agents, NLP systems, and time-series applications across healthcare, finance, and enterprise sectors.",
  avatarUrl: "/images/notion-face.png",
  personalWebsiteUrl: "https://www.roupenminassian.com/",
  contact: {
    email: "roupenm@me.com",
    tel: "+61 0404 061 884",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/roupenminassian/",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/roupenminassian",
        icon: GitHubIcon,
      },
      {
        name: "Calendar",
        url: "https://cal.com/roupen-minassian/15min",
        icon: CalendarIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Sydney",
      degree: "Bachelor of Medical Science (Neuroscience + Physiology)",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Vern",
      link: "https://www.vern.so/",
      badges: ["In Office","Remote"],
      title: "Co-Founder, CTO",
      logo: ParabolLogo,
      start: "Febuary 2025",
      end: "Present",
      description:
        "Building the future of AI Agents for startups.",
    },
    {
      company: "Suncorp Group",
      link: "https://www.suncorp.com.au/",
      badges: ["In Office", "Remote"],
      title: "MLOps Engineer - Gen AI",
      logo: ParabolLogo,
      start: "July 2024",
      end: "July 2025",
      description:
        "Build and deploy machine learning models and AI systems at scale.",
    },
    {
      company: "Build Club",
      link: "https://www.buildclub.com/",
      badges: ["Remote"],
      title: "AI Builder Fellow",
      logo: ParabolLogo,
      start: "October 2024",
      end: "January 2025",
      description:
        "Fellowship program focused on building AI applications and products.",
    },
    {
      company: "University of Technology Sydney",
      link: "https://www.uts.edu.au/",
      badges: ["Remote"],
      title: "Machine Learning Researcher",
      logo: ParabolLogo,
      start: "October 2021",
      end: "June 2024",
      description:
        "Conducted research in NLP, computer vision, and timeseries fields.",
    },
    {
      company: "Fujitsu",
      link: "https://global.fujitsu/en-apac/",
      badges: ["Remote"],
      title: "Machine Learning Engineer",
      logo: ParabolLogo,
      start: "November 2021",
      end: "June 2024",
      description:
        "Led the end-to-end design, prototyping, and development of a conversational AI agents.",
    },
    {
      company: "Westpac",
      link: "https://www.westpac.com.au/",
      badges: ["In Office"],
      title: "Operations Associate",
      logo: ParabolLogo,
      start: "January 2020",
      end: "July 2021",
      description:
        "Operations and administrative support in banking services.",
    },
  ],
  skills: [
    "Databricks",
    "Hugging Face",
    "SQL",
    "Python",
    "JavaScript",
    "Machine Learning",
    "TensorFlow",
    "Computer Vision",
    "Redis",
    "Natural Language Processing (NLP)",
    "Deep Learning",
  ],
  projects: [
    {
      title: "Twitter Misinformation",
      techStack: ["Hugging Face", "Python", "NLP", "PyTorch", "Transformers"],
      description: "Built for academic research, this dataset enables studying information spread patterns and developing automated fact-checking systems.",
      logo: ConsultlyLogo,
      link: {
        label: "twitter-misinformation",
        href: "https://huggingface.co/datasets/roupenminassian/twitter-misinformation",
      },
    },
    {
      title: "Ella.io",
      techStack: ["Groq", "Vercel", "Next.js", "Hugging Face", "TypeScript", "TailwindCSS", "LangChain"],
      description: "SXSW Sydney 2024 Hackathon Winning Solution.",
      logo: ConsultlyLogo,
      link: {
        label: "Ella.io",
        href: "https://ellaio.vercel.app/",
      },
    },
    {
      title: "HASS-DSI",
      techStack: ["TensorFlow", "Weights & Biases", "Shapley", "Python", "Pandas", "NumPy", "Matplotlib"],
      description: "A framework for experimenting and testing deep-learning timeseries models.",
      logo: ConsultlyLogo,
      link: {
        label: "HASS-DSI",
        href: "https://github.com/Future-Mobility-Lab/DSI-DAB-smart-building-env-prediction",
      },
    },
    {
      title: "karabakhNLP",
      techStack: ["Redis", "JavaScript", "Next.js", "Vercel", "D3.js", "TailwindCSS", "React"],
      description:
        "An interactive data visualization exploring malicious behavior on Twitter.",
      logo: ConsultlyLogo,
      link: {
        label: "www.karabakhnlp.com/",
        href: "https://www.karabakhnlp.com/",
      },
    },
    {
      title: "CRC-P",
      techStack: ["Scikit-Learn", "Python", "NumPy", "Pandas", "XGBoost", "Matplotlib", "Seaborn"],
      description: "Human activity classification using wearable sensor data.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/roupenminassian/CRC-P",
        href: "https://github.com/roupenminassian/CRC-P",
      },
    },
    {
      title: "Traffic-AnalysisxUTS",
      techStack: [
        "Scikit-Learn",
        "Python",
        "NumPy",
        "Pandas",
        "OpenCV",
        "Hugging Face",
        "Transformers",
        "PyTorch",
        "Computer Vision"
      ],
      description: "Tool for analyzing traffic from footage.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com/roupenminassian/Traffic-AnalysisxBuiltEnvironment",
        href: "https://github.com/roupenminassian/Traffic-AnalysisxBuiltEnvironment",
      },
    },
    {
      title: "DRNxUTS",
      techStack: [
        "Scikit-Learn",
        "Python",
        "NumPy",
        "Pandas",
        "GPT-3",
        "BERT",
        "Transformers",
        "NLP",
        "Hugging Face"
      ],
      description: "Utilizing NLP to improve document search.",
      logo: ConsultlyLogo,
      link: {
        label:
          "github.com/roupenminassian/UTS-DSI-x-Disability-Research-Network",
        href: "https://github.com/roupenminassian/UTS-DSI-x-Disability-Research-Network",
      },
    },
  ],
} as const;