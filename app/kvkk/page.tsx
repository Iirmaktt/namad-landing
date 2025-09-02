'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Shield, FileText, User, Lock } from 'lucide-react';

export default function KVKKPage() {
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
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-blue-600" />
                  <span>Veri Sorumlusu</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, 
                  kişisel verileriniz veri sorumlusu sıfatıyla NanoWearTech Türkiye 
                  tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Kişisel Verilerin İşlenme Amaçları</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Toplanan Veriler:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Ad, soyad, unvan bilgileri</li>
                      <li>• İletişim bilgileri (telefon, e-posta, adres)</li>
                      <li>• Şirket bilgileri</li>
                      <li>• Talep ve mesaj içerikleri</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">İşlenme Amaçları:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Müşteri hizmetlerinin sunulması</li>
                      <li>• Teknik destek sağlanması</li>
                      <li>• Ürün ve hizmet tanıtımı</li>
                      <li>• İletişim ve bilgilendirme</li>
                      <li>• Yasal yükümlülüklerin yerine getirilmesi</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-blue-600" />
                  <span>Kişisel Verilerin Aktarılması</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kişisel verileriniz, KVKK'nın 8. ve 9. maddelerinde belirtilen şartlar 
                  dahilinde aşağıdaki taraflarla paylaşılabilir:
                </p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Yetkili bayiler ve temsilciler</li>
                  <li>• Teknik destek sağlayıcıları</li>
                  <li>• Yasal yükümlülükler gereği kamu kurum ve kuruluşları</li>
                  <li>• Hizmet sağlayıcıları (IT, lojistik vb.)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Kişisel Veri Sahibinin Hakları</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  KVKK'nın 11. maddesi uyarınca aşağıdaki haklarınız bulunmaktadır:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Kişisel veri işlenip işlenmediğini öğrenme</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>İşlenen veriler hakkında bilgi talep etme</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Verilerin silinmesini veya yok edilmesini isteme</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>İletişim</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  KVKK kapsamındaki taleplerinizi aşağıdaki iletişim bilgileri 
                  üzerinden bize iletebilirsiniz:
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