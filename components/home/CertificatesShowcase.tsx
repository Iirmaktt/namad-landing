'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Award, Shield, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CertificatesShowcase() {
  const t = useTranslations();

  const certificates = [
    {
      icon: Award,
      title: 'ISO Standartları',
      description: 'DIN 8555, EN 14700 ve uluslararası kalite standartları',
      count: '12+'
    },
    {
      icon: Shield,
      title: 'Nano-teknoloji Onayları',
      description: 'Nano-ölçek ürün test ve onay belgeleri',
      count: '8+'
    },
    {
      icon: FileCheck,
      title: 'Patent Portföyü',
      description: 'Kaynak teknolojileri ve formülasyon patentleri',
      count: '15+'
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
            Sertifikalar ve Onaylar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uluslararası standartlarda kalite güvencesi ve sürekli inovasyon
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.05 }}
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0)",
                        "0 0 0 10px rgba(59, 130, 246, 0.1)",
                        "0 0 0 0 rgba(59, 130, 246, 0)"
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <cert.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="text-2xl font-bold text-blue-600">
                    {cert.count}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/sertifikalar">
              Tüm Sertifikaları Görüntüle
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}