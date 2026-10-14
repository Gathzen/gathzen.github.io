/**
 * Single source of truth for all projects on the site.
 *
 * To add a new project:
 * 1. Create a page at `src/pages/projects/<slug>.astro` (see existing pages for
 *    the minimal pattern — they use the shared `ProjectLayout` component).
 * 2. Add an entry to the `projects` array below with a matching `slug`.
 * 3. Drop a thumbnail image into `public/images/` and reference it here.
 */

export interface Project {
  /** URL slug — must match the page file name in src/pages/projects/ */
  slug: string;
  title: string;
  /** Path relative to `public/`, e.g. `/images/my-project.svg` */
  thumbnail: string;
  /** Featured projects appear on the homepage (first 3 win). */
  featured: boolean;
  /** YouTube embed URL (https://www.youtube.com/embed/VIDEO_ID) shown at the top of the detail page. */
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'understudy',
    title: 'Understudy',
    thumbnail: '/images/understudy/thumb.webp',
    featured: true,
  },
  {
    slug: 'puggle-struggle',
    title: 'Puggle Struggle',
    thumbnail: '/images/puggle-struggle/thumb.webp',
    featured: true,
    videoUrl: 'https://www.youtube.com/embed/9Yqa1UXGymw',
  },
  {
    slug: 'mythled',
    title: 'Mythled',
    thumbnail: '/images/mythled/thumb.webp',
    featured: true,
  },
  {
    slug: 'let-the-world-end',
    title: "Let The World End While I'm Here",
    thumbnail: '/images/let-the-world-end/thumb.webp',
    featured: false,
  },
  {
    slug: 'farming-survivor',
    title: 'Farming Survivor',
    thumbnail: '/images/farming-survivor/thumb.webp',
    featured: false,
  },
  {
    slug: 'soulsdeck',
    title: 'SoulsDeck',
    thumbnail: '/images/soulsdeck/thumb.webp',
    featured: false,
  },
  {
    slug: 'the-legend-of-ada',
    title: 'The Legend of Ada',
    thumbnail: '/images/the-legend-of-ada/thumb.webp',
    featured: false,
  },
  {
    slug: 'paper-prototypes',
    title: 'Prototypes and GGDs',
    thumbnail: '/images/paper-prototypes/thumb.webp',
    featured: false,
  },
];

/** Projects shown on the homepage (first 3 featured). */
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

/** Look up a project by slug. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
