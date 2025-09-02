'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Search, Filter, Download, Eye, Scale, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PlakalarPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const plates = [
    {
      slug: 'ultrahard-65',
      title: 'NAWEL Plate Ultrahard 65',
      standard: 'DIN 8555: MF 10-GF-65-G',
      description: 'Ekstremal aşınma koşulları için maksimum sertlik sağlayan hardfacing plakası',
      hardness: '62-67 HRC',
      thickness: ['6mm', '8mm', '10mm', '12mm'],
      applications: ['Crusher Jaw', 'Hammer Mill', 'Conveyor Screw'],
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      slug: 'ultralight-65',
      title: 'NAWEL Plate Ultralight 65',
      standard: 'DIN 8555: MF 8-GF-65-G',
      description: 'Hafif uygulamalar için optimize edilmiş aşınma direnci',
      hardness: '60-65 HRC',
      thickness: ['4mm', '6mm', '8mm'],
      applications: ['Chute Liner', 'Hopper', 'Conveyor Belt'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      slug: 'ultrahard-67t',
      title: 'NAWEL Plate Ultrahard 67T',
      standard: 'DIN 8555: MF 10-GF-67-GTZ',
      description: 'Tungsten karbür takviyeli maksimum aşınma direnci',
      hardness: '65-70 HRC',
      thickness: ['8mm', '10mm', '12mm', '15mm'],
      applications: ['Mining Equipment', 'Aggregate Processing', 'Cement Industry'],
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      slug: 'ultralight-67t',
      title: 'NAWEL Plate Ultralight 67T',
      standard: 'DIN 8555: MF 6-GF-67-GTZ',
      description: 'Orta yük uygulamaları için tungsten karbür takviyeli',
      hardness: '62-67 HRC',
      thickness: ['6mm', '8mm', '10mm'],
      applications: ['Material Handling', 'Conveyor Systems', 'Wear Strips'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      slug: 'ultrahard-70t',
      title: 'NAWEL Plate Ultrahard 70T',
      standard: 'DIN 8555: MF 12-GF-70-GTZ',
      description: 'En yüksek aşınma direnci için premium tungsten karbür formülasyonu',
      hardness: '68-72 HRC',
      thickness: ['10mm', '12mm', '15mm', '20mm'],
      applications: ['Extreme Wear', 'Mining Crushers', 'Quarry Equipment'],
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const toggleProductSelection = (productSlug: string) => {
    setSelectedProducts(prev => 
      prev.includes(productSlug) 
        ? prev.filter(slug => slug !== productSlug)
        : [...prev, productSlug]
    );
  };

  const filteredProducts = plates.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.standard.toLowerCase().includes(searchTerm.toLowerCase())
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
            <span className="text-gray-900 font-medium">Aşınma Plakaları</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/urunler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Ürünlere Geri Dön
            </Link>
          </Button>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Aşınmaya Dayanıklı Plakalar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Endüstriyel ekipmanlar için özel olarak tasarlanmış, 
            yüksek sertlik ve aşınma direnci sağlayan hardfacing plakaları
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Plaka adı veya DIN kodu ile ara..."
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
            {selectedProducts.length > 0 && (
              <Button size="sm">
                <Scale className="h-4 w-4 mr-2" />
                Karşılaştır ({selectedProducts.length})
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">
                      {product.hardness}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant={selectedProducts.includes(product.slug) ? "default" : "secondary"}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleProductSelection(product.slug);
                      }}
                      className="h-8 w-8 p-0"
                    >
                      <Scale className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="font-mono text-sm text-blue-600">
                    {product.standard}
                  </CardDescription>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Mevcut Kalınlıklar:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.thickness.map((thick, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {thick}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Tipik Uygulamalar:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.slice(0, 2).map((app, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                      {product.applications.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{product.applications.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href={`/urunler/plakalar/${product.slug}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        İncele
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}