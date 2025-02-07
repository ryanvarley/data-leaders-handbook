# Data Science Handbook

## About this handbook

Welcome to the Data Leaders Handbook. You have found the source code. If you want to browse the book you are better of using the website at [https://handbook.dataleadership.ai/](https://handbook.dataleadership.ai/).

This is a place I can share resources that I intend to grow and evolve over time. While the intended audience is leaders in data fields like Data Science, Data Engineering and Data Analytics the content should be very relevant to engineering leaders and managers and similar roles.

For now this just contains 1:1 questions but I have plenty more to add in future including questions for interviews, skip levels and feedback. The best way to get updates is to subscribe to the main blog [Data Leadership](https://blog.dataleadership.ai/).

I welcome suggestions and pull requests (though for now I reserve the right to be the sole judge of what gets added).

<img src="https://github.com/user-attachments/assets/3556d65c-6ade-46ff-aea6-2674e9822790" width="600px">

## This Repo

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Running locally

Install npm and Node >= 0.18

```
npm run start
```

This will serve the site locally so you can see your changes.

### Deployment

This is done automatically through Cloudflare Pages.

PRs will be built and served on private urls.

## Misc

Generate heading ids (for links)

```
npm run write-heading-ids . docs/interview-questions.mdx
```
