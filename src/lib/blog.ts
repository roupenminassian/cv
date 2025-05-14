import { parseISO, format } from "date-fns";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

// Hardcoded blog data instead of using the filesystem 
// This avoids the "Module not found: Can't resolve 'fs'" error in client components
const BLOG_POSTS: BlogPost[] = [
  {
    slug: "sxsw-sydney-2024",
    title: "Code, Compete, Conquer",
    date: "2024-10-22",
    summary: "How We Groq'd the SXSW Sydney 2024 Hackathon",
    tags: ["Groq", "SXSW", "Build Club"],
    content: `---
title: "Code, Compete, Conquer"
date: "2024-10-22"
summary: "How We Groq'd the SXSW Sydney 2024 Hackathon"
tags: ["Groq", "SXSW", "Build Club"]
---

Just two years ago, building even a basic AI application meant wrestling with infrastructure for weeks. You'd spend days setting up servers, configuring APIs, and debugging environment issues before writing a single line of meaningful code. At the SXSW Sydney 2024 Hackathon, we built a working MVP of a conversational AI platform in just 12 hours.

![SXSW Hackathon | Attendees of the SXSW Hackathon | 1200 | 800](/images/IMG_1600.jpg)

This rapid acceleration in development capabilities isn't just about faster computers or better tools – it's fundamentally changing how we approach problem-solving in tech. When you can prototype and test ideas in hours rather than weeks, you start thinking differently about what's possible.

## The MVP Reality

Our minimum viable product wasn't perfect – it had rough edges, limited error handling, and wouldn't scale to thousands of users. But it worked. It demonstrated the core functionality we envisioned: a small language model-powered application that could handle basic contextual conversations. Two years ago, even this basic implementation would have required deep expertise in machine learning, significant compute resources, and complex infrastructure management. Today, it took just a few API calls to Groq and some frontend work in Next.js.

## Rapid Iteration in Practice

![SXSW Hackathon | Lindy Hua (left) and Zac S. (middle left) working on their awesome idea 'LLMate' that helps users find the right model for their AI applications | 1200 | 800](/images/IMG_1603.jpg)

Our testing cycle was particularly telling. We could iterate on the AI's responses, tweak the interface, and deploy changes in minutes. Each deployment created a new environment where we could immediately test our changes. This instant feedback loop meant we could refine our MVP multiple times within our 12-hour window – something unthinkable in the traditional development cycle.

## The New Development Paradigm

This compression of development time raises interesting questions about the future of software development. When technical implementation becomes this fast, the bottleneck shifts to design thinking and user experience. The challenge is no longer "Can we build a basic version of this?" but "What should we prioritize in our MVP?"

In our case, we spent more time debating user interaction patterns than dealing with technical issues. The ability to rapidly prototype meant we could test multiple approaches to the same problem, but it also meant we needed to be ruthless about feature prioritization. When you can build anything quickly, choosing what not to build becomes crucial.

## Beyond the Hackathon

![SXSW Hackathon | Build Club Founders - Tom McKenzie (left) and Annie Liao | 1200 | 800](/images/IMG_1566.jpg)

This shift has implications beyond hackathons. In startup environments, the ability to rapidly implement ideas means companies can validate their assumptions faster. Failed experiments become less costly when they only represent hours of work rather than weeks or months.

The tools we used – Groq's API, Next.js, modern cloud platforms – aren't just making development faster; they're democratizing access to advanced technology. A small team with a good idea can now build and validate an MVP with sophisticated AI features in the same time it once took to set up a basic development environment.

## The Road to Production

Of course, there's a vast difference between an MVP and a production-ready application. Our hackathon project lacked proper error handling, comprehensive testing, scalability considerations, and many other elements crucial for a production system. But that wasn't the point – we proved the concept was viable and gathered valuable insights about the user experience in just 12 hours.

Looking ahead, this compression of development time will likely continue. As tools improve and abstractions become more powerful, the gap between idea and initial implementation will shrink further. This doesn't mean the end of complex software development – rather, it means developers can focus on solving more interesting problems instead of wrestling with infrastructure.

The SXSW hackathon proved that under pressure, with the right tools and focus, a small team can build a functional MVP in hours. But more importantly, it showed that we're entering an era where the limiting factor in initial software development isn't technical capability – it's the ability to quickly identify and implement the features that matter most.

The next challenge for developers isn't just learning new technical skills (though that remains important), but developing the ability to think critically about what constitutes a valuable MVP. When you can prototype almost anything in 12 hours, choosing what to build first becomes the hardest part.`
  },
  {
    slug: "timeseries-forecasting",
    title: "Taming Time Series Complexity",
    date: "2024-11-08",
    summary: "Strategies for organising and tracking multiple time series experiments",
    tags: ["Tensorflow", "Experiment Management"],
    content: `---
title: "Taming Time Series Complexity"
date: "2024-11-08"
summary: "Strategies for organising and tracking multiple time series experiments"
tags: ["Tensorflow", "Experiment Management"]
---

Time series modeling presents a unique challenge: the sheer number of experimental configurations you need to track. Whether you're predicting environmental conditions, stock prices, or energy consumption, organising these experiments effectively is crucial. Here's what I've learned from my recent work on environmental prediction models.

## Understanding the Configuration Space

Time series experiments quickly become complex due to the multitude of parameters we need to consider. At the temporal level, we must decide how much historical data to include, how far into the future to predict, and at what frequency to sample our data. These decisions alone can create numerous possible configurations.

Adding to this complexity are the model architecture decisions. Should we use CNNs, LSTMs, or perhaps a hybrid approach? Do we want univariate or multivariate predictions? Point forecasts or probabilistic ones? Each of these choices multiplies our experimental space. In my recent project, these combinations led to over 800 possible configurations - a number that highlighted the critical need for proper organisation.

## Organising Your Workspace

Through trial and error, I've found that a well-structured workspace is fundamental to managing this complexity. A clear directory hierarchy helps track everything from processed datasets to model weights and evaluation results:

\`\`\`
workspace/
├── processed_data/      # Clean, standardised datasets
├── models/             # Model-specific files
│   ├── weights/        # Saved model states
│   ├── history/        # Training histories
│   └── metrics/        # Performance tracking
└── evaluation/         # Analysis results
    └── figures/        # Visualisations
\`\`\`

## Automation and Analysis

With hundreds of potential configurations, manual tracking becomes impossible. Modern tools like Weights & Biases or MLflow become invaluable for logging parameters, metrics, and compute resources. These tools not only track experiments but also help visualise results and compare different approaches.

Feature importance adds another fascinating layer to time series analysis. Understanding how different features contribute to our predictions - and how these contributions change over time - can provide crucial insights. Seasonal patterns might emerge, or we might discover that certain variables are only relevant during specific conditions.

## The Path Forward

Starting simple has proven to be the most effective approach. Beginning with baseline models and gradually increasing complexity allows us to understand the impact of each change. Clear naming conventions and standardised evaluation metrics ensure that our results remain comparable as our experiments grow.

The most valuable lesson I've learned is that good organisation isn't just about keeping files tidy - it's about making our research reproducible and our findings accessible. As our models and datasets grow more complex, the ability to track, compare, and understand our experiments becomes increasingly crucial.

The code structure I developed for my environmental prediction project is available on GitHub, but these principles can be applied to any time series modeling task. By maintaining this organised approach, we can focus on what really matters: understanding our data and improving our predictions.`
  }
];

