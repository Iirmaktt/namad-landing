'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Download, FileText, HelpCircle, Settings, BookOpen, Wrench, AlertTriangle, Zap } from 'lucide-react';

export default function RehberlerPage() {
  const guides = [
    {
      icon: AlertTriangle,
      title: 'Kaynak Hatalarının Giderilmesi',
      description: 'Yaygın kaynak problemleri ve çözüm yöntemleri rehberi',
      fileSize: '2.4 MB',
      pages: '24 sayfa',
      category: 'Arıza Giderme',
      downloadUrl: '#'
    },
    {
      icon: HelpCircle,
      title: 'SSS - Sıkça Sorulan Sorular',
      description: 'Toz dolgulu tel ve hardfacing uygulamaları hakkında en çok sorulan sorular',
      fileSize: '1.8 MB',
      pages: '16 sayfa',
      category: 'Genel Bilgi',
      downloadUrl: '#'
    },
    {
      icon: Wrench,
      title: 'Aşınma Plakalarının Birleştirme & Şekillendirme',
      description: 'Hardfacing plakalarının doğru montaj ve şekillendirme teknikleri',
      fileSize: '3.2 MB',
      pages: '32 sayfa',
      category: 'Uygulama',
      downloadUrl: '#'
    },
    {
      icon: Settings,
      title: 'Kaynak Parametreleri Ayar Kılavuzu',
      description: 'Optimum kaynak parametrelerinin belirlenmesi ve ayarlanması',
      fileSize: '2.1 MB',
      pages: '20 sayfa',
      category: 'Parametreler',
      downloadUrl: '#'
    },
    {
      icon: BookOpen,
      title: 'Ürün Seçim Kılavuzu',
      description: 'Uygulama tipine göre doğru ürün seçimi rehberi',
      fileSize: '2.8 MB',
      pages: '28 sayfa',
      category: 'Seçim',
      downloadUrl: '#'
    },
    {
      icon: Zap,
      title: 'Sert Yüzey Kaplama (Hardfacing) Giriş',
      description: 'Hardfacing teknolojisine giriş ve temel bilgiler',
      fileSize: '4.1 MB',
      pages: '40 sayfa',
      category: 'Eğitim',
      downloadUrl: '#'
    },
    {
      icon: FileText,
      title: 'Aşınmaya Dayanıklı Plakalar Katalog',
      description: 'Tüm plaka ürünlerinin detaylı teknik katalogu',
      fileSize: '5.6 MB',
      pages: '48 sayfa',
      category: 'Katalog',
      downloadUrl: '#'
    },
    {
      icon: Wrench,
      title: 'Sert Dolgu Alaşımlarının Uygulama Talimatı',
      description: 'Hardfacing alaşımlarının doğru uygulama prosedürleri',
      fileSize: '3.7 MB',
      pages: '36 sayfa',
      category: 'Prosedür',
      downloadUrl: '#'
    }
  ];

  const categories = ['Tümü', 'Arıza Giderme', 'Genel Bilgi', 'Uygulama', 'Parametreler', 'Seçim', 'Eğitim', 'Katalog', 'Prosedür'];
  const [selectedCategory, setSelectedCategory] = React.useState('Tümü');

  const filteredGuides = selectedCategory === 'Tümü' 
    ? guides 
    : guides.filter(guide => guide.category === selectedCategory);

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
            Rehberler ve Kılavuzlar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknik kılavuzlar, parametre tabloları ve uygulama rehberlerine 
            tek noktadan erişim sağlayın
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                      <guide.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline">{guide.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {guide.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Dosya Boyutu: {guide.fileSize}</span>
                    <span>{guide.pages}</span>
                  </div>
                  
                  <Button className="w-full group">
                    <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    PDF'yi İndir
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6"
        >
          <div className="text-center">
            <h3 className="font-semibold text-blue-800 mb-2">Özel Rehber Talebi</h3>
            <p className="text-blue-700 mb-4">
              Özel uygulamanız için detaylı rehber veya teknik döküman mı gerekiyor?
            </p>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
              <FileText className="h-4 w-4 mr-2" />
              Özel Rehber Talep Et
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}