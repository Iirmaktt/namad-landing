import React from 'react';
import NewsDetailClient from './NewsDetailClient';

export async function generateStaticParams() {
  return [
    { slug: 'egitim-yatirim-gerekliligi' },
    { slug: 'kariyer-gelistim-projeleri' },
    { slug: 'namad-teknoloji-haberleri' },
    { slug: 'yeni-tungsten-carbide-serisi' },
    { slug: 'cimento-sektoru-cozumleri' },
    { slug: 'fcaw-akademi-egitim-programi' },
    { slug: 'madencilik-sektoru-basari-hikayesi' },
    { slug: 'yeni-iso-sertifikasi' },
    { slug: 'agrega-sektoru-inovasyonu' },
  ];
}

export default function NewsDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  return <NewsDetailClient slug={params.slug} />;
}