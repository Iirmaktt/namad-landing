'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Download, FileText, Search, Filter, HelpCircle, Settings, BookOpen, Wrench, AlertTriangle, Zap } from 'lucide-react';

export default function IndirPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const downloads = [
    {
      icon: HelpCircle,
      title: 'SSS - Sıkça Sorulan Sorular',
      description: 'Toz dolgulu tel ve hardfacing uygulamaları hakkında en çok sorulan sorular ve cevapları',
      fileSize: '1.8 MB',
      pages: '16 sayfa',
      category: 'Genel Bilgi',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '15 Aralık 2024'
    },
    {
      icon: Settings,
      title: 'Kaynak Parametreleri Ayar Kılavuzu',
      description: 'Optimum kaynak parametrelerinin belirlenmesi ve ayarlanması için detaylı rehber',
      fileSize: '2.1 MB',
      pages: '20 sayfa',
      category: 'Parametreler',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '10 Aralık 2024'
    },
    {
      icon: BookOpen,
      title: 'Ürün Seçim Kılavuzu',
      description: 'Uygulama tipine göre doğru ürün seçimi için kapsamlı rehber',
      fileSize: '2.8 MB',
      pages: '28 sayfa',
      category: 'Seçim',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '5 Aralık 2024'
    },
    {
      icon: Wrench,
      title: 'Aşınma Plakalarının Birleştirme & Şekillendirme',
      description: 'Hardfacing plakalarının doğru montaj ve şekillendirme teknikleri',
      fileSize: '3.2 MB',
      pages: '32 sayfa',
      category: 'Uygulama',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '1 Aralık 2024'
    },
    {
      icon: AlertTriangle,
      title: 'Kaynak Hatalarının Giderilmesi',
      description: 'Yaygın kaynak problemleri ve çözüm yöntemleri rehberi',
      fileSize: '2.4 MB',
      pages: '24 sayfa',
      category: 'Arıza Giderme',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '28 Kasım 2024'
    },
    {
      icon: Zap,
      title: 'Sert Yüzey Kaplama (Hardfacing) Giriş',
      description: 'Hardfacing teknolojisine giriş ve temel bilgiler',
      fileSize: '4.1 MB',
      pages: '40 sayfa',
      category: 'Eğitim',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '25 Kasım 2024'
    },
    {
      icon: FileText,
      title: 'Aşınmaya Dayanıklı Plakalar Katalog',
      description: 'Tüm plaka ürünlerinin detaylı teknik katalogu',
      fileSize: '5.6 MB',
      pages: '48 sayfa',
      category: 'Katalog',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '20 Kasım 2024'
    },
    {
      icon: Wrench,
      title: 'Sert Dolgu Alaşımlarının Uygulama Talimatı',
      description: 'Hardfacing alaşımlarının doğru uygulama prosedürleri',
      fileSize: '3.7 MB',
      pages: '36 sayfa',
      category: 'Prosedür',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '15 Kasım 2024'
    },
    {
      icon: FileText,
      title: 'FCAW Teller Genel Katalog',
      description: 'Tüm toz dolgulu tel ürünlerinin kapsamlı katalogu',
      fileSize: '6.2 MB',
      pages: '52 sayfa',
      category: 'Katalog',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '10 Kasım 2024'
    },
    {
      icon: Settings,
      title: 'Kalite Kontrol Prosedürleri',
      description: 'Hardfacing uygulamalarında kalite kontrol yöntemleri',
      fileSize: '2.9 MB',
      pages: '26 sayfa',
      category: 'Kalite',
      downloadUrl: '#',
      language: 'Türkçe',
      lastUpdated: '5 Kasım 2024'
    }
  ];

  const categories = ['Tümü', 'Genel Bilgi', 'Parametreler', 'Seçim', 'Uygulama', 'Arıza Giderme', 'Eğitim', 'Katalog', 'Prosedür', 'Kalite'];

  const filteredDownloads = downloads.filter(download => {
    const matchesSearch = download.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         download.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || download.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            İndirme Merkezi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknik kılavuzlar, parametre tabloları ve uygulama rehberlerine 
            tek noktadan erişim sağlayın
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Döküman adı veya içerik ile ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
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
          {filteredDownloads.map((download, index) => (
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
                      <download.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline">{download.category}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {download.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {download.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Boyut:</span> {download.fileSize}
                    </div>
                    <div>
                      <span className="font-medium">Sayfa:</span> {download.pages}
                    </div>
                    <div>
                      <span className="font-medium">Dil:</span> {download.language}
                    </div>
                    <div>
                      <span className="font-medium">Güncelleme:</span> {download.lastUpdated}
                    </div>
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

        {filteredDownloads.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <p>Aradığınız kriterlere uygun döküman bulunamadı.</p>
            </div>
            <Button variant="outline" onClick={() => {setSearchTerm(''); setSelectedCategory('Tümü');}}>
              Filtreleri Temizle
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6"
        >
          <div className="text-center">
            <h3 className="font-semibold text-blue-800 mb-2">Özel Döküman Talebi</h3>
            <p className="text-blue-700 mb-4">
              Özel uygulamanız için detaylı rehber veya teknik döküman mı gerekiyor?
            </p>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
              <FileText className="h-4 w-4 mr-2" />
              Özel Döküman Talep Et
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}