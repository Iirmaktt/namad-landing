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

interface FluxCoredDetailClientProps {
  slug: string;
}

export default function FluxCoredDetailClient({ slug }: FluxCoredDetailClientProps) {
  
  const familyData: Record<string, any> = {
    'nawel-abrasion': {
      title: 'NAWEL Abrasion Serisi',
      description: 'Ekstremal aşınma koşulları için geliştirilmiş, yüksek karbonlu matris yapılı toz dolgulu tel ailesi',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        {
          name: 'NAWEL Abrasion C',
          standard: 'DIN 8555: MF 10-GF-60-G',
          hardness: '58-62 HRC',
          diameter: ['1.6mm', '2.4mm'],
          description: 'Yüksek karbonlu matris yapı ile maksimum aşınma direnci',
          applications: ['Konveyör Vidaları', 'Vals Değirmenleri', 'Çimento Mixer']
        },
        {
          name: 'NAWEL Abrasion B',
          standard: 'DIN 8555: MF 6-GF-55-G',
          hardness: '52-58 HRC',
          diameter: ['1.6mm', '2.4mm'],
          description: 'Orta karbonlu yapı ile aşınma ve darbe dengesi',
          applications: ['Beton Mikser', 'Crusher Jaw', 'İmpakt Plaka']
        },
        {
          name: 'NAWEL Abrasion BN',
          standard: 'DIN 8555: MF 8-GF-58-G',
          hardness: '55-60 HRC',
          diameter: ['1.6mm', '2.4mm'],
          description: 'Nikel takviyeli gelişmiş aşınma direnci',
          applications: ['Pompa Gövdesi', 'Turbine Blade', 'Wear Ring']
        }
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
        { diameter: '1.6mm', current: '180-220A', voltage: '28-32V', wireSpeed: '8-12 m/min', stickOut: '15-20mm' },
        { diameter: '2.4mm', current: '280-350A', voltage: '30-34V', wireSpeed: '6-10 m/min', stickOut: '20-25mm' }
      ]
    },
    'nawel-impact': {
      title: 'NAWEL Impact Serisi',
      description: 'Darbe ve aşınma kombinasyonu için optimize edilmiş, yüksek tokluğa sahip formülasyonlar',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        {
          name: 'NAWEL Impact 510',
          standard: 'DIN 8555: MF 4-GF-45-G',
          hardness: '42-48 HRC',
          diameter: ['1.6mm', '2.4mm', '3.2mm'],
          description: 'Orta düzey darbe direnci ile aşınma koruması',
          applications: ['Crusher Hammer', 'İmpakt Çark', 'Kırma Eleme']
        },
        {
          name: 'NAWEL Impact 600',
          standard: 'DIN 8555: MF 6-GF-50-G',
          hardness: '48-54 HRC',
          diameter: ['1.6mm', '2.4mm', '3.2mm'],
          description: 'Yüksek darbe direnci için gelişmiş alaşım',
          applications: ['Heavy Hammer', 'Impact Crusher', 'Mining Equipment']
        }
      ],
      composition: {
        'C': '2.8-3.5',
        'Cr': '18-22',
        'Mn': '1.2-1.8',
        'Si': '0.6-1.0',
        'Ni': '2.5-3.5',
        'Fe': 'Kalan'
      },
      weldingParams: [
        { diameter: '1.6mm', current: '160-200A', voltage: '26-30V', wireSpeed: '8-12 m/min', stickOut: '15-20mm' },
        { diameter: '2.4mm', current: '250-320A', voltage: '28-32V', wireSpeed: '6-10 m/min', stickOut: '20-25mm' },
        { diameter: '3.2mm', current: '320-400A', voltage: '30-34V', wireSpeed: '4-8 m/min', stickOut: '25-30mm' }
      ]
    },
    'nawel-tungsten-carbide': {
      title: 'NAWEL Tungsten Carbide Serisi',
      description: 'Maksimum aşınma direnci için tungsten karbür matrisli premium toz dolgulu teller',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: [
        {
          name: 'NAWEL WC 65',
          standard: 'DIN 8555: MF 10-GF-65-GTZ',
          hardness: '62-67 HRC',
          diameter: ['2.4mm', '3.2mm'],
          description: 'Tungsten karbür takviyeli yüksek aşınma direnci',
          applications: ['Mining Crushers', 'Quarry Equipment', 'Extreme Wear']
        },
        {
          name: 'NAWEL WC 70',
          standard: 'DIN 8555: MF 12-GF-70-GTZ',
          hardness: '67-72 HRC',
          diameter: ['2.4mm', '3.2mm'],
          description: 'Premium tungsten karbür formülasyonu',
          applications: ['Heavy Mining', 'Abrasive Materials', 'Maximum Wear']
        }
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
        { diameter: '2.4mm', current: '300-380A', voltage: '30-34V', wireSpeed: '5-8 m/min', stickOut: '20-25mm' },
        { diameter: '3.2mm', current: '380-450A', voltage: '32-36V', wireSpeed: '3-6 m/min', stickOut: '25-30mm' }
      ]
    }
  };

  const family = familyData[slug];

  if (!family) {
    return <div>Ürün ailesi bulunamadı</div>;
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
            <Link href="/urunler/flux-cored-teller" className="hover:text-blue-600">Toz Dolgulu Teller</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{family.title}</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/urunler/flux-cored-teller">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Toz Dolgulu Tellere Geri Dön
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
                <CardTitle className="text-3xl">{family.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={family.image}
                    alt={family.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {family.description}
                </p>
                
                <div className="space-y-2">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Seri Kataloğu İndir
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
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="products">Ürünler</TabsTrigger>
                <TabsTrigger value="composition">Bileşim</TabsTrigger>
                <TabsTrigger value="welding">Parametreler</TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="mt-6">
                <div className="space-y-4">
                  {family.products.map((product: any, index: number) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <Badge variant="outline" className="mt-1">{product.standard}</Badge>
                          </div>
                          <Badge className="bg-blue-600 text-white">{product.hardness}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.diameter.map((dia: string, idx: number) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {dia}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-sm text-gray-600">
                          <strong>Uygulamalar:</strong> {product.applications.join(', ')}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
                        {Object.entries(family.composition).map(([element, percentage]) => (
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
                          <TableHead>Tel Çapı</TableHead>
                          <TableHead>Akım</TableHead>
                          <TableHead>Voltaj</TableHead>
                          <TableHead>Tel Hızı</TableHead>
                          <TableHead>Stick-out</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {family.weldingParams.map((param: any, index: number) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{param.diameter}</TableCell>
                            <TableCell>{param.current}</TableCell>
                            <TableCell>{param.voltage}</TableCell>
                            <TableCell>{param.wireSpeed}</TableCell>
                            <TableCell>{param.stickOut}</TableCell>
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
          className="bg-blue-50 border border-blue-200 rounded-lg p-6"
        >
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-2">Kaynak Önerileri</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Koruyucu gaz: %100 CO₂ veya %75 Ar + %25 CO₂</li>
                <li>• Ön ısıtma: 150-200°C (malzeme kalınlığına bağlı)</li>
                <li>• Ara geçiş sıcaklığı: Maksimum 250°C</li>
                <li>• Kaynak sonrası yavaş soğutma önerilir</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}