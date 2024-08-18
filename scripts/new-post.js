const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the blog post title: ", (title) => {
  rl.question("Enter a brief summary: ", (summary) => {
    rl.question("Enter tags (comma-separated): ", (tags) => {
      const date = new Date().toISOString().split("T")[0];
      const slug = title.toLowerCase().replace(/[^\w]+/g, "-");
      const fileName = `${date}-${slug}.md`;
      const filePath = path.join(
        __dirname,
        "..",
        "src",
        "content",
        "blog",
        fileName,
      );

      const content = `---
title: "${title}"
date: "${date}"
summary: "${summary}"
tags: [${tags
        .split(",")
        .map((tag) => `"${tag.trim()}"`)
        .join(", ")}]
---

Your content here...
`;

      fs.writeFileSync(filePath, content);
      console.log(`Blog post created: ${filePath}`);
      rl.close();
    });
  });
});
