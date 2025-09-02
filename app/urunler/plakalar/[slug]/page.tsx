import React from 'react';
import PlateDetailClient from './PlateDetailClient';

export async function generateStaticParams() {
  return [
    { slug: 'ultrahard-65' },
    { slug: 'ultralight-65' },
    { slug: 'ultrahard-67t' },
    { slug: 'ultralight-67t' },
    { slug: 'ultrahard-70t' },
  ];
}

export default function PlateDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  return <PlateDetailClient slug={params.slug} />;
}