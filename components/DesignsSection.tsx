'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from './button';

// Only for mapping desc to the Figma API data in UI
const designs = [
  {
    title: 'Cluster',
    desc: 'Cluster is a community builder platform like Discord but with elegant UI and delightful UX',
    url: 'https://www.figma.com/design/MIKKK2XA1I6bf35XGxKmrp/Cluster?node-id=0-1&t=uY7uGEWcshBwFP9o-1',
  },
  {
    title: 'Lunar IDE',
    desc: 'Lunar IDE is a next-generation code editor with a beautiful, intuitive interface for developers.',
    url: 'https://www.figma.com/design/8I5NrlYUTzFJVBX0dtghMA/Lunar-IDE?node-id=48-173&t=uY7uGEWcshBwFP9o-1',
  },
  {
    title: 'Nova.ai',
    desc: 'Nova.ai is an AI-powered knowledge and productivity tool featuring an elegant and modern design.',
    url: 'https://www.figma.com/design/hvNwf7J6iIB7gVu8rAvZN2/Nova.ai?node-id=62-139&t=w6xgixIMOHmFoMB1-1',
  },
  {
    title: 'Quartz UI',
    desc: 'Quartz UI is a comprehensive UI library with a focus on usability, clarity, and style.',
    url: 'https://www.figma.com/design/TsWZVVg7UH1CDOJ38hjRKw/Quartz-UI?node-id=93-166&t=onths57GdPutMkqF-1',
  },
  {
    title: 'Petma',
    desc: 'Petma is a vibrant social platform designed for pet lovers to share, connect, and celebrate their furry friends.',
    url: 'https://www.figma.com/design/5NXdGUsZUXCxDE4ICIyUpv/Petma?node-id=36-12&t=6FmxaAsmDM2cqsj8-1',
  },
  {
    title: 'WireSketch',
    desc: 'WireSketch is an intuitive online whiteboard app inspired by Excalidraw, made for collaborative sketching and brainstorming.',
    url: 'https://www.figma.com/design/ktXDLtIUlDb76tnnZaTATB/WireSketch?node-id=0-1&t=HLYG92pwBFXeTfXf-1',
  },
];

// Type matches only used API response fields
type FigmaPreviewData = {
  title: string;
  url: string;
  thumbnail_url: string;
};

const DesignsSection = () => {
  const [fileData, setFileData] = useState<FigmaPreviewData[]>([]);

  useEffect(() => {
    const params = new URLSearchParams();
    designs.forEach((design) => params.append('url', design.url));

    async function fetchFigmaFileMetadata() {
      try {
        const response = await fetch(`/api/figma-preview?${params}`);
        const preview: FigmaPreviewData[] = await response.json();
        setFileData(preview);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFigmaFileMetadata();
  }, []);

  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h1 className="mb-8 text-lg font-semibold text-neutral-800 dark:text-white">
          My Designs
        </h1>

        <div className="flex max-w-full items-center gap-8 overflow-x-auto">
          {fileData.map((data, idx) => (
            <PreviewCard
              key={idx}
              title={data.title}
              href={data.url}
              thumbnailUrl={data.thumbnail_url}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DesignsSection;

interface PreviewCardProps {
  title: string;
  thumbnailUrl: string;
  href: string;
}

function PreviewCard({ title, thumbnailUrl, href }: PreviewCardProps) {
  return (
    <div className="flex min-w-76 flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-foreground font-semibold">{title}</p>
        <Button>
          <a
            href={href}
            target="_blank"
            rel="external noopener noreferrer"
            className="flex items-center gap-1"
          >
            <Image
              src="https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
              alt="figma-logo"
              width={20}
              height={20}
              className="size-4"
            />
            <span>Open</span>
          </a>
        </Button>
      </div>
      <Image
        src={thumbnailUrl}
        width={300}
        height={200}
        className="aspect-video rounded-lg border border-neutral-200 object-contain dark:border-neutral-800"
        alt={`thumbnail-${title}`}
      />
    </div>
  );
}
