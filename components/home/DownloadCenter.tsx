'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FileText, Download, HelpCircle, Settings, BookOpen, Wrench } from 'lucide-react';
import Link from 'next/link';

export function DownloadCenter() {
  const t = useTranslations();

  const downloads = [
    {
      icon: HelpCircle,
      title: 'SSS',
      description: 'Sıkça sorulan sorular ve cevapları',
      count: '25+'
    },
    {
      icon: Settings,
      title: 'Parametre Ayar Kılavuzu',
      description: 'Optimum kaynak parametreleri rehberi',
      count: '50+'
    },
    {
      icon: BookOpen,
      title: 'Ürün Seçim Rehberi',
      description: 'Uygulama bazında doğru ürün seçimi',
      count: '12+'
    },
    {
      icon: Wrench,
      title: 'Plaka Bağlama Kılavuzu',
      description: 'Hardfacing plaka şekillendirme ve bağlama yöntemleri',
      count: '8+'
    },
    {
      icon: FileText,
      title: 'Kataloglar',
      description: 'Detaylı ürün katalogları ve teknik dökümanlar',
      count: '15+'
    },
    {
      icon: Download,
      title: 'Uygulama Talimatları',
      description: 'Adım adım uygulama rehberleri',
      count: '20+'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            İndirme Merkezi
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teknik kılavuzlar, parametre tabloları ve uygulama rehberlerine tek noktadan erişim
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((download, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-300 group cursor-pointer">
                <CardHeader className="text-center">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-3"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <download.icon className="h-6 w-6 text-blue-600" />
                  </motion.div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {download.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {download.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 text-center">
                  <div className="text-lg font-semibold text-blue-600 mb-3">
                    {download.count} dosya
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="group">
            <Link href="/indir">
              İndirme Merkezine Git
              <Download className="h-4 w-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}