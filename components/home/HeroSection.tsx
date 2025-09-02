'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText, MessageCircle, Play, Shield, Zap, Wrench, BookOpen } from 'lucide-react';
import { WeldingArc } from '@/components/animations/WeldingArc';
import Link from 'next/link';

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
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
          >
            <Button asChild size="lg" className="text-lg px-8 py-6 w-full sm:w-auto">
              <Link href="/iletisim">
                <FileText className="h-5 w-5 mr-2" />
                {t('hero.expertConsult')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto">
              <Link href="/iletisim">
                <MessageCircle className="h-5 w-5 mr-2" />
                {t('hero.getQuote')}
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Aşınmaya Dayanıklı Plakalar</h3>
                <p className="text-gray-600 text-sm mb-4">Ultrahard ve Ultralight serisi hardfacing plakaları</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/urunler/plakalar">İncele</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Toz Dolgulu Kaynak Telleri</h3>
                <p className="text-gray-600 text-sm mb-4">NAWEL serisi FCAW teller</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/urunler/flux-cored-teller">İncele</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Wrench className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Toz Dolgulu El Elektrotları</h3>
                <p className="text-gray-600 text-sm mb-4">Elle kaynak için özel formülasyonlar</p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/urunler/tubular-elektrotlar">İncele</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <Button asChild variant="outline" size="lg">
              <Link href="/rehberler">
                <BookOpen className="h-5 w-5 mr-2" />
                Manual/Rehberler
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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

        {/* Customer Logos Band */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white py-8"
        >
          <div className="container mx-auto px-4">
            <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
              Bazı Müşterilerimiz
            </h3>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}