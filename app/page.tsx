'use client';

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ProductShowcase } from '@/components/home/ProductShowcase';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { CertificatesShowcase } from '@/components/home/CertificatesShowcase';
import { DownloadCenter } from '@/components/home/DownloadCenter';
import { NewsPreview } from '@/components/home/NewsPreview';

export default function HomePage() {
  return (
    <div className="pb-16 lg:pb-0">
      <HeroSection />
      <ProductShowcase />
      <ServicesPreview />
      <CertificatesShowcase />
      <DownloadCenter />
      <NewsPreview />
    </div>
  );
}