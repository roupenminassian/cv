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
import { getAllPosts } from "@/lib/blog";

export const RESUME_DATA = {
  name: "Roupen Minassian",
  initials: "RM",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/sydney",
  about: "Data Scientist / Machine Learning Engineer",
  summary: "Building data-intensive applications. Currently chasing the sun.",
  avatarUrl: "/images/notion-face.png",
  personalWebsiteUrl: "https://www.roupenminassian.xyz/",
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
      company: "Suncorp",
      link: "https://www.suncorp.com.au/",
      badges: ["In Office", "Remote"],
      title: "Data Scientist - Generative AI",
      logo: ParabolLogo,
      start: "2024",
      end: "Current",
      description:
        "Overseeing the complete lifecycle of LLM agents, from design and prototyping to deployment.",
    },
    {
      company: "Fujitsu",
      link: "https://global.fujitsu/en-apac/",
      badges: ["Remote"],
      title: "Machine Learning Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Led the end-to-end design, prototyping, and development of a conversational AI agents.",
    },
    {
      company: "UTS Data Science Institute",
      link: "https://www.uts.edu.au/data-science-institute",
      badges: ["Remote"],
      title: "Machine Learning Researcher",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Conducted research in NLP, computer vision, and timeseries fields.",
    },
    {
      company: "Westpac",
      link: "https://www.westpac.com.au/",
      badges: ["In Office"],
      title: "Operations Associate",
      logo: ParabolLogo,
      start: "2020",
      end: "2021",
      description:
        "Managed system operations, ensuring robust maintenance, configuration, and content management within Westpac",
    },
  ],
  skills: [
    "Databricks",
    "Hugging Face",
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
      title: "Twitter Misinformation",
      techStack: ["Hugging Face"],
      description: "Built for academic research, this dataset enables studying information spread patterns and developing automated fact-checking systems.",
      logo: ConsultlyLogo,
      link: {
        label: "twitter-misinformation",
        href: "https://huggingface.co/datasets/roupenminassian/twitter-misinformation",
      },
    },
    {
      title: "Ella.io",
      techStack: ["Groq", "Vercel", "Next.js", "Hugging Face"],
      description: "SXSW Sydney 2024 Hackathon Winning Solution.",
      logo: ConsultlyLogo,
      link: {
        label: "Ella.io",
        href: "https://ellaio.vercel.app/",
      },
    },
    {
      title: "HASS-DSI",
      techStack: ["Tensorflow", "WandB", "Shapley"],
      description: "A framework for experimenting and testing deep-learning timeseries models.",
      logo: ConsultlyLogo,
      link: {
        label: "HASS-DSI",
        href: "https://github.com/Future-Mobility-Lab/DSI-DAB-smart-building-env-prediction",
      },
    },
    {
      title: "karabakhNLP",
      techStack: ["Redis", "Javascript", "Next.js", "Vercel", "D3.js"],
      description:
        "An interactive data visualisation exploring malicious behaviour on Twitter.",
      logo: ConsultlyLogo,
      link: {
        label: "www.karabakhnlp.com/",
        href: "https://www.karabakhnlp.com/",
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
  blogPosts: getAllPosts().map((post) => ({
    title: post.title,
    date: post.date,
    summary: post.summary,
    tags: post.tags,
    link: `/blog/${post.slug}`,
  })),
  publications: [
    {
      title: "Optimizing Indoor Environmental Prediction in Smart Buildings: A Comparative Analysis of Deep Learning Models",
      authors: ["Minassian, R.", "Mihăiţă, A.S.", "Shirazi, A."],
      venue: "Energy and Buildings",
      date: "2024-11-22",
      type: "Journal" as const,
      badges: ["Oral Presentation", "Deep Learning", "Shapley"],
      link: "https://doi.org/10.1016/j.enbuild.2024.115086"
    }
  ] as const,
} as const;
