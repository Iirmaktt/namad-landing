'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Kullanım Koşulları
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Web sitemizin kullanım şartları ve koşulları
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
                  <Scale className="h-6 w-6 text-blue-600" />
                  <span>Genel Koşullar</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Bu web sitesi NanoWearTech Türkiye tarafından işletilmektedir. 
                    Siteyi kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Site Kullanımı</h3>
                    <ul className="space-y-1">
                      <li>• Site içeriği yalnızca bilgilendirme amaçlıdır</li>
                      <li>• Ticari olmayan kişisel kullanım için uygundur</li>
                      <li>• İçeriklerin izinsiz kopyalanması yasaktır</li>
                      <li>• Site güvenliğini tehdit edici faaliyetler yasaktır</li>
                    </ul>
                  </div>
                </div>
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
                  <Shield className="h-6 w-6 text-green-600" />
                  <span>Fikri Mülkiyet Hakları</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Bu web sitesindeki tüm içerik, tasarım, logo, metin, görsel ve 
                    diğer materyaller NanoWearTech Türkiye'nin fikri mülkiyetidir.
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Korunan İçerikler</h3>
                    <ul className="space-y-1">
                      <li>• Ürün isimleri ve açıklamaları</li>
                      <li>• Teknik dökümanlar</li>
                      <li>• Fotoğraf ve görseller</li>
                      <li>• Logo ve marka unsurları</li>
                      <li>• Web sitesi tasarımı</li>
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
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  <span>Sorumluluk Reddi</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    NanoWearTech Türkiye, web sitesindeki bilgilerin doğruluğunu 
                    sağlamak için çaba gösterse de, bilgilerin eksiksiz, güncel 
                    ve hatasız olduğunu garanti etmez.
                  </p>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sorumluluk Sınırları</h3>
                    <ul className="space-y-1">
                      <li>• Teknik bilgilerin uygulanmasından doğan zararlar</li>
                      <li>• Üçüncü taraf bağlantılardan kaynaklanan sorunlar</li>
                      <li>• Site erişim kesintileri</li>
                      <li>• Veri kaybı veya güvenlik ihlalleri</li>
                    </ul>
                  </div>
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
                <CardTitle>Değişiklikler ve Güncellemeler</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  NanoWearTech Türkiye, kullanım koşullarını önceden haber vermeksizin 
                  değiştirme hakkını saklı tutar. Güncel koşullar için bu sayfayı 
                  düzenli olarak kontrol etmenizi öneririz.
                </p>
                
                <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Son Güncelleme:</strong> 15 Aralık 2024
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}