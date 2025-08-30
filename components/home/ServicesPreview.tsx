'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Users, Wrench, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Route } from 'next';

export function ServicesPreview() {
  const t = useTranslations();

  const services = [
    {
      icon: Users,
      title: 'Teknik Danışmanlık',
      description: 'Malzeme seçimi, kaynak parametreleri ve uygulama optimizasyonu',
      href: '/hizmetler/danismanlik' as Route
    },
    {
      icon: Wrench,
      title: 'Kaynak Hizmetleri',
      description: 'Saha uygulamaları ve özel proje çözümleri',
      href: '/hizmetler/kaynak' as Route
    },
    {
      icon: GraduationCap,
      title: 'FCAW Akademi',
      description: 'Ücretsiz toz dolgulu tel kaynak eğitimi programı',
      href: '/hizmetler/akademi' as Route
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ürün satışından eğitime, teknik desteğe kadar kapsamlı çözümler
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild variant="outline" className="w-full group">
                    <Link href={service.href}>
                      Detayları Gör
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