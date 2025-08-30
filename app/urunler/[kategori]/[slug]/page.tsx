import React from 'react';
import ProductDetailClient from './ProductDetailClient';

export async function generateStaticParams() {
  const categories = ['asinma-direnci', 'korozyon-direnci', 'yuksek-sicaklik', 'darbe-direnci'];
  const products = [
    'abrasion-c', 'abrasion-b', 'impact-600', 'corrosion-a', 'heat-resistant-x', 'shock-resistant-y'
  ];
  
  const params = [];
  for (const kategori of categories) {
    for (const slug of products) {
      params.push({ kategori, slug });
    }
  }
  
  return params;
}

export default function ProductDetailPage({ 
  params 
}: { 
  params: { kategori: string; slug: string } 
}) {
  return <ProductDetailClient kategori={params.kategori} slug={params.slug} />;
}