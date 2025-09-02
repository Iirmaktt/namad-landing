'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Users, Wrench, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HizmetlerPage() {
  const services = [
    {
      slug: 'danismanlik',
      icon: Users,
      title: 'Teknik Danışmanlık',
      description: 'Hardfacing yöntemi seçimi, sarf malzemesi seçimi, parametre optimizasyonu ve hata analizi',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Malzeme seçim danışmanlığı',
        'Kaynak parametresi optimizasyonu',
        'Hata analizi ve çözüm önerileri',
        'Proses iyileştirme',
        'Maliyet optimizasyonu'
      ]
    },
    {
      slug: 'kaynak',
      icon: Wrench,
      title: 'Kaynak Hizmetleri',
      description: 'Saha uygulamaları ve özel proje çözümleri',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Saha kaynak uygulamaları',
        'Özel proje çözümleri',
        'Ekipman onarımı',
        'Hardfacing uygulamaları',
        'Acil müdahale hizmetleri'
      ]
    },
    {
      slug: 'akademi',
      icon: GraduationCap,
      title: 'NAMAD Akademi',
      description: 'Ücretsiz FCAW temel eğitimi programı',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Toz dolgulu tel kaynak eğitimi',
        'Hardfacing teknikleri',
        'Parametre ayarlama',
        'Kalite kontrol',
        'Sertifikalı eğitim'
      ]
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
            Hizmetlerimiz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ürün satışından eğitime, teknik desteğe kadar kapsamlı çözümler sunuyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-3">Hizmet Kapsamı:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full group">
                    <Link href={`/hizmetler/${service.slug}`}>
                      Detayları Gör
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
          className="mt-12 bg-white rounded-lg p-8 shadow-sm"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Özel Hizmet Talebi
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Listelenen hizmetler dışında özel bir ihtiyacınız mı var? 
              Uzman ekibimizle iletişime geçin, size özel çözüm geliştirelim.
            </p>
            <Button size="lg">
              <Users className="h-5 w-5 mr-2" />
              Uzmanlarla İletişime Geç
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}