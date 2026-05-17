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
      "It started with a passion for neuroscience at the ",
      link("University of Sydney", "https://www.sydney.edu.au/"),
      " - learning about how information flows through the brain and the craft of thinking in systems.",
    ],
  },
  {
    id: "datapoint",
    content: [
      "At ",
      link("DataPoint Armenia", "https://www.datapoint.am/projects"),
      ", I developed a taste for NLP whilst interpreting information flows in online media - revealing the false narratives moving through social networks, and the signatures they leave behind. ",
      link("Forbes", "https://www.forbes.com/sites/jackieabramian/2021/09/27/a-year-after-unleashing-war-crimes-against-indigenous-armenians-azerbaijans-threats-and-violations-continue/"),
      " wrote about our work and ",
      strike("Twitter"),
      " X updated its policies from our insights. That's when the scale and impact of what data science can do landed for me.",
    ],
  },
  {
    id: "fujitsu",
    content: [
      link("Fujitsu", "https://global.fujitsu/en-apac/"),
      " is where I went deep on language models, building conversational agents for enterprise clients. I engineered feedback loops that sharpened intent recognition and designed dialogue flows that surfaced the right details from users.",
    ],
  },
  {
    id: "uts",
    content: [
      link("UTS", "https://www.uts.edu.au/"),
      " positioned me across labs as the technical glue. I designed semantic search over legal documents with ",
      link(
        "FASS",
        "https://www.uts.edu.au/about/faculty-arts-and-social-sciences",
      ),
      ", clustered usage patterns inside digital twin models with ",
      link("DSI", "https://www.uts.edu.au/research/data-science-institute"),
      ", and built explainable models with interpretable interfaces at ",
      link("HCAI Lab", "https://www.uts.edu.au/research/human-centred-ai"),
      ". I learnt the importance of strategy and developed the agency to shape projects from problem to delivery."
    ],
  },
  {
    id: "suncorp",
    content: [
      link("Suncorp", "https://www.suncorp.com.au/"),
      " taught me to operationalise everything I know. I pulled ML out of notebooks, and into the workflows of a regulated enterprise. I built pipelines that structured un-structured data at scale - all the while ensuring that safety measures like kill switches, model monitoring and rollback strategies were top of mind.",
    ],
  },
  {
    id: "vern",
    content: [
      "Now as a co-founder at ",
      link("Vern", "https://www.vern.so/"),
      ", I engineer agents to do the document structuring that I would previously hand-build, in a platform purpose-built for large-scale data migrations. My prior work feeds my current skillset as technical founder, priming me to design the security infrastructure and agentic harness that maintains our models as safe, reliable, and interpretable systems.",
    ],
  },
  {
    id: "outro",
    content: [
      "If you'd like to chat about any of the above, please reach out:",
      link("roupenm@me.com", "mailto:roupenm@me.com"),
      ", ",
      link("cal.com/roupen-minassian", "https://cal.com/roupen-minassian/15min"),
      ", or ",
      link("LinkedIn", "https://www.linkedin.com/in/roupenminassian/"),
      ".",
    ],
  },
];
