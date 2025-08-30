'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Download, Eye, Award, Shield, FileCheck } from 'lucide-react';
import Image from 'next/image';

export default function CertificatesPage() {
  const t = useTranslations();
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certificates = {
    standard: [
      {
        id: 'iso-9001',
        title: 'ISO 9001:2015 Kalite Yönetim Sistemi',
        issuer: 'TÜV Rheinland',
        date: '2024-03-15',
        expiry: '2027-03-15',
        image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'din-8555',
        title: 'DIN 8555 Hardfacing Standart Uygunluğu',
        issuer: 'TÜV SÜD',
        date: '2024-01-20',
        expiry: '2026-01-20',
        image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'en-14700',
        title: 'EN 14700 Flux Cored Wire Standardı',
        issuer: 'Bureau Veritas',
        date: '2023-11-10',
        expiry: '2025-11-10',
        image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    nano: [
      {
        id: 'nano-structure',
        title: 'Nano-yapılı Karbür Onayı',
        issuer: 'İTÜ Nano Teknoloji Merkezi',
        date: '2024-02-28',
        expiry: '2026-02-28',
        image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'nano-particle',
        title: 'Nano-parçacık Dağılım Analizi',
        issuer: 'TÜBITAK MAM',
        date: '2023-12-15',
        expiry: '2025-12-15',
        image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ],
    patents: [
      {
        id: 'patent-1',
        title: 'Tungsten Karbür Dağılım Teknolojisi',
        issuer: 'Türk Patent ve Marka Kurumu',
        date: '2023-09-20',
        expiry: '2043-09-20',
        image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        id: 'patent-2',
        title: 'Düşük Seyreltmeli Flux Formülasyonu',
        issuer: 'Türk Patent ve Marka Kurumu',
        date: '2023-07-12',
        expiry: '2043-07-12',
        image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'standard': return Award;
      case 'nano': return Shield;
      case 'patents': return FileCheck;
      default: return Award;
    }
  };

  const renderCertificateGrid = (certs: any[], type: string) => {
    const Icon = getIcon(type);
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="relative h-32 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                        "0 0 0 10px rgba(59, 130, 246, 0.1)",
                        "0 0 0 0 rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Icon className="h-8 w-8 text-blue-600" />
                  </motion.div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Veren Kurum:</span>
                    <span className="font-medium">{cert.issuer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tarih:</span>
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Geçerlilik:</span>
                    <Badge variant="outline" className="text-xs">
                      {cert.expiry}
                    </Badge>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    Görüntüle
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
    );
  };

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
            Sertifikalar ve Onaylar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uluslararası kalite standartları, nano-teknoloji onayları ve 
            patent portföyümüzle desteklenen güvenilir çözümler
          </p>
        </motion.div>

        <Tabs defaultValue="standard" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="standard" className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>Standart Sertifikaları</span>
            </TabsTrigger>
            <TabsTrigger value="nano" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Nano-teknoloji Onayları</span>
            </TabsTrigger>
            <TabsTrigger value="patents" className="flex items-center space-x-2">
              <FileCheck className="h-4 w-4" />
              <span>Patent Portföyü</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="standard">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {renderCertificateGrid(certificates.standard, 'standard')}
            </motion.div>
          </TabsContent>

          <TabsContent value="nano">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {renderCertificateGrid(certificates.nano, 'nano')}
            </motion.div>
          </TabsContent>

          <TabsContent value="patents">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {renderCertificateGrid(certificates.patents, 'patents')}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}