import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const figmaUrls = req.nextUrl.searchParams.getAll('url');

  if (!Array.isArray(figmaUrls)) {
    return NextResponse.json(
      { error: "Missing 'url' query parameter" },
      { status: 400 }
    );
  }

  try {
    const previews = await Promise.all(
      figmaUrls.map(async (url) => {
        const res = await fetch(
          `https://api.figma.com/v1/oembed?url=${encodeURIComponent(url)}`,
          {
            headers: {
              'X-Figma-Token': process.env.FIGMA_TOKEN!,
            },
          }
        );

        if (!res.ok) {
          return {
            url,
            error: 'Failed to fetch preview',
          };
        }

        return res.json();
      })
    );

    return NextResponse.json(previews);
  } catch (error) {
    console.log('Error in figma-preview endpoint: ', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
