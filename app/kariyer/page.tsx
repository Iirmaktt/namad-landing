'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Users, MapPin, Clock, DollarSign, GraduationCap, Heart, Target, Award } from 'lucide-react';
import Image from 'next/image';

export default function KariyerPage() {
  const openPositions = [
    {
      title: 'Kaynak Teknolojileri Uzmanı',
      department: 'Teknik',
      location: 'İstanbul',
      type: 'Tam Zamanlı',
      experience: '5+ yıl',
      description: 'FCAW ve hardfacing teknolojilerinde deneyimli uzman aranıyor',
      requirements: [
        'Kaynak mühendisliği veya ilgili alanda lisans',
        'FCAW teknolojilerinde en az 5 yıl deneyim',
        'Hardfacing uygulamaları bilgisi',
        'İngilizce bilgisi',
        'Saha çalışmasına uygunluk'
      ]
    },
    {
      title: 'Satış Temsilcisi',
      department: 'Satış',
      location: 'Ankara',
      type: 'Tam Zamanlı',
      experience: '3+ yıl',
      description: 'Endüstriyel satış deneyimi olan dinamik satış temsilcisi',
      requirements: [
        'Endüstri mühendisliği veya işletme lisansı',
        'B2B satış deneyimi',
        'Müşteri ilişkileri yönetimi',
        'Seyahat edebilme',
        'İletişim becerileri'
      ]
    },
    {
      title: 'Ar-Ge Mühendisi',
      department: 'Ar-Ge',
      location: 'İstanbul',
      type: 'Tam Zamanlı',
      experience: '2+ yıl',
      description: 'Yeni ürün geliştirme projelerinde yer alacak Ar-Ge mühendisi',
      requirements: [
        'Malzeme mühendisliği lisansı',
        'Metalurji bilgisi',
        'Laboratuvar deneyimi',
        'Analitik düşünce',
        'Takım çalışması'
      ]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Rekabetçi Maaş',
      description: 'Sektör standartlarının üzerinde maaş ve performans primi'
    },
    {
      icon: GraduationCap,
      title: 'Eğitim ve Gelişim',
      description: 'Sürekli eğitim programları ve kariyer gelişim desteği'
    },
    {
      icon: Heart,
      title: 'Sağlık Sigortası',
      description: 'Kapsamlı sağlık sigortası ve ek sosyal haklar'
    },
    {
      icon: Clock,
      title: 'Esnek Çalışma',
      description: 'Hibrit çalışma modeli ve esnek mesai saatleri'
    },
    {
      icon: Target,
      title: 'Hedef Odaklı',
      description: 'Net hedefler ve başarı odaklı çalışma ortamı'
    },
    {
      icon: Award,
      title: 'Başarı Ödülleri',
      description: 'Performans bazlı ödül ve tanınma programları'
    }
  ];

  const companyValues = [
    'İnovasyon ve sürekli gelişim',
    'Müşteri odaklı yaklaşım',
    'Kalite ve mükemmellik',
    'Takım çalışması ve işbirliği',
    'Dürüstlük ve güvenilirlik',
    'Çevresel sorumluluk'
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
            Kariyer Fırsatları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            NanoWearTech Türkiye ailesine katılın, teknoloji ve inovasyonun 
            merkezinde kariyerinizi şekillendirin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Açık Pozisyonlar</CardTitle>
                <CardDescription>
                  Ekibimize katılmak için açık pozisyonlarımızı inceleyin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {openPositions.map((position, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{position.department}</Badge>
                          <Badge className="bg-green-600 text-white">{position.type}</Badge>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="h-4 w-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{position.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-gray-900 mb-2">Aranan Özellikler:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full md:w-auto">
                        Başvuru Yap
                      </Button>
                
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
                <CardTitle>Çalışan Avantajları</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <benefit.icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{benefit.title}</h4>
                        <p className="text-xs text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Şirket Değerlerimiz</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {companyValues.map((value, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>İletişim</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-gray-900">İnsan Kaynakları</div>
                  <div className="text-gray-600">hr@nanoweartech.com.tr</div>
                  <div className="text-gray-600">+90 216 123 45 67</div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  CV Gönder
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-lg p-8 shadow-sm"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Spontan Başvuru
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Uygun pozisyon bulamadınız mı? CV'nizi gönderin, 
              uygun fırsat çıktığında sizinle iletişime geçelim.
            </p>
            <Button size="lg">
              <Users className="h-5 w-5 mr-2" />
              Spontan Başvuru Yap
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}