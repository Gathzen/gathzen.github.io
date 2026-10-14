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
    slug: 'puggle-struggle',
    title: 'Puggle Struggle',
    thumbnail: '/images/puggle-struggle.svg',
    featured: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    slug: 'sample-project-two',
    title: 'Sample Project Two',
    thumbnail: '/images/sample-project-two.svg',
    featured: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    slug: 'sample-project-three',
    title: 'Sample Project Three',
    thumbnail: '/images/sample-project-three.svg',
    featured: true,
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
];

/** Projects shown on the homepage (first 3 featured). */
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

/** Look up a project by slug. */
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}