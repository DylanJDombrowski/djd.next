
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
│  │  ├─ fire-fluentflat.svg
│  │  └─ services-approach.jpg
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
│  │  │     ├─ webhook
│  │  │     │  └─ route.ts
│  │  │     └─ webhook-debug
│  │  │        └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
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
│  │  ├─ fire-fluentflat.svg
│  │  └─ services-approach.jpg
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
│  │  │     ├─ webhook
│  │  │     │  └─ route.ts
│  │  │     └─ webhook-debug
│  │  │        └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  ├─ not-found.tsx
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ ads
│  │  │  └─ adsense-ad.tsx
│  │  ├─ analytics
│  │  │  ├─ google-analytics.tsx
│  │  │  └─ page-view-tracker.tsx
│  │  ├─ blog
│  │  │  ├─ blog-client.tsx
│  │  │  ├─ category-icon.tsx
│  │  │  ├─ post-card.tsx
│  │  │  └─ share-buttons.tsx
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