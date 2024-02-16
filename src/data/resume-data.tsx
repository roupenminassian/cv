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
  name: "Roupen Minassian",
  initials: "RM",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/sydney",
  about: "Data Scientist | Machine Learning Engineer",
  summary: "Building data-intensive applications.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D5603AQGlrcgLcX9Vpg/profile-displayphoto-shrink_800_800/0/1707890520752?e=1713398400&v=beta&t=r4ZlOu-iCg120E_UkGktpNtKSwhW5-vXIviutNNv_gg",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "roupenm@me.com",
    tel: "+61 0404 061 884",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/roupenminassian/",
        icon: LinkedInIcon,
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
    {
      school: "University of New South Wales",
      degree: "Master of Information Technology (Artificial Intelligence)",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Fujitsu",
      link: "https://global.fujitsu/en-apac/",
      badges: ["Remote"],
      title: "Machine Learning Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "",
      description:
        "Led the end-to-end design, prototyping, and development of a conversational AI agents.",
    },
    {
      company: "Data Science Institute, UTS",
      link: "https://www.uts.edu.au/data-science-institute",
      badges: ["Remote"],
      title: "Machine Learning Researcher",
      logo: ParabolLogo,
      start: "2021",
      end: "2023",
      description:
        "Conducted research in NLP, computer vision, and timeseries fields.",
    },
    {
      company: "DataPoint Armenia",
      link: "https://datapoint.am/",
      badges: ["Remote"],
      title: "Data Scientist",
      logo: ParabolLogo,
      start: "2020",
      end: "2021",
      description:
        "Oversaw social media dataset quality control and analyzing metrics to identify suspicious activities, aiding Twitter in misinformation strategy.",
    },
    {
      company: "Westpac",
      link: "https://www.westpac.com.au/",
      badges: [],
      title: "Operations Associate",
      logo: ParabolLogo,
      start: "2020",
      end: "2021",
      description:
        "Managed system operations, ensuring robust maintenance, configuration, and content management within Westpac",
    },
  ],
  skills: [
    "Microsoft Azure",
    "SQL",
    "Python",
    "JavaScript",
    "Machine Learning",
    "Tensorflow",
    "Computer Vision",
    "Redis",
    "Natural Language Processing (NLP)",
    "Deep Learning",
  ],
  projects: [
    {
      title: "LLMxTwitter",
      techStack: ["Redis", "Javascript", "Next.js", "Vercel", "D3.js"],
      description:
        "An interactive data visualisation exploring malicious behaviour on Twitter.",
      logo: ConsultlyLogo,
      link: {
        label: "ll-mx-twitterx-visualisation.com",
        href: "https://ll-mx-twitterx-visualisation.vercel.app/",
      },
    },
    {
      title: "Dziv",
      techStack: ["Scikit-Learn", "Python", "numpy", "pandas", "NLTK", "spaCy"],
      description: "A comprehensive review on astroturfing on Twitter.",
      logo: ConsultlyLogo,
      link: {
        label: "datapoint.am/dziv/",
        href: "https://datapoint.am/dziv/",
      },
    },
    {
      title: "CRC-P",
      techStack: ["Scikit-Learn", "Python", "numpy", "pandas", "XGBoost"],
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
        "numpy",
        "pandas",
        "OpenCV",
        "Hugging Face",
        "Transformers",
        "PyTorch",
      ],
      description: "Tool for analysing traffic from footage.",
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
        "numpy",
        "pandas",
        "GPT3",
        "BERT",
        "Transformers",
      ],
      description: "Utilising NLP to improve document search.",
      logo: ConsultlyLogo,
      link: {
        label:
          "github.com/roupenminassian/UTS-DSI-x-Disability-Research-Network",
        href: "https://github.com/roupenminassian/UTS-DSI-x-Disability-Research-Network",
      },
    },
  ],
} as const;
