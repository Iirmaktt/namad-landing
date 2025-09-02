'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building, Users, Globe } from 'lucide-react';

export default function TemsilciliklerPage() {
  const dealers = [
    {
      name: 'Tebadul-e Fanavari Roz Amir',
      region: 'Doğu/Batı Azerbaycan, Erdebil, Zencan ve Irak',
      contact: 'Cahangiri',
      phone: '+98 937 907 9632',
      email: 'info@rozamir.com',
      address: 'Tebriz, Doğu Azerbaycan',
      services: ['Satış', 'Teknik Destek', 'Stok']
    },
    {
      name: 'Elektrud Joş Sabâ',
      region: 'Tahran ve Merkezi İran',
      contact: 'Melki',
      phone: '+98 21 6671 2177',
      phone2: '+98 21 6671 9901',
      email: 'sales@elektrudjosh.com',
      address: 'Tahran, Merkezi İran',
      services: ['Satış Merkezi', 'Ana Depo', 'Teknik Destek']
    },
    {
      name: 'Khorasan Kaynak Malzemeleri',
      region: 'Khorasan Razavi, Khorasan Şomali, Khorasan Cenubi',
      contact: 'Ahmadi',
      phone: '+98 915 123 4567',
      email: 'info@khorasankaynak.com',
      address: 'Meşhed, Khorasan Razavi',
      services: ['Bölgesel Satış', 'Teknik Destek']
    },
    {
      name: 'Fars Endüstriyel Çözümler',
      region: 'Fars, Bushehr, Kohgiluyeh ve Boyer-Ahmad',
      contact: 'Rezaei',
      phone: '+98 917 234 5678',
      email: 'sales@farsindustrial.com',
      address: 'Şiraz, Fars',
      services: ['Satış', 'Uygulama Desteği']
    },
    {
      name: 'Isfahan Kaynak Teknolojileri',
      region: 'Isfahan, Chaharmahal ve Bakhtiari',
      contact: 'Hosseini',
      phone: '+98 913 345 6789',
      email: 'info@isfahankaynak.com',
      address: 'Isfahan, Isfahan',
      services: ['Satış', 'Eğitim', 'Teknik Destek']
    },
    {
      name: 'Khuzestan Endüstriyel',
      region: 'Khuzestan, Ilam, Lorestan',
      contact: 'Karimi',
      phone: '+98 916 456 7890',
      email: 'sales@khuzestanind.com',
      address: 'Ahvaz, Khuzestan',
      services: ['Satış', 'Saha Desteği']
    }
  ];

  const regions = [
    { name: 'Kuzey İran', dealers: 2, color: 'bg-blue-100 text-blue-800' },
    { name: 'Merkezi İran', dealers: 1, color: 'bg-green-100 text-green-800' },
    { name: 'Doğu İran', dealers: 2, color: 'bg-orange-100 text-orange-800' },
    { name: 'Güney İran', dealers: 2, color: 'bg-purple-100 text-purple-800' },
    { name: 'Batı İran', dealers: 1, color: 'bg-red-100 text-red-800' }
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
            Temsilcilikler ve Bayiler
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye genelinde yetkili bayilerimizden ürünlerimize ulaşabilir, 
            teknik destek alabilirsiniz
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-gray-900">{region.dealers}</div>
                  <div className="text-sm text-gray-600 mb-2">{region.name}</div>
                  <Badge className={region.color}>Aktif</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dealers.map((dealer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Building className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{dealer.name}</CardTitle>
                      <CardDescription className="text-sm">{dealer.contact}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Globe className="h-4 w-4 text-gray-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm text-gray-900">Kapsam Alanı</div>
                      <div className="text-sm text-gray-600">{dealer.region}</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm text-gray-900">Adres</div>
                      <div className="text-sm text-gray-600">{dealer.address}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{dealer.phone}</span>
                    </div>
                    {dealer.phone2 && (
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-700">{dealer.phone2}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{dealer.email}</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-medium text-sm text-gray-900 mb-2">Hizmetler</div>
                    <div className="flex flex-wrap gap-1">
                      {dealer.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Phone className="h-4 w-4 mr-1" />
                      Ara
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
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
              Bayi Olmak İster misiniz?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              NanoWearTech Türkiye bayi ağımıza katılarak bölgenizde 
              aşınmaya dayanıklı kaynak çözümlerinin temsilcisi olun.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                <Users className="h-5 w-5 mr-2" />
                Bayilik Başvurusu
              </Button>
              <Button size="lg" variant="outline">
                <FileText className="h-5 w-5 mr-2" />
                Bayilik Koşulları
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}