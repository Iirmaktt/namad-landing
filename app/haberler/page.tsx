'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowRight, Eye, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HaberlerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const news = [
    {
      slug: 'egitim-yatirim-gerekliligi',
      title: 'Neden Eğitim İçin Mali Harcama Yapmalıyız?',
      excerpt: 'Kaynak teknolojilerinde eğitim yatırımının uzun vadeli getirisi ve işletmelere sağladığı avantajlar.',
      content: 'Kaynak teknolojilerinde eğitim yatırımı, işletmelerin uzun vadeli başarısı için kritik öneme sahiptir...',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '20 Aralık 2024',
      author: 'Eğitim Koordinatörü',
      category: 'Eğitim',
      readTime: '5 dk'
    },
    {
      slug: 'kariyer-gelistim-projeleri',
      title: 'İş ve Kariyer Gelişimi İçin Yeni Projeler',
      excerpt: 'Kaynak sektöründe kariyer gelişimi ve iş fırsatları için yenilikçi projeler ve eğitim programları.',
      content: 'NanoWearTech Türkiye olarak, çalışanlarımızın ve sektör profesyonellerinin kariyer gelişimi için yeni projeler başlatıyoruz...',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '18 Aralık 2024',
      author: 'İnsan Kaynakları',
      category: 'Kariyer',
      readTime: '4 dk'
    },
    {
      slug: 'namad-teknoloji-haberleri',
      title: 'NAMAD Teknoloji Haberleri',
      excerpt: 'Nano-teknoloji destekli kaynak çözümlerinde son gelişmeler ve yenilikçi ürün lansmanları.',
      content: 'NAMAD teknolojilerinde yaşanan son gelişmeler, kaynak sektöründe yeni standartlar belirliyor...',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 Aralık 2024',
      author: 'Ar-Ge Ekibi',
      category: 'Teknoloji',
      readTime: '6 dk'
    },
    {
      slug: 'yeni-tungsten-carbide-serisi',
      title: 'Yeni NAWEL Tungsten Carbide Serisi Tanıtıldı',
      excerpt: 'Ekstra yüksek aşınma direnci için geliştirilen yeni tungsten carbide formülasyonları piyasaya sunuldu.',
      content: 'NanoWearTech Türkiye, aşınmaya dayanıklı kaynak çözümleri portföyünü genişleterek yeni NAWEL Tungsten Carbide serisini tanıttı...',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 Aralık 2024',
      author: 'Teknik Ekip',
      category: 'Ürün Lansmanı',
      readTime: '3 dk'
    },
    {
      slug: 'cimento-sektoru-cozumleri',
      title: 'Çimento Sektörü İçin Özel Çözümler',
      excerpt: 'Yüksek sıcaklık ve aşınma koşulları için optimize edilmiş hardfacing uygulamaları.',
      content: 'Çimento endüstrisinin zorlu koşulları için özel olarak geliştirilen hardfacing çözümlerimiz...',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '8 Aralık 2024',
      author: 'Dr. Mehmet Yılmaz',
      category: 'Sektör Haberi',
      readTime: '5 dk'
    },
    {
      slug: 'fcaw-akademi-egitim-programi',
      title: 'FCAW Akademi Ücretsiz Eğitim Programı',
      excerpt: 'Toz dolgulu tel kaynak tekniklerini öğrenen uzmanlar için sertifikalı eğitim programı başladı.',
      content: 'NAMAD Akademi bünyesinde başlayan ücretsiz FCAW eğitim programı...',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '1 Aralık 2024',
      author: 'Eğitim Koordinatörü',
      category: 'Eğitim',
      readTime: '4 dk'
    },
    {
      slug: 'madencilik-sektoru-basari-hikayesi',
      title: 'Madencilik Sektöründe Başarı Hikayesi',
      excerpt: 'Büyük madencilik şirketinde %400 ömür artışı sağlayan hardfacing uygulaması.',
      content: 'Türkiye\'nin önde gelen madencilik şirketlerinden birinde gerçekleştirilen hardfacing uygulaması...',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '25 Kasım 2024',
      author: 'Proje Ekibi',
      category: 'Başarı Hikayesi',
      readTime: '6 dk'
    },
    {
      slug: 'yeni-iso-sertifikasi',
      title: 'ISO 9001:2015 Kalite Sertifikası Yenilendi',
      excerpt: 'Kalite yönetim sistemimiz uluslararası standartlarda onaylandı.',
      content: 'NanoWearTech Türkiye, ISO 9001:2015 kalite yönetim sistemi sertifikasını başarıyla yeniledi...',
      image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '20 Kasım 2024',
      author: 'Kalite Ekibi',
      category: 'Şirket Haberi',
      readTime: '2 dk'
    },
    {
      slug: 'agrega-sektoru-inovasyonu',
      title: 'Agrega Sektöründe İnovatif Çözüm',
      excerpt: 'Kırma eleme tesislerinde devrim yaratan yeni hardfacing teknolojisi.',
      content: 'Agrega sektöründe faaliyet gösteren müşterilerimiz için geliştirilen yeni hardfacing teknolojisi...',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 Kasım 2024',
      author: 'Ar-Ge Ekibi',
      category: 'İnovasyon',
      readTime: '4 dk'
    }
  ];

  const categories = ['Tümü', 'Ürün Lansmanı', 'Sektör Haberi', 'Eğitim', 'Başarı Hikayesi', 'Şirket Haberi', 'İnovasyon'];

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || article.category === selectedCategory;
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
            Haberler ve Duyurular
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ürün yenilikleri, sektör gelişmeleri ve teknik makaleler
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Haber başlığı veya içerik ile ara..."
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
          {filteredNews.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {article.readTime}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
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
                    <Link href={`/haberler/${article.slug}`}>
                      Devamını Oku
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <p>Aradığınız kriterlere uygun haber bulunamadı.</p>
            </div>
            <Button variant="outline" onClick={() => {setSearchTerm(''); setSelectedCategory('Tümü');}}>
              Filtreleri Temizle
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}