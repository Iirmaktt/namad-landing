'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { motion } from 'framer-motion';
import { Download, FileText, Scale, Share2, AlertTriangle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function ProductDetailClient() {
  const params = useParams();
  
  // Mock product data
  const product = {
    title: 'NAWEL Abrasion C',
    standard: 'DIN 8555: MF 10-GF-60-G',
    summary: 'Ekstremal aşınma koşulları için geliştirilmiş, yüksek karbonlu matris yapılı toz dolgulu tel. Maksimum sertlik ve aşınma direnci sağlar.',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
    hardness: '58-62 HRC',
    // ...existing product data...
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href={`/urunler/${params.kategori}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Geri Dön
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Ürün Detayı</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-4">
                    <Image
                      src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Product"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h1 className="text-3xl font-bold mb-2">{params.slug}</h1>
                  <Badge className="mb-4">DIN 8555: MF 10-GF-60-G</Badge>
                  <p className="text-gray-600">
                    Detaylı ürün açıklaması burada yer alacak.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Teknik Özellikler</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Sertlik:</span>
                      <span className="font-medium">58-62 HRC</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Çap:</span>
                      <span className="font-medium">1.6mm, 2.4mm</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-2">
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Teknik Döküman İndir
                </Button>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Teklif Al
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
