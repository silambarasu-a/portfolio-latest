import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Silambarasu - Get In Touch',
  description: 'Get in touch for web development projects, collaborations, or opportunities. Contact a full-stack developer at Starlight Music experienced in React, Next.js, Node.js, and MongoDB.',
  keywords: 'contact, hire developer, web development services, silambarasu, react developer contact, starlight music developer',
  openGraph: {
    title: 'Contact | Silambarasu - Get In Touch',
    description: 'Get in touch for web development projects, collaborations, or opportunities.',
    url: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}