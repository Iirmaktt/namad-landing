'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsDetailClientProps {
  slug: string;
}

export default function NewsDetailClient({ slug }: NewsDetailClientProps) {
  
  const newsData: Record<string, any> = {
    'yeni-tungsten-carbide-serisi': {
      title: 'Yeni NAWEL Tungsten Carbide Serisi Tanıtıldı',
      excerpt: 'Ekstra yüksek aşınma direnci için geliştirilen yeni tungsten carbide formülasyonları piyasaya sunuldu.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '15 Aralık 2024',
      author: 'Teknik Ekip',
      category: 'Ürün Lansmanı',
      readTime: '3 dk',
      content: `
        <p>NanoWearTech Türkiye, aşınmaya dayanıklı kaynak çözümleri portföyünü genişleterek yeni NAWEL Tungsten Carbide serisini tanıttı. Bu yeni seri, ekstremal aşınma koşullarında maksimum performans sağlamak üzere geliştirildi.</p>

        <h3>Yeni Serinin Özellikleri</h3>
        <p>NAWEL Tungsten Carbide serisi, nano-ölçekli tungsten karbür parçacıklarının homojen dağılımı ile üstün aşınma direnci sağlıyor. Seri, üç farklı sertlik seviyesinde sunuluyor:</p>
        
        <ul>
          <li><strong>NAWEL WC 65:</strong> 62-67 HRC sertlik, orta-ağır aşınma koşulları</li>
          <li><strong>NAWEL WC 70:</strong> 67-72 HRC sertlik, ağır aşınma koşulları</li>
          <li><strong>NAWEL WC 75:</strong> 72-77 HRC sertlik, ekstremal aşınma koşulları</li>
        </ul>

        <h3>Uygulama Alanları</h3>
        <p>Yeni tungsten carbide serisi özellikle aşağıdaki sektörlerde devrim yaratacak:</p>
        
        <ul>
          <li>Madencilik ekipmanları</li>
          <li>Agrega işleme tesisleri</li>
          <li>Çimento endüstrisi</li>
          <li>Kırma eleme sistemleri</li>
        </ul>

        <h3>Teknik Avantajlar</h3>
        <p>Geleneksel hardfacing çözümlerine kıyasla %40 daha uzun servis ömrü sağlayan yeni seri, aynı zamanda %25 daha düşük seyreltme oranı ile maliyet avantajı da sunuyor.</p>

        <p>Ürün hakkında detaylı bilgi almak için teknik ekibimizle iletişime geçebilirsiniz.</p>
      `
    },
    'cimento-sektoru-cozumleri': {
      title: 'Çimento Sektörü İçin Özel Çözümler',
      excerpt: 'Yüksek sıcaklık ve aşınma koşulları için optimize edilmiş hardfacing uygulamaları.',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '8 Aralık 2024',
      author: 'Dr. Mehmet Yılmaz',
      category: 'Sektör Haberi',
      readTime: '5 dk',
      content: `
        <p>Çimento endüstrisinin zorlu koşulları için özel olarak geliştirilen hardfacing çözümlerimiz, sektörde yeni standartlar belirliyor.</p>

        <h3>Çimento Sektörünün Zorlukları</h3>
        <p>Çimento üretim sürecinde ekipmanlar aşağıdaki zorlu koşullarla karşılaşır:</p>
        
        <ul>
          <li>Yüksek sıcaklık (800-1000°C)</li>
          <li>Aşındırıcı malzemeler</li>
          <li>Sürekli çalışma koşulları</li>
          <li>Kimyasal aşınma</li>
        </ul>

        <h3>Özel Çözümlerimiz</h3>
        <p>Bu zorlu koşullar için geliştirdiğimiz özel ürünler:</p>
        
        <ul>
          <li><strong>NAWEL Heat Resistant:</strong> Yüksek sıcaklık dayanımı</li>
          <li><strong>NAWEL Abrasion Plus:</strong> Gelişmiş aşınma direnci</li>
          <li><strong>NAWEL Composite:</strong> Çok amaçlı koruma</li>
        </ul>

        <h3>Başarı Hikayeleri</h3>
        <p>Türkiye'nin önde gelen çimento fabrikalarında gerçekleştirilen uygulamalarımızda %300'e varan ömür artışı sağladık.</p>
      `
    }
  };

  const article = newsData[slug];

  if (!article) {
    return <div>Haber bulunamadı</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Anasayfa</Link>
            <span>/</span>
            <Link href="/haberler" className="hover:text-blue-600">Haberler</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{article.title}</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/haberler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Haberlere Geri Dön
            </Link>
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <div className="relative h-64 lg:h-96 overflow-hidden rounded-t-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-blue-600 text-white mb-2">{article.category}</Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {article.title}
                  </h1>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime} okuma</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between"
          >
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Paylaş
            </Button>
            
            <div className="flex space-x-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                PDF İndir
              </Button>
              <Button>
                İletişime Geç
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}