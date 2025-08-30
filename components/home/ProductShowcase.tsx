'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Wrench } from 'lucide-react';
import Link from 'next/link';
import { Route } from 'next';

export function ProductShowcase() {
  const t = useTranslations();

  const products = [
    {
      icon: Zap,
      title: 'Cored Wire (FCAW)',
      description: 'NAWEL Abrasion, Tool, Corrosion, Cast, Buildup ve Tungsten Carbide serisi',
      href: '/urunler' as Route,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Aşınma Plakaları',
      description: 'Ultrahard ve Ultralight serisi hardfacing plakaları',
      href: '/plakalar' as Route,
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: 'Tubular Elektrotlar',
      description: 'Elle kaynak için özel formülasyonlu toz dolgulu elektrotlar',
      href: '/elektrotlar' as Route,
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ürün Ailelerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Her uygulama için özel olarak geliştirilmiş, yüksek performanslı kaynak çözümleri
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <product.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={product.href}>
                      Ürünleri İncele
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}