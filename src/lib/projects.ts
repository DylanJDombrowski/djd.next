// src/lib/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    _id: "sideline-app",
    title: "Sideline",
    slug: "sideline-app",
    description:
      "A SaaS platform that modernizes how youth sports organizations handle registration, payments, and team management. Sideline saves coaches time and organizations money with streamlined workflows.",
    tagline: "Youth sports management, simplified.",
    body: `## The Problem

Youth sports organizations are drowning in administrative chaos. Registration happens through Google Forms, payments trickle in via Venmo and checks, rosters live in spreadsheets, and coaches spend their evenings doing data entry instead of preparing for games.

Existing solutions like TeamSnap exist, but they're expensive—charging organizations 3.25% + $1.50 per transaction on top of monthly fees. For a league processing $50,000 in registrations, that adds up fast.

## The Solution

Sideline is a modern platform built specifically for youth sports organizations that want to:

- **Streamline registration** - Parents complete sign-ups in 5 minutes on any device, with digital signatures and document uploads in one place
- **Accept payments instantly** - Credit card processing at 2.9% + $0.30 per transaction (saving ~$1.20 per $100 compared to TeamSnap)
- **Simplify coach workflows** - One-click approval system gives coaches immediate access to player data without spreadsheet wrangling
- **Keep rosters current** - Automatic website integration means no more manual roster updates

## Technical Approach

Built with a modern stack optimized for reliability and speed:

- **Next.js** for server-rendered pages and API routes
- **Supabase** for PostgreSQL database, authentication, and real-time subscriptions
- **Stripe** for payment processing with automated invoicing
- **Tailwind CSS** for a responsive, accessible UI

The architecture prioritizes simplicity—organizations can be set up in under 5 minutes with no technical knowledge required.

## Current Status

Sideline is in active development, with early users providing feedback on the registration and payment flows. The focus is on building a rock-solid foundation before expanding to scheduling, communication, and league management features.`,
    mainImage: "/images/projects/sideline-hero.png",
    projectUrl: "https://trysideline.com",
    client: "Personal SaaS",
    projectDate: "2025-01-01T00:00:00.000Z",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    featured: true,
    order: 1,
    status: "building",
    features: [
      "Online registration with digital signatures",
      "Payment processing at competitive rates",
      "One-click coach approval workflows",
      "Automatic roster updates",
    ],
  },
  {
    _id: "miami-valley-xpress-project",
    title: "Miami Valley Xpress",
    slug: "miami-valley-xpress-project",
    description:
      "A full-fledged roster management system for a youth softball organization. What started as a simple informational website evolved into a tool that simplifies team management so they can spend more time on the field.",
    body: `## The Client

Miami Valley Xpress is a premier fastpitch softball organization based in Ohio, fielding competitive travel teams for young athletes. With multiple age groups and rosters changing each season, they needed a digital presence that could keep up with their growth.

## The Challenge

The organization came to me with a simple request: build a website where families could learn about the program and find contact information. But as we talked, bigger problems emerged:

- Roster management was happening in spreadsheets shared via email
- Parents had no central place to see team information
- Coaches spent hours on administrative tasks that could be automated
- There was no way for prospective players to express interest online

## The Solution

What started as an informational website evolved into a full roster management system:

- **Public-facing site** with team information, schedules, and program details
- **Admin dashboard** for coaches to manage rosters, update player information, and track tryout interest
- **Automated emails** via Resend for registration confirmations and team communications
- **Real-time updates** so roster changes reflect immediately on the public site

## Technical Implementation

Built with Angular for a responsive single-page application feel, backed by Supabase for:

- **PostgreSQL database** storing player, team, and roster data
- **Row-level security** ensuring coaches only access their own teams
- **Real-time subscriptions** for live roster updates
- **Authentication** for the admin portal

The architecture separates the public marketing site from the protected admin area, allowing for independent scaling and security policies.

## Results

The organization now manages all roster operations through a single platform. Coaches report saving several hours per week on administrative tasks, and the professional web presence has helped attract new players to the program.`,
    mainImage: "/images/projects/mvx-hero.png",
    projectUrl: "https://www.miamivalleyxpress.com/",
    client: "Miami Valley Xpress",
    projectDate: "2024-02-08T00:00:00.000Z",
    technologies: ["Angular", "Supabase", "Resend", "TypeScript"],
    featured: true,
    order: 2,
    status: "live",
  },
  {
    _id: "trailhead-psychology",
    title: "Trailhead Psychology",
    slug: "trailhead-psychology",
    description:
      "A warm, inviting website for a psychology practice specializing in neurodivergent-affirming care. The design embraces nature-inspired elements and earthy tones, creating a calming digital presence.",
    body: `## The Client

Trailhead Psychology is a Delaware, Ohio-based practice led by Dr. Leanna Pittsenbarger, specializing in psychological assessments and therapy for neurodivergent individuals. The practice takes a strengths-based, affirming approach—viewing neurodivergence as natural human diversity rather than a disorder to be fixed.

## The Challenge

Dr. Pittsenbarger needed a website that would:

- Communicate her neurodivergent-affirming philosophy clearly
- Feel warm and approachable to reduce anxiety around seeking mental health care
- Provide clear information about services (assessments for ADHD, autism, learning disabilities; individual therapy)
- Enable potential clients to easily schedule consultations
- Work beautifully on mobile devices, where most users would first encounter the practice

## Design Approach

The visual language draws heavily from the "trailhead" metaphor—the starting point of a journey:

- **Nature-inspired palette** - Forest greens, warm grays, and sage accents create a calming, organic feel
- **Mountain imagery** - Reinforces the journey metaphor and connects to the practice name
- **Generous whitespace** - Reduces visual anxiety and improves readability
- **Serif headings with sans-serif body** - Balances warmth with professionalism

Every design decision was made with the target audience in mind: individuals who may already feel anxious about seeking psychological services.

## Technical Implementation

Built with Next.js and Tailwind CSS for:

- **Fast page loads** - Server-side rendering ensures content appears instantly
- **Mobile-first responsive design** - Looks great on any device
- **Accessible markup** - Proper heading hierarchy, color contrast, and screen reader support
- **SEO optimization** - Structured data and meta tags to help local clients find the practice

## Key Features

- Clear service descriptions with pricing transparency
- Provider bio establishing credentials and approach
- Prominent call-to-action for scheduling consultations
- Telehealth information for remote sessions
- FAQ section addressing common concerns

## Results

The website successfully conveys the practice's warm, affirming approach while maintaining the professionalism expected of a healthcare provider. The design has received positive feedback from clients who noted it helped reduce their anxiety about reaching out.`,
    mainImage: "/images/projects/trailhead-hero.png",
    projectUrl: "https://trailhead-psych.com",
    client: "Trailhead Psychology",
    projectDate: "2024-12-01T00:00:00.000Z",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    order: 3,
    status: "live",
  },
  {
    _id: "iron-pillar-app",
    title: "IronPillar",
    slug: "iron-pillar-app",
    description:
      "A React Native mobile application designed to gamify fitness. The app encourages users to stay consistent with their workouts by adding game-like mechanics and progress tracking.",
    body: "",
    mainImage: null,
    projectUrl: "https://github.com/DylanJDombrowski/IronPillar",
    client: "Personal Project",
    projectDate: "2023-11-15T00:00:00.000Z",
    technologies: ["React Native", "Firebase", "Expo"],
    featured: false,
  },
];

// Helper function to get featured projects sorted by order
export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}
