import React from 'react';
import CategoryPageClient from './CategoryPageClient';

export async function generateStaticParams() {
  return [
    { kategori: 'asinma-direnci' },
    { kategori: 'korozyon-direnci' },
    { kategori: 'yuksek-sicaklik' },
    { kategori: 'darbe-direnci' },
  ];
}

export default function CategoryPage({ params }: { params: { kategori: string } }) {
  return <CategoryPageClient kategori={params.kategori} />;
}