'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Route } from 'next';

export function NewsPreview() {
  const t = useTranslations();

  const news = [
    {
      title: 'Neden Eğitim İçin Mali Harcama Yapmalıyız?',
      excerpt: 'Kaynak teknolojilerinde eğitim yatırımının uzun vadeli getirisi ve işletmelere sağladığı avantajlar.',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '20 Aralık 2024',
      category: 'Eğitim',
      href: '/haberler/egitim-yatirim-gerekliligi' as Route
    },
    {
      title: 'İş ve Kariyer Gelişimi İçin Yeni Projeler',
      excerpt: 'Kaynak sektöründe kariyer gelişimi ve iş fırsatları için yenilikçi projeler ve eğitim programları.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '18 Aralık 2024',
      category: 'Kariyer',
      href: '/haberler/kariyer-gelistim-projeleri' as Route
    },
    {
      title: 'NAMAD Teknoloji Haberleri',
      excerpt: 'Nano-teknoloji destekli kaynak çözümlerinde son gelişmeler ve yenilikçi ürün lansmanları.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '15 Aralık 2024',
      category: 'Teknoloji',
      href: '/haberler/namad-teknoloji-haberleri' as Route
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Son Haberler
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ürün yenilikleri, sektör gelişmeleri ve teknik makaleler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={article.href}>
                      Devamını Oku
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
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
          <Button asChild size="lg" variant="outline" className="group">
            <Link href={"/haberler" as Route}>
              Tüm Haberleri Görüntüle
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}