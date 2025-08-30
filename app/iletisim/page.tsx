'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requestType: '',
    acceptKvkk: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            İletişim
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Teknik sorularınız, teklif talepleriniz ve iş birliği önerileriniz için 
            uzman ekibimizle iletişime geçin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Adres</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  NanoWearTech Türkiye<br />
                  İstanbul Sanayi Bölgesi<br />
                  Teknoloji Mahallesi, Kaynak Sokak No: 123<br />
                  34906 Pendik / İstanbul<br />
                  Türkiye
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>Telefon</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Genel Hat:</span>
                  <span className="font-medium">+90 216 123 45 67</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Teknik Destek:</span>
                  <span className="font-medium">+90 532 123 45 67</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Satış:</span>
                  <span className="font-medium">+90 532 987 65 43</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>E-posta</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Genel:</span>
                  <span className="font-medium">info@nanoweartech.com.tr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Satış:</span>
                  <span className="font-medium">satis@nanoweartech.com.tr</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Teknik:</span>
                  <span className="font-medium">teknik@nanoweartech.com.tr</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span>Çalışma Saatleri</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pazartesi - Cuma:</span>
                    <span className="font-medium">08:00 - 17:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cumartesi:</span>
                    <span className="font-medium">08:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pazar:</span>
                    <span className="font-medium">Kapalı</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>İletişim Formu</CardTitle>
                <p className="text-gray-600">
                  Teklif, teknik destek veya genel sorularınız için formu doldurun. 
                  24 saat içinde size dönüş yapacağız.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input
                        id="name"
                        placeholder="Adınız ve soyadınız"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Şirket</Label>
                      <Input
                        id="company"
                        placeholder="Şirket adınız"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ornek@sirket.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        placeholder="+90 532 123 45 67"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="requestType">Talep Türü *</Label>
                    <Select value={formData.requestType} onValueChange={(value) => handleInputChange('requestType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Talep türünüzü seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="quote">Fiyat Teklifi</SelectItem>
                        <SelectItem value="sample">Numune Talebi</SelectItem>
                        <SelectItem value="technical">Teknik Destek</SelectItem>
                        <SelectItem value="consultation">Danışmanlık</SelectItem>
                        <SelectItem value="training">Eğitim Bilgisi</SelectItem>
                        <SelectItem value="general">Genel Soru</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Konu *</Label>
                    <Input
                      id="subject"
                      placeholder="Mesajınızın konusu"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesaj *</Label>
                    <Textarea
                      id="message"
                      placeholder="Detaylı mesajınızı yazın..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="kvkk"
                      checked={formData.acceptKvkk}
                      onCheckedChange={(checked) => handleInputChange('acceptKvkk', checked as boolean)}
                      required
                    />
                    <Label htmlFor="kvkk" className="text-sm text-gray-700">
                      <a href="/kvkk" className="text-blue-600 hover:underline">KVKK Aydınlatma Metni</a>'ni 
                      okudum ve kişisel verilerimin işlenmesini kabul ediyorum. *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="h-4 w-4 mr-2" />
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Hızlı İletişim</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button asChild className="h-auto py-4 justify-start">
                  <a href="tel:+902161234567">
                    <Phone className="h-5 w-5 mr-3" />
                    <div className="text-left">
                      <div>Hemen Arayın</div>
                      <div className="text-sm opacity-90">+90 216 123 45 67</div>
                    </div>
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="h-auto py-4 justify-start">
                  <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5 mr-3" />
                    <div className="text-left">
                      <div>WhatsApp</div>
                      <div className="text-sm opacity-70">Anında cevap</div>
                    </div>
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="h-auto py-4 justify-start">
                  <a href="mailto:info@nanoweartech.com.tr">
                    <Mail className="h-5 w-5 mr-3" />
                    <div className="text-left">
                      <div>E-posta</div>
                      <div className="text-sm opacity-70">24 saat içinde</div>
                    </div>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}