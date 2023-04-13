## Getting Started

<!-- First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->

## Getting Started

- Create project `npx create-next-app project_name`
- To check commands `/package.json` in `scripts`
- To run project on local use `yarn dev`
- To build project use `yarn build`

Enviroment
- Same code but different data
  -- Test
  -- Production (Live)

Deployment
- Uploading changes on local project live on host website
- Vercel (hosting platform)
- Push to Github > Vercel will automatically deploy > Vercel will install dependencies

Process of Deployment
- Build project locally `yarn build`
- Upload build files to host website
- Host website will run build files

File Structure & Path
- .next (files next js)
- [node_modules](https://www.npmjs.com/) / Packages
- public (static files - images, fonts, etc)
- src
  -- pages
  ---- index.js
  -- styles
- eslint `syntax checker`
- gitignore `git will ignore these files`
- jsconfig.json `for shortcut of path`
- next.config.js `for custom configuration`
- package.json `dependencies`