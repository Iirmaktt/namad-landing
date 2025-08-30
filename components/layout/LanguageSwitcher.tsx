'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = () => {
    const currentLocale = pathname.startsWith('/en') ? 'en' : 'tr';
    const newLocale = currentLocale === 'tr' ? 'en' : 'tr';
    
    let newPath = pathname;
    if (currentLocale === 'en') {
      newPath = pathname.replace('/en', '');
    } else {
      newPath = `/en${pathname}`;
    }
    
    router.push(newPath);
  };

  const currentLang = pathname.startsWith('/en') ? 'EN' : 'TR';

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchLanguage}
      className="text-sm"
    >
      <Globe className="h-4 w-4 mr-1" />
      {currentLang}
    </Button>
  );
}