// Helper function to remove frontmatter from content
function removeFrontmatter(content: string): string {
  // Check if content starts with --- which indicates frontmatter
  if (content.startsWith('---')) {
    // Find the end of the frontmatter section (the second ---)
    const endOfFrontmatter = content.indexOf('---', 3);
    if (endOfFrontmatter !== -1) {
      // Return the content after the frontmatter, trimming any leading whitespace
      return content.substring(endOfFrontmatter + 3).trim();
    }
  }
  return content;
}

export function getAllPosts(): BlogPost[] {
  // Format dates to ensure consistency
  return BLOG_POSTS.map(post => ({
    ...post,
    date: formatDate(post.date)
  })).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts();
  const post = posts.find((post) => post.slug === slug);
  
  if (post) {
    // Return a copy with frontmatter removed
    return {
      ...post,
      content: removeFrontmatter(post.content)
    };
  }
  
  return undefined;
}

function formatDate(dateStr: string): string {
  // Remove quotes from the date string if they exist
  const cleanDateStr = dateStr.replace(/"/g, '');
  
  try {
    if (cleanDateStr) {
      return format(parseISO(cleanDateStr), "yyyy-MM-dd");
    }
  } catch (error) {
    console.error(`Error parsing date: ${cleanDateStr}`, error);
  }
  
  return dateStr; // Fallback to original date string
}