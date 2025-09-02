'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Cookie, Settings, Eye, Shield } from 'lucide-react';

export default function CerezPolitikasiPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
            <Cookie className="h-8 w-8 text-orange-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Çerez Politikası
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Web sitemizde kullanılan çerezler hakkında bilgilendirme
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cookie className="h-6 w-6 text-orange-600" />
                  <span>Çerez Nedir?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Çerezler, web sitelerini ziyaret ettiğinizde cihazınıza (bilgisayar, tablet, telefon) 
                  kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin düzgün çalışmasını 
                  sağlamak, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek 
                  için kullanılır.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <span>Kullandığımız Çerez Türleri</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Zorunlu Çerezler</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Web sitesinin temel işlevlerini yerine getirmesi için gerekli çerezlerdir.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Oturum yönetimi</li>
                      <li>• Güvenlik</li>
                      <li>• Dil tercihleri</li>
                      <li>• Form verileri</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Performans Çerezleri</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Site performansını analiz etmek ve iyileştirmek için kullanılır.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Sayfa görüntüleme istatistikleri</li>
                      <li>• Kullanıcı davranış analizi</li>
                      <li>• Site hızı ölçümü</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">İşlevsellik Çerezleri</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Kullanıcı deneyimini kişiselleştirmek için kullanılır.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Tercih edilen ayarlar</li>
                      <li>• Kişiselleştirilmiş içerik</li>
                      <li>• Sosyal medya entegrasyonu</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-green-600" />
                  <span>Çerez Yönetimi</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz. 
                  Çerezleri devre dışı bırakmanız durumunda, web sitesinin bazı 
                  işlevleri düzgün çalışmayabilir.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Önemli Not</h4>
                  <p className="text-yellow-700 text-sm">
                    Zorunlu çerezler web sitesinin temel işlevleri için gereklidir ve 
                    devre dışı bırakılamaz. Diğer çerez türlerini tarayıcı ayarlarınızdan 
                    kontrol edebilirsiniz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <span>İletişim</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Çerez politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2 text-sm">
                    <div><strong>E-posta:</strong> kvkk@nanoweartech.com.tr</div>
                    <div><strong>Telefon:</strong> +90 216 123 45 67</div>
                    <div><strong>Adres:</strong> İstanbul Sanayi Bölgesi, Teknoloji Mahallesi, Kaynak Sokak No: 123, 34906 Pendik/İstanbul</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}