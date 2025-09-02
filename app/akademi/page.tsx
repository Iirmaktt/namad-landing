'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle, Clock, Users, Award, BookOpen, Video, FileText } from 'lucide-react';
import Image from 'next/image';

export default function AkademiPage() {
  const courses = [
    {
      title: 'FCAW Temel Eğitimi',
      duration: '16 saat',
      level: 'Başlangıç',
      description: 'Toz dolgulu tel kaynak tekniklerinin temellerini öğrenin',
      topics: [
        'FCAW teknolojisine giriş',
        'Ekipman tanıma ve kurulum',
        'Temel kaynak teknikleri',
        'Güvenlik prosedürleri',
        'Kalite kontrol temelleri'
      ],
      certificate: true
    },
    {
      title: 'Hardfacing Uygulamaları',
      duration: '24 saat',
      level: 'Orta',
      description: 'Sert yüzey kaplama tekniklerinde uzmanlaşın',
      topics: [
        'Hardfacing prensipleri',
        'Malzeme seçimi',
        'Uygulama teknikleri',
        'Hata analizi',
        'İleri seviye uygulamalar'
      ],
      certificate: true
    },
    {
      title: 'Parametre Optimizasyonu',
      duration: '8 saat',
      level: 'İleri',
      description: 'Kaynak parametrelerini optimize etmeyi öğrenin',
      topics: [
        'Parametre hesaplamaları',
        'Optimizasyon teknikleri',
        'Verimlilik artırma',
        'Maliyet azaltma',
        'Kalite iyileştirme'
      ],
      certificate: true
    }
  ];

  const instructors = [
    {
      name: 'Usta Ahmet Çelik',
      title: 'Baş Eğitmen',
      experience: '20+ yıl',
      specialization: 'FCAW ve Hardfacing',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mühendis Fatma Arslan',
      title: 'Teknik Eğitmen',
      experience: '12+ yıl',
      specialization: 'Malzeme Bilimi',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const benefits = [
    'Ücretsiz eğitim programı',
    'Sertifikalı eğitim',
    'Uygulamalı workshop',
    'Uzman eğitmenler',
    'Küçük grup eğitimleri',
    'Eğitim materyalleri dahil',
    'Sınırsız tekrar hakkı',
    'İş garantisi desteği'
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
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            NAMAD Akademi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ücretsiz FCAW temel eğitimi programı ile toz dolgulu tel kaynak 
            tekniklerinde uzmanlaşın
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
                <CardTitle>Eğitim Programları</CardTitle>
                <CardDescription>
                  Başlangıçtan ileri seviyeye kadar kapsamlı eğitim programları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courses.map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{course.level}</Badge>
                          <Badge className="bg-blue-600 text-white">{course.duration}</Badge>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">Eğitim İçeriği:</h4>
                          <ul className="space-y-1">
                            {course.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-center">
                          {course.certificate && (
                            <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                              <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                              <div className="text-sm font-medium text-yellow-800">Sertifikalı Eğitim</div>
                            </div>
                          )}
                        </div>
                      </div>
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
                <CardTitle>Eğitim Avantajları</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eğitmenlerimiz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {instructors.map((instructor, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={instructor.image}
                          alt={instructor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{instructor.name}</h4>
                        <p className="text-xs text-gray-600">{instructor.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">{instructor.experience}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eğitim Başvurusu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Hemen Başvur
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Eğitim Broşürü İndir
                </Button>
                <Button variant="outline" className="w-full">
                  <Video className="h-4 w-4 mr-2" />
                  Tanıtım Videosu
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Eğitim Programına Katılın
            </h2>
            <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
              FCAW teknolojisinde uzmanlaşmak ve kariyerinizi geliştirmek için 
              ücretsiz eğitim programımıza katılın. Sertifikalı eğitim ile 
              sektörde fark yaratın.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <GraduationCap className="h-5 w-5 mr-2" />
                Eğitime Başvur
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                <Phone className="h-5 w-5 mr-2" />
                Bilgi Al: +90 532 123 45 67
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}