'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Route } from 'next';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NW</span>
              </div>
              <span className="font-bold text-xl text-white">NanoWearTech</span>
            </div>
            <p className="text-sm leading-relaxed">
              Türkiye'nin aşınmaya dayanıklı kaynak çözümleri uzmanı. 
              Toz dolgulu tel ve hardfacing teknolojileriyle endüstriyel ekipman ömrünü artırıyoruz.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Ürünler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={"/urunler/plakalar" as Route} className="hover:text-blue-400 transition-colors">Aşınma Plakaları</Link></li>
              <li><Link href={"/urunler/flux-cored-teller" as Route} className="hover:text-blue-400 transition-colors">Toz Dolgulu Teller</Link></li>
              <li><Link href={"/urunler/tubular-elektrotlar" as Route} className="hover:text-blue-400 transition-colors">Tubular Elektrotlar</Link></li>
              <li><Link href={"/rehberler" as Route} className="hover:text-blue-400 transition-colors">Rehberler</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Hizmetler</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href={"/hizmetler/danismanlik" as Route} className="hover:text-blue-400 transition-colors">Teknik Danışmanlık</Link></li>
              <li><Link href={"/hizmetler/kaynak" as Route} className="hover:text-blue-400 transition-colors">Kaynak Hizmetleri</Link></li>
              <li><Link href={"/akademi" as Route} className="hover:text-blue-400 transition-colors">NAMAD Akademi</Link></li>
              <li><Link href={"/sektorler" as Route} className="hover:text-blue-400 transition-colors">Sektörler</Link></li>
              <li><Link href={"/temsilcilikler" as Route} className="hover:text-blue-400 transition-colors">Temsilcilikler</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">İletişim</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>İstanbul Sanayi Bölgesi<br />Türkiye</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+90 532 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <span>WhatsApp Destek</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@nanoweartech.com.tr</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-sm text-center lg:text-left">
            <p className="mb-2 font-medium text-white">
              {t('independence.short')}
            </p>
            <p>&copy; 2024 NanoWearTech Türkiye. Tüm hakları saklıdır.</p>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-end space-x-4 text-sm">
            <Link href={"/kvkk" as Route} className="hover:text-blue-400 transition-colors">KVKK</Link>
            <Link href={"/cerez-politikasi" as Route} className="hover:text-blue-400 transition-colors">Çerez Politikası</Link>
            <Link href={"/kullanim-kosullari" as Route} className="hover:text-blue-400 transition-colors">Kullanım Koşulları</Link>
            <Link href={"/kariyer" as Route} className="hover:text-blue-400 transition-colors">Kariyer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}