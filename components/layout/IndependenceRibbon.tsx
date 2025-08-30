'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { X, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IndependenceRibbonProps {
  onDismiss: () => void;
}

export function IndependenceRibbon({ onDismiss }: IndependenceRibbonProps) {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm">
          <Info className="h-4 w-4 flex-shrink-0" />
          <span>{t('independence.short')}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onDismiss}
          className="text-white hover:bg-white/20 h-6 w-6 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}