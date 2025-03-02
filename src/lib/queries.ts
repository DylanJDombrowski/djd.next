// src/lib/queries.ts
export const serviceQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    body,
    features,
    "mainImage": mainImage.asset->url,
    ctaText,
    "relatedProjects": relatedProjects[]-> {
      _id,
      title,
      "slug": slug.current,
      description,
      "mainImage": mainImage.asset->url
    }
  }
`;

export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    "icon": icon.asset->url,
    featured
  }
`;

export const projectQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    client,
    description,
    body,
    "mainImage": mainImage.asset->url,
    "projectImages": projectImages[]{
      "url": asset->url,
      caption,
      alt
    },
    projectDate,
    technologies,
    projectUrl,
    githubUrl
  }
`;

export const projectsQuery = `
  *[_type == "project"] | order(projectDate desc) {
    _id,
    title,
    "slug": slug.current,
    client,
    description,
    "mainImage": mainImage.asset->url,
    projectDate,
    technologies,
    featured
  }
`;

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedAt,
    featured,
    "categories": categories[]->title
  }
`;

export const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    body,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "categories": categories[]->title,
    "series": series-> {
      _id,
      title,
      "slug": slug.current
    }
  }
`;

export const seriesQuery = `
  *[_type == "series"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "mainImage": mainImage.asset->url,
    status,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`;

export const singleSeriesQuery = `
  *[_type == "series" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "mainImage": mainImage.asset->url,
    status,
    "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "mainImage": mainImage.asset->url
    }
  }
`;

export const featuredContentQuery = `{
  "featuredServices": *[_type == "service" && featured == true] | order(order asc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    "icon": icon.asset->url
  },
  "featuredProjects": *[_type == "project" && featured == true] | order(projectDate desc)[0...2] {
    _id,
    title,
    "slug": slug.current,
    description,
    "mainImage": mainImage.asset->url,
    client,
    technologies
  },
  "recentPosts": *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "mainImage": mainImage.asset->url,
    publishedAt,
    "categories": categories[]->title
  }
}`;
