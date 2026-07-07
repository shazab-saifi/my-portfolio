'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';
import { Badge } from './ui/badge';

const designs = [
  {
    title: 'Cluster',
    url: 'https://www.figma.com/design/MIKKK2XA1I6bf35XGxKmrp/Cluster?node-id=0-1&t=uY7uGEWcshBwFP9o-1',
    status: 'In Progress',
  },
  {
    title: 'Lunar IDE',
    url: 'https://www.figma.com/design/8I5NrlYUTzFJVBX0dtghMA/Lunar-IDE?node-id=48-173&t=uY7uGEWcshBwFP9o-1',
  },
  {
    title: 'Nova.ai',
    url: 'https://www.figma.com/design/hvNwf7J6iIB7gVu8rAvZN2/Nova.ai?node-id=62-139&t=w6xgixIMOHmFoMB1-1',
  },
  {
    title: 'Quartz UI',
    url: 'https://www.figma.com/design/TsWZVVg7UH1CDOJ38hjRKw/Quartz-UI?node-id=93-166&t=onths57GdPutMkqF-1',
  },
  {
    title: 'Petma',
    url: 'https://www.figma.com/design/5NXdGUsZUXCxDE4ICIyUpv/Petma?node-id=36-12&t=6FmxaAsmDM2cqsj8-1',
  },
  {
    title: 'WireSketch',
    url: 'https://www.figma.com/design/ktXDLtIUlDb76tnnZaTATB/WireSketch?node-id=0-1&t=HLYG92pwBFXeTfXf-1',
  },
];

type FigmaPreviewData = {
  title?: string;
  url?: string;
  thumbnail_url?: string;
  error?: string;
};

const DesignsSection = () => {
  const [fileData, setFileData] = useState<FigmaPreviewData[]>([]);

  useEffect(() => {
    const params = new URLSearchParams();
    designs.forEach((design) => params.append('url', design.url));

    async function fetchFigmaFileMetadata() {
      try {
        const response = await fetch(`/api/figma-preview?${params}`);
        const preview = await response.json();
        setFileData(Array.isArray(preview) ? preview : []);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFigmaFileMetadata();
  }, []);

  return (
    <div className="w-full min-w-0">
      <motion.div
        className="w-full min-w-0 overflow-hidden"
        initial={{ y: 10, opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h1 className="mb-8 text-lg font-semibold text-neutral-800 dark:text-white">
          My Designs
        </h1>

        <div className="designs-scrollbar flex w-full max-w-full min-w-0 snap-x snap-mandatory items-start gap-5 overflow-x-auto overscroll-x-contain sm:gap-8">
          {designs.map((design, idx) => {
            const preview = fileData[idx];

            return (
              <PreviewCard
                key={design.url}
                title={preview?.title ?? design.title}
                href={preview?.url ?? design.url}
                thumbnailUrl={preview?.thumbnail_url}
                status={design.status}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default DesignsSection;

interface PreviewCardProps {
  title: string;
  thumbnailUrl?: string;
  href: string;
  status?: string;
}

function PreviewCard({ title, thumbnailUrl, href, status }: PreviewCardProps) {
  return (
    <div className="flex max-w-76 shrink-0 basis-full snap-start flex-col gap-4 sm:basis-76">
      <div className="flex min-w-0 items-center justify-between">
        <div className="flex min-w-0 items-center gap-1">
          <Image
            src="https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="figma-logo"
            width={20}
            height={20}
            className="size-4"
          />
          <p className="text-foreground truncate font-semibold">{title}</p>
          {status && <Badge variant="secondary">{status}</Badge>}
        </div>
      </div>
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          width={300}
          height={200}
          className="aspect-video w-full rounded-lg border border-neutral-200 object-contain dark:border-neutral-800"
          alt={'thumbnail-' + title}
        />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
          <Image
            src="https://cdn.brandfetch.io/idZHcZ_i7F/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B"
            alt="figma-logo"
            width={24}
            height={24}
            className="size-6 opacity-70"
          />
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="external noopener noreferrer"
        className="group flex w-fit items-center gap-1 overflow-hidden"
      >
        <IconArrowUpRight
          className="-translate-x-full translate-y-full transition-transform duration-100 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
          size={24}
        />

        <span className="-translate-x-[24px] font-semibold transition-transform duration-150 ease-out group-hover:translate-x-0 group-hover:underline">
          Open In figma
        </span>
      </a>
    </div>
  );
}
