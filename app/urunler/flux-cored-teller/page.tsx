'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Search, Filter, Download, Eye, Scale, ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FluxCoredTellerPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const productFamilies = [
    {
      slug: 'nawel-abrasion',
      title: 'NAWEL Abrasion',
      description: 'Yüksek aşınma direnci için özel formülasyonlu toz dolgulu teller',
      productCount: '9 ürün',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: ['Abrasion C', 'Abrasion B', 'Abrasion BN', 'Abrasion BNM', 'Abrasion N', 'Abrasion TiC', 'Abrasion LCB', 'Abrasion LCBN', 'Abrasion NBS'],
      standards: ['DIN 8555 MF 10-GF-60-G', 'EN 14700']
    },
    {
      slug: 'nawel-impact',
      title: 'NAWEL Impact',
      description: 'Darbe ve aşınma kombinasyonu için optimize edilmiş formülasyonlar',
      productCount: '2 ürün',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: ['Impact 510', 'Impact 600'],
      standards: ['DIN 8555 MF 6-GF-50-G']
    },
    {
      slug: 'nawel-rail',
      title: 'NAWEL Rail',
      description: 'Demiryolu uygulamaları için özel geliştirilmiş formülasyon',
      productCount: '1 ürün',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: ['Rail Standard'],
      standards: ['DIN 8555 MF 8-GF-55-G']
    },
    {
      slug: 'nawel-tool',
      title: 'NAWEL Tool',
      description: 'Takım çeliği yüzeyleri için sıcak iş çeliği formülasyonları',
      productCount: '3 ürün',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: ['Tool H13', 'Tool H11', 'Tool D2'],
      standards: ['DIN 8555 MF 6-GF-65-G']
    },
    {
      slug: 'nawel-corrosion',
      title: 'NAWEL Corrosion',
      description: 'Korozyon direnci ve orta düzey aşınma koruması',
      productCount: '2 ürün',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: ['Corrosion 316L', 'Corrosion 309L'],
      standards: ['DIN 8555 MF 5-GF-40-C']
    },
    {
      slug: 'nawel-cast',
      title: 'NAWEL Cast',
      description: 'Döküm metal onarım ve güçlendirme uygulamaları',
      productCount: '2 ürün',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: ['Cast Iron', 'Cast Steel'],
      standards: ['DIN 8555 MF 2-GF-20-G']
    },
    {
      slug: 'nawel-buildup',
      title: 'NAWEL Buildup',
      description: 'Boyut geri kazanım ve yeniden inşa uygulamaları',
      productCount: '2 ürün',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: ['Buildup Standard', 'Buildup High'],
      standards: ['DIN 8555 MF 1-GF-10-G']
    },
    {
      slug: 'nawel-tungsten-carbide',
      title: 'NAWEL Tungsten Carbide',
      description: 'Maksimum aşınma direnci için tungsten karbür matrisli teller',
      productCount: '3 ürün',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      products: ['WC 65', 'WC 70', 'WC 75'],
      standards: ['DIN 8555 MF 10-GF-70-GTZ']
    }
  ];

  const filteredFamilies = productFamilies.filter(family =>
    family.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    family.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            <span className="text-gray-900 font-medium">Toz Dolgulu Kaynak Telleri</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/urunler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ürünlere Geri Dön
            </Link>
          </Button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Toz Dolgulu Kaynak Telleri (FCAW)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Her endüstriyel uygulama için özel olarak formüle edilmiş, 
            yüksek performanslı toz dolgulu tel ailelerimiz
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Ürün ailesi veya standart kodu ile ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtrele
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFamilies.map((family, index) => (
            <motion.div
              key={family.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/urunler/flux-cored-teller/${family.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={family.image}
                      alt={family.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {family.productCount}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {family.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {family.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Ürünler:</h4>
                      <div className="flex flex-wrap gap-1">
                        {family.products.slice(0, 3).map((product, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {product}
                          </Badge>
                        ))}
                        {family.products.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{family.products.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Standartlar:</h4>
                      <div className="flex flex-wrap gap-1">
                        {family.standards.map((std, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {std}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}