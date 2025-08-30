'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Zap, Shield, Wrench, RotateCcw, Hammer, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  const t = useTranslations();

  const categories = [
    {
      slug: 'asinma',
      icon: Shield,
      title: 'NAWEL Abrasion',
      description: 'Yüksek aşınma direnci için özel formülasyonlu toz dolgulu teller',
      productCount: '12 ürün',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: ['Konveyör Vidaları', 'Vals Değirmenleri', 'Aşınma Plakaları'],
      standards: ['DIN 8555 MF 10-GF-60-G', 'EN 14700']
    },
    {
      slug: 'takim-celigi',
      icon: Wrench,
      title: 'NAWEL Tool',
      description: 'Takım çeliği yüzeyleri için sıcak iş çeliği formülasyonları',
      productCount: '8 ürün',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: ['Sıcak İş Takımları', 'Kalıplar', 'Presler'],
      standards: ['DIN 8555 MF 6-GF-65-G']
    },
    {
      slug: 'korozyon',
      icon: Zap,
      title: 'NAWEL Corrosion',
      description: 'Korozyon direnci ve orta düzey aşınma koruması',
      productCount: '6 ürün',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: ['Deniz Ekipmanları', 'Kimyasal Tanklar', 'Pompalar'],
      standards: ['DIN 8555 MF 5-GF-40-C']
    },
    {
      slug: 'dokum-onarim',
      icon: RotateCcw,
      title: 'NAWEL Cast',
      description: 'Döküm metal onarım ve güçlendirme uygulamaları',
      productCount: '5 ürün',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: ['Döküm Onarımı', 'Çatlak Tamiri', 'Boyut Geri Kazanım'],
      standards: ['DIN 8555 MF 2-GF-20-G']
    },
    {
      slug: 'yeniden-insa',
      icon: Hammer,
      title: 'NAWEL Buildup',
      description: 'Boyut geri kazanım ve yeniden inşa uygulamaları',
      productCount: '7 ürün',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: ['Mil Onarımı', 'Boyut Kazanım', 'Makine Parçaları'],
      standards: ['DIN 8555 MF 1-GF-10-G']
    },
    {
      slug: 'tungsten-karbur',
      icon: Sparkles,
      title: 'NAWEL Tungsten Carbide',
      description: 'Maksimum aşınma direnci için tungsten karbür matrisli teller',
      productCount: '4 ürün',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: ['Ekstremal Aşınma', 'Madencilik', 'Agrega'],
      standards: ['DIN 8555 MF 10-GF-70-GTZ']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ürün Kategorileri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her endüstriyel uygulama için özel olarak formüle edilmiş, 
            yüksek performanslı toz dolgulu tel serimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/urunler/${category.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <category.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {category.productCount}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Uygulamalar:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.applications.map((app, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Standartlar:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.standards.map((std, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {std}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}