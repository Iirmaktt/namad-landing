'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle, ArrowLeft, Phone, Mail, MessageCircle, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function KaynakPage() {
  const weldingServices = [
    {
      title: 'Saha Kaynak Uygulamaları',
      description: 'Müşteri tesislerinde gerçekleştirilen profesyonel kaynak hizmetleri',
      details: [
        'Mobil kaynak ekipmanları',
        'Uzman kaynak personeli',
        'Kalite kontrol hizmetleri',
        '7/24 acil müdahale'
      ]
    },
    {
      title: 'Özel Proje Çözümleri',
      description: 'Özel gereksinimler için tasarlanan kaynak çözümleri',
      details: [
        'Proje analizi ve planlama',
        'Özel ürün geliştirme',
        'Pilot uygulama testleri',
        'Süreç optimizasyonu'
      ]
    },
    {
      title: 'Ekipman Onarımı',
      description: 'Endüstriyel ekipmanların hardfacing ile onarımı',
      details: [
        'Aşınma analizi',
        'Onarım planlaması',
        'Boyut geri kazanımı',
        'Performans iyileştirme'
      ]
    },
    {
      title: 'Acil Müdahale',
      description: '24/7 acil durum kaynak hizmetleri',
      details: [
        'Hızlı müdahale ekibi',
        'Geçici onarım çözümleri',
        'Kritik ekipman desteği',
        'Minimum duruş süresi'
      ]
    }
  ];

  const projectGallery = [
    {
      title: 'Çimento Fabrikası Crusher Onarımı',
      description: 'NAWEL Abrasion C ile crusher jaw plakalarının yenilenmesi',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '3 gün',
      result: '%300 ömür artışı'
    },
    {
      title: 'Madencilik Konveyör Sistemi',
      description: 'Konveyör vidalarının hardfacing ile güçlendirilmesi',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '5 gün',
      result: '%250 ömür artışı'
    },
    {
      title: 'Agrega Tesisi Hammer Mill',
      description: 'Hammer mill çekiçlerinin NAWEL Impact ile onarımı',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2 gün',
      result: '%400 ömür artışı'
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
            <span className="text-gray-900 font-medium">Kaynak Hizmetleri</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/hizmetler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Hizmetlere Geri Dön
            </Link>
          </Button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kaynak Hizmetleri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Profesyonel kaynak ekibimizle saha uygulamaları ve özel proje çözümleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {weldingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Proje Galerisi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectGallery.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <Badge className="bg-green-600 text-white mb-2">{project.result}</Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-600">Süre: {project.duration}</span>
                      <Badge variant="outline">{project.result}</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      Proje Detayları
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Kaynak Hizmeti Talep Edin</CardTitle>
              <CardDescription>
                Profesyonel kaynak hizmetlerimiz için iletişime geçin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-auto py-4 justify-start">
                  <Phone className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div>Acil Kaynak Hattı</div>
                    <div className="text-sm opacity-90">+90 532 987 65 43</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 justify-start">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div>WhatsApp Destek</div>
                    <div className="text-sm opacity-70">24/7 Aktif</div>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 justify-start">
                  <Mail className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <div>E-posta</div>
                    <div className="text-sm opacity-70">kaynak@nanoweartech.com.tr</div>
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