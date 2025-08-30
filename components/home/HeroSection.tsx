'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FileText, MessageCircle, Play } from 'lucide-react';
import { WeldingArc } from '@/components/animations/WeldingArc';

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <WeldingArc />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-blue-600 font-semibold mb-6"
          >
            {t('hero.subtitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
              <FileText className="h-5 w-5 mr-2" />
              {t('hero.getQuote')}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
              <MessageCircle className="h-5 w-5 mr-2" />
              {t('hero.expertConsult')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-600"
          >
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span>Türkiye Menşei</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <span>ISO Sertifikalı</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
              <span>7/24 Destek</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}