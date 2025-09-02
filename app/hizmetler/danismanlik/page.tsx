'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Users, CheckCircle, ArrowLeft, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function DanismanlikPage() {
  const consultingServices = [
    {
      title: 'Hardfacing Yöntemi Seçimi',
      description: 'Uygulamanıza en uygun hardfacing yönteminin belirlenmesi',
      details: [
        'Aşınma türü analizi',
        'Malzeme uyumluluğu değerlendirmesi',
        'Maliyet-fayda analizi',
        'Alternatif yöntem önerileri'
      ]
    },
    {
      title: 'Sarf Malzemesi Seçimi',
      description: 'Doğru tel, elektrot ve plaka seçimi danışmanlığı',
      details: [
        'Ürün karşılaştırması',
        'Performans analizi',
        'Maliyet optimizasyonu',
        'Tedarik planlaması'
      ]
    },
    {
      title: 'Parametre Optimizasyonu',
      description: 'Kaynak parametrelerinin optimize edilmesi',
      details: [
        'Akım ve voltaj ayarları',
        'Tel besleme hızı',
        'Koruyucu gaz seçimi',
        'Ön ısıtma gereksinimleri'
      ]
    },
    {
      title: 'Hata Analizi',
      description: 'Kaynak hatalarının analizi ve çözüm önerileri',
      details: [
        'Hata kök neden analizi',
        'Metalurjik inceleme',
        'Proses iyileştirme',
        'Kalite kontrol önerileri'
      ]
    },
    {
      title: 'Proses Geliştirme',
      description: 'Mevcut proseslerin iyileştirilmesi',
      details: [
        'Verimlilik artırma',
        'Kalite iyileştirme',
        'Maliyet azaltma',
        'Süre optimizasyonu'
      ]
    },
    {
      title: 'Eğitim ve Gelişim',
      description: 'Personel eğitimi ve yetkinlik geliştirme',
      details: [
        'Teknik eğitim programları',
        'Uygulamalı workshop',
        'Sertifikasyon desteği',
        'Sürekli gelişim planları'
      ]
    }
  ];

  const consultants = [
    {
      name: 'Dr. Mehmet Yılmaz',
      title: 'Kaynak Teknolojileri Uzmanı',
      experience: '15+ yıl',
      specialization: 'Hardfacing ve FCAW',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mühendis Ayşe Kaya',
      title: 'Malzeme Mühendisi',
      experience: '12+ yıl',
      specialization: 'Aşınma Analizi',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Tekniker Ali Demir',
      title: 'Saha Uygulamaları Uzmanı',
      experience: '18+ yıl',
      specialization: 'Endüstriyel Uygulamalar',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

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
            <Link href="/hizmetler" className="hover:text-blue-600">Hizmetler</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Teknik Danışmanlık</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/hizmetler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Hizmetlere Geri Dön
            </Link>
          </Button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Teknik Danışmanlık
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Uzman ekibimizle hardfacing uygulamalarınızda en doğru kararları alın
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span>Danışmanlık Hizmetlerimiz</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {consultingServices.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border-l-4 border-blue-600 pl-4"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <ul className="space-y-1">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                            <CheckCircle className="h-3 w-3 text-green-600" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Uzman Ekibimiz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {consultants.map((consultant, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden">
                        <Image
                          src={consultant.image}
                          alt={consultant.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{consultant.name}</h4>
                        <p className="text-sm text-gray-600">{consultant.title}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <Badge variant="outline" className="text-xs">{consultant.experience}</Badge>
                          <span className="text-xs text-gray-500">{consultant.specialization}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Danışmanlık Süreci</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-medium">İhtiyaç Analizi</h4>
                      <p className="text-sm text-gray-600">Mevcut durum ve gereksinimler değerlendirilir</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-medium">Çözüm Geliştirme</h4>
                      <p className="text-sm text-gray-600">Özel çözüm önerileri hazırlanır</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-medium">Uygulama Desteği</h4>
                      <p className="text-sm text-gray-600">Uygulama sürecinde teknik destek sağlanır</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-medium">Takip ve İyileştirme</h4>
                      <p className="text-sm text-gray-600">Sonuçlar takip edilir ve sürekli iyileştirme sağlanır</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Hemen İletişime Geçin</CardTitle>
              <CardDescription>
                Teknik danışmanlık hizmetlerimiz hakkında detaylı bilgi almak için
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-auto py-4 justify-start">
                  <Phone className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div>Hemen Arayın</div>
                    <div className="text-sm opacity-90">+90 532 123 45 67</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 justify-start">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div>WhatsApp</div>
                    <div className="text-sm opacity-70">Anında cevap</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 justify-start">
                  <Mail className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div>E-posta</div>
                    <div className="text-sm opacity-70">teknik@nanoweartech.com.tr</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}