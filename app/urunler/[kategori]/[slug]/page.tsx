'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion } from 'framer-motion';
import { Download, FileText, Scale, Share2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetailPage() {
  const params = useParams();
  
  // Mock product data
  const product = {
    title: 'NAWEL Abrasion C',
    standard: 'DIN 8555: MF 10-GF-60-G',
    summary: 'Ekstremal aşınma koşulları için geliştirilmiş, yüksek karbonlu matris yapılı toz dolgulu tel. Maksimum sertlik ve aşınma direnci sağlar.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    hardness: '58-62 HRC',
    
    advantages: [
      'Yüksek aşınma direnci ve uzun servis ömrü',
      'Düşük seyreltme oranı (%15-20)',
      'Mükemmel ark kararlılığı',
      'Minimum çatlama riski',
      'Kolay işlenebilirlik'
    ],
    
    applications: [
      'Konveyör vidaları ve spiral kanatları',
      'Vals değirmen silindirlerı',
      'Çimento karıştırıcı kolları',
      'Agrega crusher plakaları',
      'Beton pompa pistonları'
    ],
    
    composition: [
      { element: 'C', range: '4.0-5.5' },
      { element: 'Si', range: '0.8-1.2' },
      { element: 'Mn', range: '1.0-1.8' },
      { element: 'Cr', range: '25-30' },
      { element: 'Mo', range: '0.5-1.0' },
      { element: 'B', range: '1.5-2.5' }
    ],
    
    weldingParams: [
      { diameter: '1.6mm', current: '180-220A', voltage: '24-28V', speed: '25-35 cm/min', stickout: '15-20mm' },
      { diameter: '2.4mm', current: '250-320A', voltage: '26-30V', speed: '30-40 cm/min', stickout: '20-25mm' }
    ],
    
    packaging: [
      { diameter: '1.6mm', weight: '15 kg/bobin', packaging: 'Karton kutu' },
      { diameter: '2.4mm', weight: '25 kg/bobin', packaging: 'Karton kutu' }
    ]
  };

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
            <Link href={`/urunler/${params.kategori}`} className="hover:text-blue-600">NAWEL Abrasion</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.title}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
              <Badge className="text-sm bg-blue-100 text-blue-800 mb-4">
                {product.standard}
              </Badge>
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.summary}
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{product.hardness}</div>
                <div className="text-sm text-gray-600">Sertlik</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2 Çap</div>
                <div className="text-sm text-gray-600">Mevcut</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">5+</div>
                <div className="text-sm text-gray-600">Uygulama</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <Button size="lg" className="flex-1">
                <FileText className="h-4 w-4 mr-2" />
                Teklif İste
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-4 w-4 mr-2" />
                PDF İndir
              </Button>
              <Button size="lg" variant="outline">
                <Scale className="h-4 w-4 mr-2" />
                Karşılaştır
              </Button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">MSDS Uyarısı</h4>
                  <p className="text-sm text-yellow-700">
                    Kullanım öncesi güvenlik veri formu (MSDS) incelenmelidir. 
                    Uygun kişisel koruyucu ekipman kullanılmalıdır.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="advantages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
              <TabsTrigger value="advantages">Avantajlar</TabsTrigger>
              <TabsTrigger value="applications">Uygulamalar</TabsTrigger>
              <TabsTrigger value="composition">Bileşim</TabsTrigger>
              <TabsTrigger value="welding">Kaynak</TabsTrigger>
              <TabsTrigger value="packaging">Ambalaj</TabsTrigger>
              <TabsTrigger value="downloads">İndirmeler</TabsTrigger>
            </TabsList>
            
            <TabsContent value="advantages" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ürün Avantajları</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {product.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{advantage}</span>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{application}</span>
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
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Element</TableHead>
                          <TableHead>Aralık (%)</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.composition.map((comp, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{comp.element}</TableCell>
                            <TableCell>{comp.range}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="welding" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kaynak Parametreleri</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Tel Çapı</TableHead>
                          <TableHead>Akım (A)</TableHead>
                          <TableHead>Voltaj (V)</TableHead>
                          <TableHead>Hız</TableHead>
                          <TableHead>Stick-out</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.weldingParams.map((param, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{param.diameter}</TableCell>
                            <TableCell>{param.current}</TableCell>
                            <TableCell>{param.voltage}</TableCell>
                            <TableCell>{param.speed}</TableCell>
                            <TableCell>{param.stickout}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Not:</strong> Parametre değerleri rehber niteliğindedir. 
                      Optimum sonuçlar için saha testleri önerilir.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="packaging" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ambalaj ve Çaplar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Çap</TableHead>
                          <TableHead>Ağırlık</TableHead>
                          <TableHead>Ambalaj</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.packaging.map((pack, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{pack.diameter}</TableCell>
                            <TableCell>{pack.weight}</TableCell>
                            <TableCell>{pack.packaging}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="downloads" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>İndirilebilir Dosyalar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Ürün Data Sheet', type: 'PDF', size: '2.3 MB' },
                      { title: 'MSDS Güvenlik Formu', type: 'PDF', size: '1.8 MB' },
                      { title: 'Kaynak Parametreleri', type: 'PDF', size: '950 KB' },
                      { title: 'Uygulama Rehberi', type: 'PDF', size: '3.1 MB' }
                    ].map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-red-600" />
                          <div>
                            <div className="font-medium">{file.title}</div>
                            <div className="text-sm text-gray-600">{file.type} • {file.size}</div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}