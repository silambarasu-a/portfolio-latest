import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Silambarasu - Full Stack Web Development Showcase',
  description: 'Explore my portfolio of web development projects including music streaming platforms, artist dashboards, and APIs built for Starlight Music with React, Next.js, Node.js, and MongoDB.',
  keywords: 'portfolio projects, web development projects, react projects, nextjs projects, fullstack projects, mern stack projects, music industry projects, silambarasu',
  openGraph: {
    title: 'Projects | Silambarasu - Full Stack Web Development Showcase',
    description: 'Explore my portfolio of web development projects including music streaming platforms, artist dashboards, and APIs built for Starlight Music.',
    url: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/projects`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}