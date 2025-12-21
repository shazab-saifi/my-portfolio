import Landing from '@/components/Landing';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://shazab-saifi.vercel.app'),
  title: 'Shazab Saifi',
  description:
    "I'm a design engineer who crafts user interfaces and writes code. I blend design and development to create seamless, engaging digital experiences.",
  openGraph: {
    images:
      'https://res.cloudinary.com/dlpjh3fcx/image/upload/v1766322584/Screenshot_from_2025-12-21_18-38-21_lvs90a.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shazab Saifi',
    description:
      "I'm a design engineer who crafts user interfaces and writes code. I blend design and development to create seamless, engaging digital experiences.",
    images: '/ogimage.png',
  },
};

export default function Home() {
  return <Landing />;
}
