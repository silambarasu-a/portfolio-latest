import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Your Portfolio - Full Stack Developer',
  description: 'Learn about my journey as a full-stack developer with 4+ years of experience in React, Next.js, Node.js, and MongoDB. Discover my skills, experience, and passion for web development.',
  keywords: 'about, full stack developer, react developer, nodejs developer, web developer experience, MERN stack developer',
  openGraph: {
    title: 'About | Your Portfolio - Full Stack Developer',
    description: 'Learn about my journey as a full-stack developer with 4+ years of experience in React, Next.js, Node.js, and MongoDB.',
    url: 'https://yourportfolio.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}