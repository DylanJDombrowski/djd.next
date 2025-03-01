// src/lib/queries.ts
export const serviceQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    body,
    features,
    mainImage,
    ctaText,
    "relatedProjects": relatedProjects[]-> {
      _id,
      title,
      slug,
      description,
      mainImage
    }
  }
`;

export const servicesQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    featured
  }
`;

export const projectQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    description,
    body,
    mainImage,
    projectImages,
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
    slug,
    client,
    description,
    mainImage,
    projectDate,
    technologies,
    featured
  }
`;

export const postsQuery = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    "categories": categories[]->title
  }
`;

export const postQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    body,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    "series": series-> {
      _id,
      title,
      slug
    }
  }
`;
