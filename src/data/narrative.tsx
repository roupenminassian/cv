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
      "Hey! I'm Roupen. I design intelligent systems — interfaces, architectures, and the seams between them.",
    ],
  },
  {
    id: "study",
    content: [
      "It started with neuroscience at the ",
      link("University of Sydney", "https://www.sydney.edu.au/"),
      " — learning how information propagates through systems, and behaviour crafted across scales.",
    ],
  },
  {
    id: "datapoint",
    content: [
      link("DataPoint Armenia", "https://www.datapoint.am/projects"),
      " helped surface the same intuitions in a different domain: false narratives moving through social networks, who amplified them, and the structural signatures they left behind. ",
      link("Forbes", "https://www.forbes.com/sites/jackieabramian/2021/09/27/a-year-after-unleashing-war-crimes-against-indigenous-armenians-azerbaijans-threats-and-violations-continue/"),
      " wrote about our work, ",
      strike("Twitter"),
      " X updated its policies from our insights, and from there I was thrown into data science.",
    ],
  },
  {
    id: "fujitsu",
    content: [
      "At ",
      link("Fujitsu", "https://global.fujitsu/en-apac/"),
      ", the medium became language. I built conversational agents for enterprise clients, with user intents surfacing from the bottom up, and fed back in as labels the agents could learn from. An early version of LLM guardrails.",
    ],
  },
  {
    id: "uts",
    content: [
      link("University of Technology Sydney", "https://www.uts.edu.au/"),
      " sat me across labs as the technical glue. Semantic search over legal corpora with ",
      link(
        "FASS",
        "https://www.uts.edu.au/about/faculty-arts-and-social-sciences",
      ),
      " building early versions of retrieval augmented pipelines,",
      " clustering timeseries usage patterns inside digital twin models with ",
      link("DSI", "https://www.uts.edu.au/research/data-science-institute"),
      ", and digital health monitoring with the ",
      link("HCAI Lab", "https://www.uts.edu.au/research/human-centred-ai"),
      " building explainable and interpretable interfaces."
    ],
  },
  {
    id: "suncorp",
    content: [
      link("Suncorp", "https://www.suncorp.com.au/"),
      " then pulled everything toward production and operations. ML out of notebooks and into a regulated enterprise — kill switches, rollback gates, the ability to pause, or unwind a deployed model the moment it drifted from what training had assumed. Alongside that, pipelines that aggregated unstructured data at scale — fragmented inputs reassembled into coherent records the business could act on.",
    ],
  },
  {
    id: "vern",
    content: [
      "Now as a co-founder at ",
      link("Vern", "https://www.vern.so/"),
      ", agents do the document aggregation I used to hand-build, purpose-built for data migration during customer onboarding. The production instincts and the harness for keeping models honest sit underneath it.",
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
