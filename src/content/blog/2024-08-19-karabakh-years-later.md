---
title: "Karabakh: Years Later"
date: "2024-08-19"
summary: "Reflections on the Nagorno-Karabakh conflict through the lens of social media"
tags: ["LLM", "Twitter", "Social Justice"]
---

To think that the pandemic took place four years ago still surprises me. Fresh out of university and thrown into corporate life, my expectations for that year were a strict weekday 9-5 grind accompanied by casual friday drinks at the local pub. Maybe to the exception of [Bill Gates](https://www.youtube.com/watch?v=6Af6b_wyiwI), no one foresaw the global spread of a then deadly virus that overnight became an infamous household name. For a small minority of us, that was not the only significant event that took place that year. Armenians both in the diasporia and nestled within the caucassus idly stood by as conflict erupted in the Nagorno-Karabakh region. Helpess and desperate (and for some, restricted from leaving their own homes), many took to social media to garner attention from their local communities.

To this day, I still ponder whether how we approached community outreach then was as effective as it could have been, and even more wonder whether work can be done now to make sense of that time. In those days, facebook and whatsapp groups formed, new accounts created, tweetathons, campaigns and the like were frequent but not strategised. Personally, I engaged with peers in the US who had then conceptualised some rigourous method to try and analyse tweets with certain hashtags. Over the course of many months and late nights, the analyses was published online in a hefty 60 page, journal-article style manuscript. Sure, there were some interesting findings that caught the attention of several Twitter executives and a notable mention in [Forbes](https://www.forbes.com/sites/jackieabramian/2021/09/27/a-year-after-unleashing-war-crimes-against-indigenous-armenians-azerbaijans-threats-and-violations-continue/) but nothing much else precipitated. By then, the group were starting to feel the need for a break to recharge, and we felt we had exhausted all approaches of analysing tweets.

Since then, as the landscape of natural language processing had changed drastically, I felt it was an appropriate time to revisit this problem space. Understanding language, especially in politically-charged social media campaigns, has become critical in the advent of extremist cultural movements. Approaches to unravel language and meaning in recent years has erupted into popularity with AI models like ChatGPT, and a plethora of [open-source transformers](https://huggingface.co/), that has allowed many machine learning hobbyists and practicioners alike to apply a gamut of interpretation to their data.

![karabakhNLP | karabakhNLP loading screen | 1200 | 800](/images/2.gif)

In response to these advancements, I present [karabakhNLP](https://www.karabakhnlp.com/) as an attempt to more intuitively represent tweet behaviours during the Nagorno-Karabakh conflict of 2020. On reflecting how this has been previously documented, karabakhNLP is an interactive data visualisation that considers UI/UX principles to guide the audience in navigating the sample of ~30,000 sample tweets within one view.

![karabakhNLP | Timeseries Brush used to filter creation dates of social media posts | 1200 | 800](/images/1.gif)

Many techniques were used in order to present this information effectively, such as transformer embeddings and text classification. It became clear to me during this process of design and implementation that making data more ingestible to a wider array of audience members incentivises conversation and discussion. I encourage anyone to visit this web application on their desktop for the best experience and hope that it provides richer story-telling.

![karabakhNLP | Responsive keyword search filtering tools | 1200 | 800](/images/3.gif)

If you have any issues or suggestions, please feel free to reach out to me through any of my available contact methods.
