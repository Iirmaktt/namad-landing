'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building, Search, Filter, Navigation } from 'lucide-react';
import Image from 'next/image';

export default function NeredenAlinirPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('Tümü');

  const dealers = [
    {
      name: 'İstanbul Kaynak Malzemeleri A.Ş.',
      city: 'İstanbul',
      district: 'Pendik',
      address: 'Sanayi Mahallesi, Kaynak Sokak No: 45, 34906 Pendik/İstanbul',
      phone: '+90 216 123 45 67',
      mobile: '+90 532 123 45 67',
      email: 'istanbul@nanoweartech.com.tr',
      contact: 'Ahmet Yılmaz',
      services: ['Satış', 'Teknik Destek', 'Stok', 'Eğitim'],
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400',
      isMainDealer: true
    },
    {
      name: 'Ankara Endüstriyel Kaynak Ltd.',
      city: 'Ankara',
      district: 'Ostim',
      address: 'Ostim Sanayi Sitesi, 1234. Sokak No: 12, 06370 Yenimahalle/Ankara',
      phone: '+90 312 234 56 78',
      mobile: '+90 532 234 56 78',
      email: 'ankara@nanoweartech.com.tr',
      contact: 'Mehmet Kaya',
      services: ['Satış', 'Teknik Destek', 'Stok'],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      isMainDealer: false
    },
    {
      name: 'İzmir Hardfacing Çözümleri',
      city: 'İzmir',
      district: 'Çiğli',
      address: 'Atatürk Organize Sanayi Bölgesi, 5678. Sokak No: 23, 35620 Çiğli/İzmir',
      phone: '+90 232 345 67 89',
      mobile: '+90 532 345 67 89',
      email: 'izmir@nanoweartech.com.tr',
      contact: 'Ayşe Demir',
      services: ['Satış', 'Teknik Destek'],
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=400',
      isMainDealer: false
    },
    {
      name: 'Bursa Aşınma Teknolojileri',
      city: 'Bursa',
      district: 'Nilüfer',
      address: 'Organize Sanayi Bölgesi, Teknoloji Caddesi No: 67, 16140 Nilüfer/Bursa',
      phone: '+90 224 456 78 90',
      mobile: '+90 532 456 78 90',
      email: 'bursa@nanoweartech.com.tr',
      contact: 'Fatma Arslan',
      services: ['Satış', 'Stok'],
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      isMainDealer: false
    },
    {
      name: 'Adana Kaynak Sistemleri',
      city: 'Adana',
      district: 'Seyhan',
      address: 'Sanayi Mahallesi, Endüstri Bulvarı No: 89, 01140 Seyhan/Adana',
      phone: '+90 322 567 89 01',
      mobile: '+90 532 567 89 01',
      email: 'adana@nanoweartech.com.tr',
      contact: 'Mustafa Çelik',
      services: ['Satış', 'Teknik Destek'],
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
      isMainDealer: false
    },
    {
      name: 'Kocaeli Endüstriyel Malzemeler',
      city: 'Kocaeli',
      district: 'Gebze',
      address: 'Gebze Organize Sanayi Bölgesi, Üretim Caddesi No: 34, 41400 Gebze/Kocaeli',
      phone: '+90 262 678 90 12',
      mobile: '+90 532 678 90 12',
      email: 'kocaeli@nanoweartech.com.tr',
      contact: 'Hasan Öztürk',
      services: ['Satış', 'Stok', 'Saha Desteği'],
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400',
      isMainDealer: false
    }
  ];

  const cities = ['Tümü', ...Array.from(new Set(dealers.map(dealer => dealer.city)))];

  const filteredDealers = dealers.filter(dealer => {
    const matchesSearch = dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealer.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dealer.district.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === 'Tümü' || dealer.city === selectedCity;
    return matchesSearch && matchesCity;
  });

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
            Nereden Alınır?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye genelinde yetkili bayilerimizden ürünlerimize ulaşabilir, 
            teknik destek alabilirsiniz
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Bayi adı veya şehir ile ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Şehir seçin" />
              </SelectTrigger>
              <SelectContent>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>{city}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDealers.map((dealer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building className="h-12 w-12 text-blue-600" />
                  </div>
                  {dealer.isMainDealer && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-500 text-white">Ana Bayi</Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{dealer.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {dealer.contact} - {dealer.city}/{dealer.district}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
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
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{dealer.mobile}</span>
                    </div>
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
                    <Button size="sm" variant="outline">
                      <Navigation className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredDealers.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4" />
              <p>Aradığınız kriterlere uygun bayi bulunamadı.</p>
            </div>
            <Button variant="outline" onClick={() => {setSearchTerm(''); setSelectedCity('Tümü');}}>
              Filtreleri Temizle
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-white rounded-lg p-8 shadow-sm"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bölgenizde Bayi Yok mu?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bölgenizde henüz bayimiz bulunmuyorsa, doğrudan bizimle iletişime geçebilir 
              veya bayilik başvurusu yapabilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Doğrudan Satış: +90 532 123 45 67
              </Button>
              <Button size="lg" variant="outline">
                <Building className="h-5 w-5 mr-2" />
                Bayilik Başvurusu
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}