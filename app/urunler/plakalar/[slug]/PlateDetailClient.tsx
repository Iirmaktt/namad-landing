'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion } from 'framer-motion';
import { Download, FileText, Scale, Share2, AlertTriangle, ArrowLeft, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PlateDetailClientProps {
  slug: string;
}

export default function PlateDetailClient({ slug }: PlateDetailClientProps) {
  
  const plateData: Record<string, any> = {
    'ultrahard-65': {
      title: 'NAWEL Plate Ultrahard 65',
      standard: 'DIN 8555: MF 10-GF-65-G',
      summary: 'Ekstremal aşınma koşulları için geliştirilmiş, maksimum sertlik sağlayan hardfacing plakası. Yüksek karbonlu matris yapısı ile üstün aşınma direnci sunar.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      hardness: '62-67 HRC',
      thickness: ['6mm', '8mm', '10mm', '12mm'],
      applications: [
        'Crusher Jaw Plakaları',
        'Hammer Mill Aşınma Yüzeyleri',
        'Conveyor Screw Kanatları',
        'Mixer Blade Koruması',
        'Chute Liner Uygulamaları'
      ],
      features: [
        'Yüksek karbonlu matris yapı',
        'Maksimum aşınma direnci',
        'Düşük seyreltme oranı',
        'Kolay işlenebilirlik',
        'Mükemmel kaynak edilebilirlik'
      ],
      composition: {
        'C': '4.5-5.2',
        'Cr': '25-28',
        'Mn': '0.5-1.0',
        'Si': '0.8-1.2',
        'B': '2.8-3.5',
        'Fe': 'Kalan'
      },
      weldingParams: [
        { thickness: '6mm', current: '180-220A', voltage: '28-32V', speed: '25-35 cm/min' },
        { thickness: '8mm', current: '220-280A', voltage: '30-34V', speed: '20-30 cm/min' },
        { thickness: '10mm', current: '280-350A', voltage: '32-36V', speed: '18-25 cm/min' },
        { thickness: '12mm', current: '350-420A', voltage: '34-38V', speed: '15-22 cm/min' }
      ]
    },
    'ultralight-65': {
      title: 'NAWEL Plate Ultralight 65',
      standard: 'DIN 8555: MF 8-GF-65-G',
      summary: 'Hafif ve orta yük uygulamaları için optimize edilmiş hardfacing plakası. Aşınma direnci ve işlenebilirlik dengesini mükemmel şekilde sağlar.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      hardness: '60-65 HRC',
      thickness: ['4mm', '6mm', '8mm'],
      applications: [
        'Chute Liner Uygulamaları',
        'Hopper Aşınma Koruması',
        'Conveyor Belt Desteği',
        'Material Handling',
        'Wear Strip Uygulamaları'
      ],
      features: [
        'Orta karbonlu matris yapı',
        'İyi aşınma direnci',
        'Kolay işlenebilirlik',
        'Düşük maliyet',
        'Geniş uygulama alanı'
      ],
      composition: {
        'C': '3.2-3.8',
        'Cr': '22-25',
        'Mn': '0.8-1.2',
        'Si': '0.6-1.0',
        'B': '2.2-2.8',
        'Fe': 'Kalan'
      },
      weldingParams: [
        { thickness: '4mm', current: '140-180A', voltage: '26-30V', speed: '30-40 cm/min' },
        { thickness: '6mm', current: '180-220A', voltage: '28-32V', speed: '25-35 cm/min' },
        { thickness: '8mm', current: '220-280A', voltage: '30-34V', speed: '20-30 cm/min' }
      ]
    },
    'ultrahard-67t': {
      title: 'NAWEL Plate Ultrahard 67T',
      standard: 'DIN 8555: MF 10-GF-67-GTZ',
      summary: 'Tungsten karbür takviyeli premium hardfacing plakası. En zorlu aşınma koşulları için geliştirilmiş, maksimum performans sağlar.',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800',
      hardness: '65-70 HRC',
      thickness: ['8mm', '10mm', '12mm', '15mm'],
      applications: [
        'Mining Equipment',
        'Aggregate Processing',
        'Cement Industry',
        'Quarry Crushers',
        'Heavy Duty Conveyors'
      ],
      features: [
        'Tungsten karbür takviyeli',
        'Maksimum aşınma direnci',
        'Yüksek sıcaklık dayanımı',
        'Ekstremal koşullara uygun',
        'Uzun servis ömrü'
      ],
      composition: {
        'C': '5.8-6.5',
        'Cr': '28-32',
        'W': '8-12',
        'Mn': '0.3-0.8',
        'Si': '0.8-1.2',
        'B': '3.2-3.8',
        'Fe': 'Kalan'
      },
      weldingParams: [
        { thickness: '8mm', current: '240-300A', voltage: '30-34V', speed: '18-25 cm/min' },
        { thickness: '10mm', current: '300-380A', voltage: '32-36V', speed: '15-22 cm/min' },
        { thickness: '12mm', current: '380-450A', voltage: '34-38V', speed: '12-18 cm/min' },
        { thickness: '15mm', current: '450-520A', voltage: '36-40V', speed: '10-15 cm/min' }
      ]
    },
    'ultralight-67t': {
      title: 'NAWEL Plate Ultralight 67T',
      standard: 'DIN 8555: MF 6-GF-67-GTZ',
      summary: 'Orta yük uygulamaları için tungsten karbür takviyeli hardfacing plakası. Aşınma direnci ve ekonomiklik dengesini optimal şekilde sağlar.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      hardness: '62-67 HRC',
      thickness: ['6mm', '8mm', '10mm'],
      applications: [
        'Material Handling Systems',
        'Conveyor Components',
        'Wear Strip Applications',
        'Moderate Wear Protection',
        'Industrial Machinery'
      ],
      features: [
        'Tungsten karbür takviyeli',
        'Orta düzey aşınma direnci',
        'İyi işlenebilirlik',
        'Ekonomik çözüm',
        'Çok amaçlı kullanım'
      ],
      composition: {
        'C': '4.2-4.8',
        'Cr': '24-27',
        'W': '5-8',
        'Mn': '0.5-1.0',
        'Si': '0.8-1.2',
        'B': '2.5-3.2',
        'Fe': 'Kalan'
      },
      weldingParams: [
        { thickness: '6mm', current: '180-240A', voltage: '28-32V', speed: '25-35 cm/min' },
        { thickness: '8mm', current: '240-300A', voltage: '30-34V', speed: '20-28 cm/min' },
        { thickness: '10mm', current: '300-380A', voltage: '32-36V', speed: '18-25 cm/min' }
      ]
    },
    'ultrahard-70t': {
      title: 'NAWEL Plate Ultrahard 70T',
      standard: 'DIN 8555: MF 12-GF-70-GTZ',
      summary: 'En yüksek aşınma direnci için premium tungsten karbür formülasyonu. Ekstremal koşullarda maksimum performans ve uzun servis ömrü sağlar.',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800',
      hardness: '68-72 HRC',
      thickness: ['10mm', '12mm', '15mm', '20mm'],
      applications: [
        'Extreme Wear Applications',
        'Mining Crushers',
        'Quarry Equipment',
        'Heavy Mining Machinery',
        'Abrasive Material Handling'
      ],
      features: [
        'Premium tungsten karbür',
        'En yüksek aşınma direnci',
        'Ekstremal koşul dayanımı',
        'Maksimum servis ömrü',
        'Üstün performans'
      ],
      composition: {
        'C': '6.5-7.2',
        'Cr': '30-35',
        'W': '12-16',
        'Mn': '0.2-0.6',
        'Si': '0.8-1.2',
        'B': '3.8-4.5',
        'Fe': 'Kalan'
      },
      weldingParams: [
        { thickness: '10mm', current: '320-400A', voltage: '32-36V', speed: '15-22 cm/min' },
        { thickness: '12mm', current: '400-480A', voltage: '34-38V', speed: '12-18 cm/min' },
        { thickness: '15mm', current: '480-560A', voltage: '36-40V', speed: '10-15 cm/min' },
        { thickness: '20mm', current: '560-640A', voltage: '38-42V', speed: '8-12 cm/min' }
      ]
    }
  };

  const product = plateData[slug];

  if (!product) {
    return <div>Ürün bulunamadı</div>;
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
            <Link href="/urunler" className="hover:text-blue-600">Ürünler</Link>
            <span>/</span>
            <Link href="/urunler/plakalar" className="hover:text-blue-600">Aşınma Plakaları</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/urunler/plakalar">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Plakalara Geri Dön
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
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <Badge className="bg-blue-600 text-white">{product.standard}</Badge>
                </div>
                <CardTitle className="text-3xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {product.summary}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{product.hardness}</div>
                    <div className="text-sm text-gray-600">Sertlik</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{product.thickness.length}</div>
                    <div className="text-sm text-gray-600">Kalınlık Seçeneği</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Teknik Döküman İndir
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Teklif Al
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
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="features">Özellikler</TabsTrigger>
                <TabsTrigger value="applications">Uygulamalar</TabsTrigger>
                <TabsTrigger value="composition">Bileşim</TabsTrigger>
                <TabsTrigger value="welding">Kaynak</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="h-5 w-5 text-blue-600" />
                      <span>Öne Çıkan Özellikler</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="applications" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Tipik Uygulamalar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3">
                      {product.applications.map((app: string, index: number) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-gray-700">{app}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="composition" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Kimyasal Bileşim (%)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Element</TableHead>
                          <TableHead>Oran (%)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(product.composition).map(([element, percentage]) => (
                          <TableRow key={element}>
                            <TableCell className="font-medium">{element}</TableCell>
                            <TableCell>{percentage}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="welding" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Kaynak Parametreleri</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Kalınlık</TableHead>
                          <TableHead>Akım</TableHead>
                          <TableHead>Voltaj</TableHead>
                          <TableHead>Hız</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.weldingParams.map((param: any, index: number) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{param.thickness}</TableCell>
                            <TableCell>{param.current}</TableCell>
                            <TableCell>{param.voltage}</TableCell>
                            <TableCell>{param.speed}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-6"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Önemli Notlar</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Kaynak öncesi yüzey temizliği kritiktir</li>
                <li>• Ön ısıtma sıcaklığı malzeme kalınlığına göre ayarlanmalıdır</li>
                <li>• Soğutma hızı kontrollü olmalıdır</li>
                <li>• Çok geçişli kaynaklarda ara sıcaklık kontrolü yapılmalıdır</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}