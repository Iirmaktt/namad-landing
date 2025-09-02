'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion } from 'framer-motion';
import { Download, FileText, ArrowLeft, Zap, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface TubularDetailClientProps {
  slug: string;
}

export default function TubularDetailClient({ slug }: TubularDetailClientProps) {
  
  const electrodeData: Record<string, any> = {
    'tubular-b': {
      title: 'NAWEL Tubular B',
      standard: 'DIN 8555: MF 6-GF-55-G',
      summary: 'Elle kaynak uygulamaları için orta karbonlu toz dolgulu elektrot. Aşınma direnci ve işlenebilirlik dengesini optimal şekilde sağlar.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      hardness: '52-58 HRC',
      diameter: ['3.2mm', '4.0mm', '5.0mm'],
      applications: [
        'Manuel Onarım İşleri',
        'Saha Uygulamaları',
        'Küçük Parça Onarımı',
        'Bakım ve Onarım',
        'Acil Müdahale'
      ],
      features: [
        'Kolay ark başlatma',
        'Düşük spatter oranı',
        'İyi işlenebilirlik',
        'Stabil ark karakteristiği',
        'Temiz kaynak metali'
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
        { diameter: '3.2mm', current: '100-130A', voltage: '22-26V', position: 'Tüm pozisyonlar' },
        { diameter: '4.0mm', current: '130-170A', voltage: '24-28V', position: 'Tüm pozisyonlar' },
        { diameter: '5.0mm', current: '170-220A', voltage: '26-30V', position: 'Düz ve yatay' }
      ]
    },
    'tubular-c': {
      title: 'NAWEL Tubular C',
      standard: 'DIN 8555: MF 10-GF-60-G',
      summary: 'Yüksek karbonlu elle kaynak elektrot. Maksimum aşınma direnci gerektiren uygulamalar için geliştirilmiştir.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      hardness: '58-62 HRC',
      diameter: ['3.2mm', '4.0mm', '5.0mm'],
      applications: [
        'Ağır Aşınma Uygulamaları',
        'Crusher Onarımı',
        'Sert Yüzey Kaplama',
        'Endüstriyel Onarım',
        'Kritik Parça Restorasyonu'
      ],
      features: [
        'Yüksek karbonlu matris',
        'Maksimum aşınma direnci',
        'İyi ark stabilitesi',
        'Düşük seyreltme',
        'Mükemmel kaynak kalitesi'
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
        { diameter: '3.2mm', current: '110-140A', voltage: '23-27V', position: 'Tüm pozisyonlar' },
        { diameter: '4.0mm', current: '140-180A', voltage: '25-29V', position: 'Tüm pozisyonlar' },
        { diameter: '5.0mm', current: '180-230A', voltage: '27-31V', position: 'Düz ve yatay' }
      ]
    }
  };

  const product = electrodeData[slug];

  if (!product) {
    return <div>Elektrot bulunamadı</div>;
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
            <Link href="/urunler/tubular-elektrotlar" className="hover:text-blue-600">Tubular Elektrotlar</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/urunler/tubular-elektrotlar">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Elektrotlara Geri Dön
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
                  <Zap className="h-6 w-6 text-orange-600" />
                  <Badge className="bg-orange-600 text-white">{product.standard}</Badge>
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
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{product.hardness}</div>
                    <div className="text-sm text-gray-600">Sertlik</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{product.diameter.length}</div>
                    <div className="text-sm text-gray-600">Çap Seçeneği</div>
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
                <TabsTrigger value="welding">Parametreler</TabsTrigger>
              </TabsList>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Öne Çıkan Özellikler</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
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
                          <TableHead>Çap</TableHead>
                          <TableHead>Akım</TableHead>
                          <TableHead>Voltaj</TableHead>
                          <TableHead>Pozisyon</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.weldingParams.map((param: any, index: number) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{param.diameter}</TableCell>
                            <TableCell>{param.current}</TableCell>
                            <TableCell>{param.voltage}</TableCell>
                            <TableCell>{param.position}</TableCell>
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
          className="bg-orange-50 border border-orange-200 rounded-lg p-6"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-800 mb-2">Elle Kaynak Önerileri</h3>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Elektrot kurutma: 300-350°C'de 1-2 saat</li>
                <li>• DC+ polarite kullanın</li>
                <li>• Kısa ark uzunluğu tercih edin</li>
                <li>• Düzenli ark hareketi yapın</li>
                <li>• Cüruf temizliğini her geçişte yapın</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}