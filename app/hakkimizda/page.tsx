'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Factory, Globe } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations();

  const values = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'Türkiye sanayisine dünya standartlarında aşınmaya dayanıklı kaynak çözümleri sunarak, ekipman ömrünü artırmak ve üretim verimliliğini maksimize etmek.'
    },
    {
      icon: Eye,
      title: 'Vizyonumuz',
      description: 'Hardfacing ve toz dolgulu tel teknolojilerinde Türkiye\'nin lider markası olmak, inovatif çözümlerle global pazarda tanınan bir marka haline gelmek.'
    },
    {
      icon: Users,
      title: 'Değerlerimiz',
      description: 'Kalite, güvenilirlik, sürekli gelişim ve müşteri memnuniyeti odaklı yaklaşımımızla sektörde fark yaratmak.'
    }
  ];

  const stats = [
    { label: 'Kuruluş Yılı', value: '2024', icon: Factory },
    { label: 'Ürün Çeşidi', value: '50+', icon: Award },
    { label: 'Sektör Deneyimi', value: '15+', icon: Globe },
    { label: 'Teknik Uzman', value: '12+', icon: Users }
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
            Hakkımızda
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin aşınmaya dayanıklı kaynak çözümleri konusunda 
            güvenilir partneri olmaya kararlıyız
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                NanoWearTech Türkiye
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                2024 yılında kurulan NanoWearTech Türkiye, endüstriyel aşınma problemlerine 
                yönelik ileri teknoloji kaynak çözümleri geliştiren ve sunan bir Türk şirketidir. 
                Toz dolgulu tel (FCAW) ve hardfacing teknolojilerinde uzmanlaşarak, 
                çimento, madencilik, demir-çelik ve agrega sektörlerinde faaliyet göstermektedir.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-3">Bağımsızlık Beyanı</h3>
                <p className="text-blue-800 leading-relaxed">
                  {t('independence.full')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="text-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="NanoWearTech Türkiye Tesis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Modern Üretim Tesisimiz</h3>
                <p className="text-sm opacity-90">İstanbul Sanayi Bölgesi'ndeki tesisimizde kalite kontrol</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Misyon, Vizyon ve Değerlerimiz
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-lg p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Kalite Yaklaşımımız
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Teknoloji ve İnovasyon</h3>
              <p className="text-gray-700 leading-relaxed">
                Nano-teknoloji destekli formülasyonlarımızla, geleneksel hardfacing 
                çözümlerinin ötesinde performans sunuyoruz. Sürekli Ar-Ge çalışmalarımızla 
                endüstri ihtiyaçlarına en uygun çözümleri geliştiriyoruz.
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Nano-parçacık dağılım teknolojisi</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Düşük seyreltme oranları</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Optimized flux formülasyonları</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Kalite Güvencesi</h3>
              <p className="text-gray-700 leading-relaxed">
                Her üretim partisi titizlikle test edilir ve uluslararası standartlara 
                uygunluğu garantilenir. ISO 9001:2015 kalite yönetim sistemimizle 
                tutarlı kaliteyi her zaman sunuyoruz.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-800">ISO 9001:2015</Badge>
                <Badge className="bg-blue-100 text-blue-800">DIN 8555</Badge>
                <Badge className="bg-purple-100 text-purple-800">EN 14700</Badge>
                <Badge className="bg-orange-100 text-orange-800">Patent Sahibi</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}