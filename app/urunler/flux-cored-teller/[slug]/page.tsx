import React from 'react';
import FluxCoredDetailClient from './FluxCoredDetailClient';

export async function generateStaticParams() {
  return [
    { slug: 'nawel-abrasion' },
    { slug: 'nawel-impact' },
    { slug: 'nawel-rail' },
    { slug: 'nawel-tool' },
    { slug: 'nawel-corrosion' },
    { slug: 'nawel-cast' },
    { slug: 'nawel-buildup' },
    { slug: 'nawel-tungsten-carbide' },
  ];
}

export default function FluxCoredDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  return <FluxCoredDetailClient slug={params.slug} />;
}