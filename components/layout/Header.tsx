'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, MessageCircle, FileText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { IndependenceRibbon } from '@/components/layout/IndependenceRibbon';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { Route } from 'next';

export function Header() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [showRibbon, setShowRibbon] = useState(true);

  const navigationItems = [
    { href: '/urunler' as Route, label: t('navigation.products') },
    { href: '/rehberler' as Route, label: t('navigation.guides') },
    { href: '/hizmetler' as Route, label: t('navigation.services') },
    { href: '/sektorler' as Route, label: t('navigation.sectors') },
    { href: '/sertifikalar' as Route, label: t('navigation.certificates') },
    { href: '/temsilcilikler' as Route, label: t('navigation.dealers') },
    { href: '/haberler' as Route, label: t('navigation.news') },
    { href: '/akademi' as Route, label: t('navigation.academy') },
    { href: '/hakkimizda' as Route, label: t('navigation.about') },
    { href: '/iletisim' as Route, label: t('navigation.contact') },
  ];

  return (
    <div className="relative">
      <AnimatePresence>
        {showRibbon && (
          <IndependenceRibbon onDismiss={() => setShowRibbon(false)} />
        )}
      </AnimatePresence>
      
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NW</span>
                </div>
                <span className="font-bold text-xl text-gray-900">NanoWearTech</span>
                <span className="text-sm text-gray-600 hidden sm:inline">Türkiye</span>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.slice(0, 6).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <div className="hidden sm:flex space-x-2">
                <Button size="sm" variant="outline" className="text-sm">
                  <Phone className="h-4 w-4 mr-1" />
                  {t('actions.call')}
                </Button>
                <Button size="sm" className="text-sm">
                  <FileText className="h-4 w-4 mr-1" />
                  {t('actions.quote')}
                </Button>
              </div>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}