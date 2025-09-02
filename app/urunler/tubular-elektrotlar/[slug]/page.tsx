import React from 'react';
import TubularDetailClient from './TubularDetailClient';

export async function generateStaticParams() {
  return [
    { slug: 'tubular-b' },
    { slug: 'tubular-c' },
    { slug: 'tubular-bnm' },
    { slug: 'tubular-nbs' },
    { slug: 'tubular-tic' },
  ];
}

export default function TubularDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  return <TubularDetailClient slug={params.slug} />;
}