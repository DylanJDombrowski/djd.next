This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
djd.next
├─ eslint.config.mjs
├─ next-env-custom.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ postcss.config.mjs
├─ public
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ images
│  │  ├─ Dylan Dombrowski - Pizza.jpg
│  │  ├─ DylanDombrowskiProfessional.jpg
│  │  ├─ fire-fluentflat-512.png
│  │  └─ fire-fluentflat.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ (site)
│  │  │  ├─ about
│  │  │  │  └─ page.tsx
│  │  │  ├─ blog
│  │  │  │  ├─ page.tsx
│  │  │  │  ├─ topic
│  │  │  │  │  └─ [topic]
│  │  │  │  │     └─ page.tsx
│  │  │  │  └─ [slug]
│  │  │  │     └─ page.tsx
│  │  │  ├─ contact
│  │  │  │  └─ page.tsx
│  │  │  ├─ projects
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [slug]
│  │  │  │     └─ page.tsx
│  │  │  ├─ services
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ [slug]
│  │  │  │     └─ page.tsx
│  │  │  └─ unsubscribe-confirmation
│  │  │     └─ page.tsx
│  │  ├─ api
│  │  │  ├─ contact
│  │  │  │  └─ route.ts
│  │  │  ├─ newsletter
│  │  │  │  ├─ subscribe
│  │  │  │  │  └─ route.ts
│  │  │  │  ├─ unsubscribe
│  │  │  │  │  └─ route.ts
│  │  │  │  └─ welcome
│  │  │  │     └─ route.ts
│  │  │  └─ sanity
│  │  │     └─ webhook
│  │  │        └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ blog
│  │  │  ├─ blog-client.tsx
│  │  │  ├─ category-icon.tsx
│  │  │  └─ post-card.tsx
│  │  ├─ forms
│  │  │  ├─ contact-form.tsx
│  │  │  └─ newsletter-form.tsx
│  │  ├─ home
│  │  │  ├─ scroll-animation.tsx
│  │  │  └─ scroll-indicator.tsx
│  │  ├─ layout
│  │  │  ├─ footer.tsx
│  │  │  ├─ header.tsx
│  │  │  └─ navigation.tsx
│  │  ├─ mobile
│  │  │  └─ floating-cta.tsx
│  │  ├─ projects
│  │  │  └─ project-card.tsx
│  │  ├─ services
│  │  │  └─ service-card.tsx
│  │  └─ ui
│  │     ├─ button.tsx
│  │     └─ card.tsx
│  ├─ lib
│  │  ├─ image.ts
│  │  ├─ metadata.ts
│  │  ├─ portableTextComponents.tsx
│  │  ├─ queries.ts
│  │  ├─ sanity.ts
│  │  ├─ supabase.ts
│  │  └─ utils.ts
│  └─ types
│     └─ index.ts
├─ tailwind.config.js
└─ tsconfig.json

```
