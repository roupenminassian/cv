export type NarrativeLink = {
  type: "link";
  label: string;
  href: string;
};

export type NarrativeStrike = {
  type: "strike";
  label: string;
};

export type NarrativeToken = string | NarrativeLink | NarrativeStrike;

export type Chapter = {
  id: string;
  content: NarrativeToken[];
};

const link = (label: string, href: string): NarrativeLink => ({
  type: "link",
  label,
  href,
});

const strike = (label: string): NarrativeStrike => ({
  type: "strike",
  label,
});

export const NARRATIVE: Chapter[] = [
  {
    id: "intro",
    content: [
      "Hey! I'm Roupen. I design intelligent systems - interfaces, architectures, and the seams in between.",
    ],
  },
  {
    id: "study",
    content: [
      "It started with neuroscience at the ",
      link("University of Sydney", "https://www.sydney.edu.au/"),
      " - learning about how information flows through the brain and thinking in systems.",
    ],
  },
  {
    id: "datapoint",
    content: [
      link("DataPoint Armenia", "https://www.datapoint.am/projects"),
      " threw me into data science as I built an intuition around natural language processing and information flows in online media: false narratives moving through social networks, and the signatures they leave behind. ",
      link("Forbes", "https://www.forbes.com/sites/jackieabramian/2021/09/27/a-year-after-unleashing-war-crimes-against-indigenous-armenians-azerbaijans-threats-and-violations-continue/"),
      " wrote about our work, ",
      strike("Twitter"),
      " X updated its policies from our insights.",
    ],
  },
  {
    id: "fujitsu",
    content: [
      link("Fujitsu", "https://global.fujitsu/en-apac/"),
      " helped me hone in on language models as I built conversational agents for enterprise clients - building feedback loops for improving intent recognition and designing conversations to extract details.",
    ],
  },
  {
    id: "uts",
    content: [
      link("University of Technology Sydney", "https://www.uts.edu.au/"),
      " sat me across labs as the technical glue. Semantic search over legal documents with ",
      link(
        "FASS",
        "https://www.uts.edu.au/about/faculty-arts-and-social-sciences",
      ),
      " building early information retrieval systems,",
      " clustering usage patterns inside digital twin models with ",
      link("DSI", "https://www.uts.edu.au/research/data-science-institute"),
      ", and digital health monitoring with the ",
      link("HCAI Lab", "https://www.uts.edu.au/research/human-centred-ai"),
      " building explainable models and interpretable interfaces."
    ],
  },
  {
    id: "suncorp",
    content: [
      link("Suncorp", "https://www.suncorp.com.au/"),
      " then pulled everything toward operations. ML out of notebooks and into a regulated enterprise — kill switches, rollback gates, the ability unwind a deployed model the moment it drifted. Alongside that, I built pipelines that structured un-structured data at scale - fragmented inputs reassembled into coherent records the business could act on.",
    ],
  },
  {
    id: "vern",
    content: [
      "Now as a co-founder at ",
      link("Vern", "https://www.vern.so/"),
      ", agents do document structuring I used to hand-build - purpose-built for data migration during customer onboarding. The agentic harness for keeping models accurate, reliable and interpretable sit underneath it.",
    ],
  },
  {
    id: "outro",
    content: [
      "If you want to talk: ",
      link("roupenm@me.com", "mailto:roupenm@me.com"),
      ", ",
      link("cal.com/roupen-minassian", "https://cal.com/roupen-minassian/15min"),
      ", or ",
      link("LinkedIn", "https://www.linkedin.com/in/roupenminassian/"),
      ".",
    ],
  },
];
