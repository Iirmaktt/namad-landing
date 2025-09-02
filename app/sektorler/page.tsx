'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Factory, Pickaxe, Truck, Zap, Building, Cog, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SektorlerPage() {
  const sectors = [
    {
      slug: 'cimento',
      icon: Factory,
      title: 'Çimento Endüstrisi',
      description: 'Yüksek sıcaklık ve aşındırıcı malzemeler için özel çözümler',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: [
        'Crusher Jaw Plakaları',
        'Hammer Mill Çekiçleri',
        'Konveyör Vidaları',
        'Mixer Blade Koruması',
        'Kiln Ring Onarımı'
      ],
      products: ['NAWEL Abrasion C', 'NAWEL Heat Resistant', 'NAWEL Plate Ultrahard'],
      challenges: [
        'Yüksek sıcaklık (800-1000°C)',
        'Aşındırıcı klinker',
        'Sürekli çalışma',
        'Kimyasal aşınma'
      ]
    },
    {
      slug: 'madencilik',
      icon: Pickaxe,
      title: 'Madencilik',
      description: 'Ekstremal aşınma koşulları için maksimum dayanıklılık',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: [
        'Crusher Liners',
        'Excavator Bucket',
        'Conveyor Components',
        'Screening Equipment',
        'Grinding Mill Parts'
      ],
      products: ['NAWEL Tungsten Carbide', 'NAWEL Impact 600', 'NAWEL Plate Ultrahard 70T'],
      challenges: [
        'Ekstremal aşınma',
        'Darbe yükleri',
        'Toz ve nem',
        'Sürekli operasyon'
      ]
    },
    {
      slug: 'agrega',
      icon: Truck,
      title: 'Agrega ve Kırma Eleme',
      description: 'Kırma eleme tesisleri için dayanıklı hardfacing çözümleri',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: [
        'Jaw Crusher Plakaları',
        'Impact Crusher Rotors',
        'Screen Decks',
        'Conveyor Chutes',
        'Feeder Components'
      ],
      products: ['NAWEL Abrasion B', 'NAWEL Impact 510', 'NAWEL Plate Ultralight'],
      challenges: [
        'Yüksek darbe',
        'Aşındırıcı agregalar',
        'Değişken yükler',
        'Hızlı aşınma'
      ]
    },
    {
      slug: 'enerji',
      icon: Zap,
      title: 'Enerji Sektörü',
      description: 'Güç santralleri ve enerji üretim tesisleri için çözümler',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: [
        'Turbine Blade Repair',
        'Boiler Tube Protection',
        'Coal Handling Systems',
        'Ash Handling Equipment',
        'Pump Components'
      ],
      products: ['NAWEL Corrosion', 'NAWEL Tool', 'NAWEL Heat Resistant'],
      challenges: [
        'Yüksek sıcaklık',
        'Korozif ortam',
        'Termal şok',
        'Sürekli operasyon'
      ]
    },
    {
      slug: 'celik',
      icon: Building,
      title: 'Demir Çelik',
      description: 'Demir çelik üretim tesisleri için hardfacing uygulamaları',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: [
        'Rolling Mill Rolls',
        'Continuous Casting',
        'Blast Furnace Components',
        'Ladle Repair',
        'Tundish Protection'
      ],
      products: ['NAWEL Tool H13', 'NAWEL Heat Resistant', 'NAWEL Buildup'],
      challenges: [
        'Ekstrem sıcaklık',
        'Termal döngü',
        'Oksidatif ortam',
        'Mekanik yükler'
      ]
    },
    {
      slug: 'genel-endustri',
      icon: Cog,
      title: 'Genel Endüstri',
      description: 'Çeşitli endüstriyel uygulamalar için geniş ürün yelpazesi',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=600',
      applications: [
        'Pump Impellers',
        'Valve Components',
        'Wear Plates',
        'Shaft Repair',
        'General Maintenance'
      ],
      products: ['NAWEL Buildup', 'NAWEL Cast', 'NAWEL Corrosion'],
      challenges: [
        'Çeşitli aşınma tipleri',
        'Farklı malzemeler',
        'Değişken koşullar',
        'Maliyet optimizasyonu'
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
            Sektörler ve Uygulamalar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Her sektörün özel ihtiyaçları için geliştirilmiş hardfacing çözümleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                      <sector.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {sector.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {sector.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Temel Zorluklar:</h4>
                    <div className="space-y-1">
                      {sector.challenges.slice(0, 3).map((challenge, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Önerilen Ürünler:</h4>
                    <div className="flex flex-wrap gap-1">
                      {sector.products.slice(0, 2).map((product, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                      {sector.products.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{sector.products.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button asChild className="w-full group">
                    <Link href={`/sektorler/${sector.slug}`}>
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
              Sektörünüz Listede Yok mu?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Her sektörün kendine özgü aşınma problemleri vardır. 
              Uzman ekibimizle iletişime geçin, size özel çözüm geliştirelim.
            </p>
            <Button size="lg">
              <Cog className="h-5 w-5 mr-2" />
              Özel Çözüm Talep Et
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}