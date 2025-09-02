'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Factory, CheckCircle, ArrowLeft, Phone, Mail, Download, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface SectorDetailClientProps {
  slug: string;
}

export default function SectorDetailClient({ slug }: SectorDetailClientProps) {
  
  const sectorData: Record<string, any> = {
    'cimento': {
      title: 'Çimento Endüstrisi',
      description: 'Çimento üretim sürecinin zorlu koşulları için geliştirilmiş özel hardfacing çözümleri',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Yüksek sıcaklık (800-1000°C)',
        'Aşındırıcı klinker malzemesi',
        'Sürekli çalışma koşulları',
        'Kimyasal aşınma',
        'Termal şok',
        'Alkali saldırısı'
      ],
      solutions: [
        {
          problem: 'Crusher Jaw Aşınması',
          solution: 'NAWEL Abrasion C ile %300 ömür artışı',
          product: 'NAWEL Abrasion C'
        },
        {
          problem: 'Hammer Mill Çekiç Aşınması',
          solution: 'NAWEL Impact 600 ile darbe dayanımı',
          product: 'NAWEL Impact 600'
        },
        {
          problem: 'Konveyör Vida Aşınması',
          solution: 'NAWEL Plate Ultrahard ile koruma',
          product: 'NAWEL Plate Ultrahard'
        }
      ],
      caseStudies: [
        {
          title: 'Büyük Çimento Fabrikası Crusher Onarımı',
          description: 'NAWEL Abrasion C ile crusher jaw plakalarının yenilenmesi',
          result: '%300 ömür artışı, %40 maliyet tasarrufu',
          duration: '3 gün uygulama süresi'
        }
      ],
      recommendedProducts: [
        'NAWEL Abrasion C',
        'NAWEL Heat Resistant',
        'NAWEL Plate Ultrahard 65',
        'NAWEL Impact 600'
      ]
    },
    'madencilik': {
      title: 'Madencilik Sektörü',
      description: 'Madencilik ekipmanlarının ekstremal aşınma koşullarına karşı korunması',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800',
      challenges: [
        'Ekstremal aşınma koşulları',
        'Yüksek darbe yükleri',
        'Toz ve nem ortamı',
        'Sürekli operasyon',
        'Sert malzemeler',
        'Değişken yükler'
      ],
      solutions: [
        {
          problem: 'Excavator Bucket Aşınması',
          solution: 'NAWEL Tungsten Carbide ile maksimum koruma',
          product: 'NAWEL Tungsten Carbide'
        },
        {
          problem: 'Crusher Liner Aşınması',
          solution: 'NAWEL Plate Ultrahard 70T ile uzun ömür',
          product: 'NAWEL Plate Ultrahard 70T'
        }
      ],
      caseStudies: [
        {
          title: 'Büyük Maden İşletmesi Conveyor Sistemi',
          description: 'Konveyör vidalarının hardfacing ile güçlendirilmesi',
          result: '%400 ömür artışı, yıllık $50K tasarruf',
          duration: '5 gün uygulama süresi'
        }
      ],
      recommendedProducts: [
        'NAWEL Tungsten Carbide WC 70',
        'NAWEL Plate Ultrahard 70T',
        'NAWEL Impact 600',
        'NAWEL Abrasion C'
      ]
    }
  };

  const sector = sectorData[slug];

  if (!sector) {
    return <div>Sektör bulunamadı</div>;
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
            <Link href="/sektorler" className="hover:text-blue-600">Sektörler</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{sector.title}</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/sektorler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Sektörlere Geri Dön
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">{sector.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {sector.description}
                </p>
                
                <div className="space-y-2">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Sektör Kataloğu İndir
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Uzmanla Görüş
                  </Button>
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
                <CardTitle>Sektörel Zorluklar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {sector.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Çözüm Örnekleri</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sector.solutions.map((solution: any, index: number) => (
                    <div key={index} className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-gray-900 text-sm">{solution.problem}</h4>
                      <p className="text-gray-600 text-sm mb-1">{solution.solution}</p>
                      <Badge variant="outline" className="text-xs">{solution.product}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Önerilen Ürünler</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {sector.recommendedProducts.map((product: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {product}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {sector.caseStudies && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Başarı Hikayeleri</h2>
            <div className="grid grid-cols-1 gap-6">
              {sector.caseStudies.map((study: any, index: number) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{study.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium">{study.result}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <span className="text-sm font-medium">{study.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Sektörünüz İçin Özel Çözüm
            </h2>
            <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
              {sector.title} sektöründeki aşınma problemleriniz için 
              uzman ekibimizle iletişime geçin. Size özel çözüm geliştirelim.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-5 w-5 mr-2" />
                Hemen Arayın
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                <Mail className="h-5 w-5 mr-2" />
                E-posta Gönderin
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}