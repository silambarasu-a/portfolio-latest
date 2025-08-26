import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Your Portfolio - Get In Touch',
  description: 'Get in touch for web development projects, collaborations, or opportunities. Contact a full-stack developer experienced in React, Next.js, Node.js, and MongoDB.',
  keywords: 'contact, hire developer, web development services, freelance developer, react developer contact',
  openGraph: {
    title: 'Contact | Your Portfolio - Get In Touch',
    description: 'Get in touch for web development projects, collaborations, or opportunities.',
    url: 'https://yourportfolio.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}