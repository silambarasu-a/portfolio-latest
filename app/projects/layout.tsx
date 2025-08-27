import { Metadata } from 'next';
import getConfig from 'next/config';

export const metadata: Metadata = {
  title: 'Projects | Silambarasu - Full Stack Web Development Showcase',
  description: 'Explore my portfolio of web development projects including music streaming platforms, artist dashboards, and APIs built for Starlight Music with React, Next.js, Node.js, and MongoDB.',
  keywords: 'portfolio projects, web development projects, react projects, nextjs projects, fullstack projects, mern stack projects, music industry projects, silambarasu',
  openGraph: {
    title: 'Projects | Silambarasu - Full Stack Web Development Showcase',
    description: 'Explore my portfolio of web development projects including music streaming platforms, artist dashboards, and APIs built for Starlight Music.',
    url: `${getConfig().publicRuntimeConfig.NEXT_PUBLIC_PORTFOLIO_URL}/projects`,
    images: ['/og-image.svg'],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}