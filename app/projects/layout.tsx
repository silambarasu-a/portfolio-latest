import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Your Portfolio - Full Stack Web Development Showcase',
  description: 'Explore my portfolio of web development projects including e-commerce platforms, web applications, and APIs built with React, Next.js, Node.js, and MongoDB.',
  keywords: 'portfolio projects, web development projects, react projects, nextjs projects, fullstack projects, mern stack projects',
  openGraph: {
    title: 'Projects | Your Portfolio - Full Stack Web Development Showcase',
    description: 'Explore my portfolio of web development projects including e-commerce platforms, web applications, and APIs.',
    url: 'https://yourportfolio.com/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}