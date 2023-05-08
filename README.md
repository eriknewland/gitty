![Screen Shot 2023-05-07 at 7 03 05 PM](https://user-images.githubusercontent.com/114263701/236717776-b6a2b8b9-e6d8-4c5f-92ef-62959fc72f68.png)

# Gitty: Git Workflow Education

### Gitty is a platform to help users practice their git workflow, version control, and collaboration.

## Tech Stack

<p style="display:flex;justify-content:space-between">
<img src="https://img.shields.io/static/v1?style=for-the-badge&message=Tailwind+CSS&color=222222&logo=Tailwind+CSS&logoColor=06B6D4&label="/>
<img src="https://img.shields.io/static/v1?style=for-the-badge&message=Next.js&color=000000&logo=Next.js&logoColor=FFFFFF&label="/>
<img src="https://img.shields.io/static/v1?style=for-the-badge&message=React&color=222222&logo=React&logoColor=61DAFB&label="/>
<img src="https://user-images.githubusercontent.com/114263701/236717465-f0040f3b-01ff-4a6b-b3b8-ad767d6038d3.svg"/>
</p>

## Demo

Insert gif or link to demo


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

1. Create a new branch with your proposed lesson idea

2. Observe the following format for lesson creation. If you are unfamiliar with mermaidJS, I encourage you to visit their [online editor](https://mermaid.live/)
```javascript
  {
    title: 'Lesson 1\nGit Basics',
    icon: 'BsGithub',
    description: 'Learn the basics of Git and how to set up an account.',
    longDescription:
      'In this lesson, we will...',
    objectives: [
      'Understand the purpose of Git and GitHub',
      'Learn the differences between Git and GitHub',
      'Discover the benefits of using Git and GitHub',
      'Set up a GitHub account',
    ],
    content: [
      {
        sectionTitle: 'What is Git?',
        sectionContent:
          'Git is a distributed version...',
      },
      {
        sectionTitle: 'What is GitHub?',
        sectionContent:
          'GitHub is a web-based platform...',
      },
      {
        sectionTitle: 'Why use Git and GitHub?',
        sectionContent:
          'Using Git and GitHub can help developers...',
      },
      {
        sectionTitle: 'Setting up Git and GitHub accounts',
        sectionContent:
          "To get started with Git and GitHub...",
      },
    ],
    exercises: [
      {
        exerciseTitle: 'Create a GitHub account',
        exerciseInstructions:
          "If you haven't already, sign up...",
      },
    ],
    chartDefinition: `
    mindmap
    root)Git(
      )Git(
        (Version Control)
        ::icon(fa fa-github)
        (Commands)
          {{Basic}}
            ))init((
            ))add((
            ))commit((
            ))status((
          {{Advanced}}
            ))log((
            )) diff((
            ))merge((
            ))pull((
            )) push((
        (Branching)
          {{Types}}
            ))master((
            ))feature((
            ))hotfix((
      )GitHub(
        (Remote Repository)
        ::icon(fa fa-cloud)
        (Features)
          {{Issues & PRs}}
            ))Issues((
            ))Pull Requests((
          {{Repository}}
            ))Forks((
            ))Stars((
            ))Watchers((
        (Collaboration)
          {{Teams & Orgs}}
            ))Teams((
            ))Organizations((
          ))Code Review((
        (Integrations)
          {{CI/CD & Actions}}
            ))CI/CD((
            ))GitHub Actions((
          {{Webhooks & Apps}}
            ))Webhooks((
`,
  },

```
3. Add your lesson to the array located in /pages/lessons/lessonData.js

4. Submit a Pull Request.
## Run Locally

#### Clone the project

```bash
  git clone https://github.com/eriknewland/gitty
```

#### Go to the project directory

```bash
  cd gitty
```

#### Install dependencies

```bash
  npm install
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

#### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

#### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
