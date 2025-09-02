import React from 'react';
import SectorDetailClient from './SectorDetailClient';

export async function generateStaticParams() {
  return [
    { slug: 'cimento' },
    { slug: 'madencilik' },
    { slug: 'agrega' },
    { slug: 'enerji' },
    { slug: 'celik' },
    { slug: 'genel-endustri' },
  ];
}

export default function SectorDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  return <SectorDetailClient slug={params.slug} />;
}