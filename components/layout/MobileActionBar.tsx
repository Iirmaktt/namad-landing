'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, FileText, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export function MobileActionBar() {
  const t = useTranslations();

  const actions = [
    { icon: Phone, label: t('actions.call'), href: 'tel:+905321234567' },
    { icon: MessageCircle, label: t('actions.whatsapp'), href: 'https://wa.me/905321234567' },
    { icon: FileText, label: t('actions.quote'), href: '#quote-form' },
    { icon: Menu, label: t('actions.menu'), href: '#' },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-2 lg:hidden"
    >
      <div className="flex items-center justify-around">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            asChild
            className="flex flex-col items-center space-y-1 h-auto py-2 px-3"
          >
            <a href={action.href}>
              <action.icon className="h-5 w-5" />
              <span className="text-xs">{action.label}</span>
            </a>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}