import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Silambarasu - Full Stack Developer at Starlight Music',
  description: 'Learn about my journey as a full-stack developer with 3+ years of experience at Starlight Music building scalable platforms with React, Next.js, Node.js, and MongoDB. Discover my skills, experience, and passion for web development.',
  keywords: 'about silambarasu, full stack developer, react developer, nodejs developer, starlight music developer, MERN stack developer, music industry developer',
  openGraph: {
    title: 'About | Silambarasu - Full Stack Developer at Starlight Music',
    description: 'Learn about my journey as a full-stack developer with 3+ years of experience at Starlight Music building scalable platforms.',
    url: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}