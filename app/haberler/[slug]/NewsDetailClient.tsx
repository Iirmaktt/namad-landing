'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsDetailClientProps {
  slug: string;
}

export default function NewsDetailClient({ slug }: NewsDetailClientProps) {
  
  const newsData: Record<string, any> = {
    'egitim-yatirim-gerekliligi': {
      title: 'Neden Eğitim İçin Mali Harcama Yapmalıyız?',
      excerpt: 'Kaynak teknolojilerinde eğitim yatırımının uzun vadeli getirisi ve işletmelere sağladığı avantajlar.',
      image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '20 Aralık 2024',
      author: 'Eğitim Koordinatörü',
      category: 'Eğitim',
      readTime: '5 dk',
      content: `
        <p>Kaynak teknolojilerinde eğitim yatırımı, işletmelerin uzun vadeli başarısı için kritik öneme sahiptir. Bu makalede, eğitim harcamalarının neden gerekli olduğunu ve işletmelere sağladığı faydaları inceliyoruz.</p>

        <h3>Eğitim Yatırımının Faydaları</h3>
        <p>Kaynak teknolojilerinde yapılan eğitim yatırımları, işletmelere çok boyutlu avantajlar sağlar:</p>
        
        <ul>
          <li><strong>Kalite Artışı:</strong> Eğitimli personel daha kaliteli kaynak işleri gerçekleştirir</li>
          <li><strong>Verimlilik:</strong> Doğru tekniklerle çalışma hızı ve verimliliği artar</li>
          <li><strong>Maliyet Tasarrufu:</strong> Hata oranları azalır, yeniden işleme maliyetleri düşer</li>
          <li><strong>Güvenlik:</strong> İş kazası riskleri minimize edilir</li>
        </ul>

        <h3>Yatırım Geri Dönüşü</h3>
        <p>Eğitim yatırımlarının geri dönüş süresi genellikle 6-12 ay arasındadır:</p>
        
        <ul>
          <li>%30 daha az malzeme israfı</li>
          <li>%40 daha az yeniden işleme</li>
          <li>%25 daha hızlı üretim</li>
          <li>%50 daha az iş kazası</li>
        </ul>

        <h3>NAMAD Akademi Avantajı</h3>
        <p>NAMAD Akademi'nin ücretsiz eğitim programları ile:</p>
        
        <ul>
          <li>Sıfır eğitim maliyeti</li>
          <li>Sertifikalı eğitim</li>
          <li>Uzman eğitmenler</li>
          <li>Uygulamalı workshop</li>
        </ul>

        <p>Eğitim yatırımı yapmak, işletmenizin geleceğine yaptığınız en değerli yatırımdır. NAMAD Akademi ile bu yatırımı ücretsiz olarak gerçekleştirebilirsiniz.</p>
      `
    },
    'kariyer-gelistim-projeleri': {
      title: 'İş ve Kariyer Gelişimi İçin Yeni Projeler',
      excerpt: 'Kaynak sektöründe kariyer gelişimi ve iş fırsatları için yenilikçi projeler ve eğitim programları.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '18 Aralık 2024',
      author: 'İnsan Kaynakları',
      category: 'Kariyer',
      readTime: '4 dk',
      content: `
        <p>NanoWearTech Türkiye olarak, çalışanlarımızın ve sektör profesyonellerinin kariyer gelişimi için yeni projeler başlatıyoruz. Bu projeler, kaynak teknolojileri alanında uzmanlaşmak isteyen herkese açık.</p>

        <h3>Kariyer Gelişim Programları</h3>
        <p>Sektörde kariyer yapmak isteyenler için kapsamlı programlar:</p>
        
        <ul>
          <li><strong>Stajyer Programı:</strong> Üniversite öğrencileri için 6 aylık staj imkanı</li>
          <li><strong>Uzman Yetiştirme:</strong> Deneyimli teknisyenler için ileri seviye eğitim</li>
          <li><strong>Liderlik Geliştirme:</strong> Yönetici adayları için liderlik eğitimleri</li>
          <li><strong>Teknik Sertifikasyon:</strong> Uluslararası sertifika programları</li>
        </ul>

        <h3>İş Fırsatları</h3>
        <p>Büyüyen ekibimize katılmak için açık pozisyonlar:</p>
        
        <ul>
          <li>Kaynak Teknolojileri Uzmanı</li>
          <li>Satış Temsilcisi</li>
          <li>Ar-Ge Mühendisi</li>
          <li>Kalite Kontrol Uzmanı</li>
          <li>Saha Uygulamaları Teknisyeni</li>
        </ul>

        <h3>Eğitim ve Gelişim Desteği</h3>
        <p>Çalışanlarımıza sunduğumuz gelişim imkanları:</p>
        
        <ul>
          <li>Sürekli eğitim programları</li>
          <li>Konferans ve seminer katılımı</li>
          <li>Yurt dışı eğitim fırsatları</li>
          <li>Mentörlük programları</li>
        </ul>

        <p>Kariyer hedeflerinizi gerçekleştirmek için bizimle iletişime geçin. Birlikte büyüyelim!</p>
      `
    },
    'namad-teknoloji-haberleri': {
      title: 'NAMAD Teknoloji Haberleri',
      excerpt: 'Nano-teknoloji destekli kaynak çözümlerinde son gelişmeler ve yenilikçi ürün lansmanları.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '15 Aralık 2024',
      author: 'Ar-Ge Ekibi',
      category: 'Teknoloji',
      readTime: '6 dk',
      content: `
        <p>NAMAD teknolojilerinde yaşanan son gelişmeler, kaynak sektöründe yeni standartlar belirliyor. Nano-teknoloji destekli çözümlerimizle sektörde öncü olmaya devam ediyoruz.</p>

        <h3>Nano-teknoloji Gelişmeleri</h3>
        <p>Son dönemde gerçekleştirdiğimiz Ar-Ge çalışmaları:</p>
        
        <ul>
          <li><strong>Nano-parçacık Dağılımı:</strong> Homojen dağılım teknolojisinde %40 iyileştirme</li>
          <li><strong>Matris Yapı Optimizasyonu:</strong> Yeni kristal yapı formülasyonları</li>
          <li><strong>Seyreltme Oranı Azaltma:</strong> %25 daha düşük seyreltme oranları</li>
          <li><strong>Termal Stabilite:</strong> Yüksek sıcaklık dayanımında artış</li>
        </ul>

        <h3>Yeni Ürün Lansmanları</h3>
        <p>2024 yılında piyasaya sunduğumuz yenilikçi ürünler:</p>
        
        <ul>
          <li>NAWEL Tungsten Carbide WC 75 - En yüksek sertlik</li>
          <li>NAWEL Heat Resistant Plus - Gelişmiş sıcaklık direnci</li>
          <li>NAWEL Eco Series - Çevre dostu formülasyonlar</li>
          <li>NAWEL Smart Flux - Akıllı flux teknolojisi</li>
        </ul>

        <h3>Gelecek Projeler</h3>
        <p>2025 yılında hayata geçireceğimiz projeler:</p>
        
        <ul>
          <li>AI destekli parametre optimizasyonu</li>
          <li>IoT entegreli kaynak takip sistemi</li>
          <li>Sürdürülebilir üretim teknolojileri</li>
          <li>Dijital eğitim platformu</li>
        </ul>

        <h3>Sektörel Etki</h3>
        <p>Teknolojik gelişmelerimizin sektöre etkisi:</p>
        
        <ul>
          <li>%300'e varan ekipman ömrü artışı</li>
          <li>%50 maliyet tasarrufu</li>
          <li>%40 daha hızlı uygulama</li>
          <li>%60 daha az bakım gereksinimi</li>
        </ul>

        <p>Teknolojik yeniliklerimizle sektörde fark yaratmaya devam ediyoruz. Gelişmelerimizi takip etmek için haberler sayfamızı ziyaret edin.</p>
      `
    },
    'yeni-tungsten-carbide-serisi': {
      title: 'Yeni NAWEL Tungsten Carbide Serisi Tanıtıldı',
      excerpt: 'Ekstra yüksek aşınma direnci için geliştirilen yeni tungsten carbide formülasyonları piyasaya sunuldu.',
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '15 Aralık 2024',
      author: 'Teknik Ekip',
      category: 'Ürün Lansmanı',
      readTime: '3 dk',
      content: `
        <p>NanoWearTech Türkiye, aşınmaya dayanıklı kaynak çözümleri portföyünü genişleterek yeni NAWEL Tungsten Carbide serisini tanıttı. Bu yeni seri, ekstremal aşınma koşullarında maksimum performans sağlamak üzere geliştirildi.</p>

        <h3>Yeni Serinin Özellikleri</h3>
        <p>NAWEL Tungsten Carbide serisi, nano-ölçekli tungsten karbür parçacıklarının homojen dağılımı ile üstün aşınma direnci sağlıyor. Seri, üç farklı sertlik seviyesinde sunuluyor:</p>
        
        <ul>
          <li><strong>NAWEL WC 65:</strong> 62-67 HRC sertlik, orta-ağır aşınma koşulları</li>
          <li><strong>NAWEL WC 70:</strong> 67-72 HRC sertlik, ağır aşınma koşulları</li>
          <li><strong>NAWEL WC 75:</strong> 72-77 HRC sertlik, ekstremal aşınma koşulları</li>
        </ul>

        <h3>Uygulama Alanları</h3>
        <p>Yeni tungsten carbide serisi özellikle aşağıdaki sektörlerde devrim yaratacak:</p>
        
        <ul>
          <li>Madencilik ekipmanları</li>
          <li>Agrega işleme tesisleri</li>
          <li>Çimento endüstrisi</li>
          <li>Kırma eleme sistemleri</li>
        </ul>

        <h3>Teknik Avantajlar</h3>
        <p>Geleneksel hardfacing çözümlerine kıyasla %40 daha uzun servis ömrü sağlayan yeni seri, aynı zamanda %25 daha düşük seyreltme oranı ile maliyet avantajı da sunuyor.</p>

        <p>Ürün hakkında detaylı bilgi almak için teknik ekibimizle iletişime geçebilirsiniz.</p>
      `
    },
    'cimento-sektoru-cozumleri': {
      title: 'Çimento Sektörü İçin Özel Çözümler',
      excerpt: 'Yüksek sıcaklık ve aşınma koşulları için optimize edilmiş hardfacing uygulamaları.',
      image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '8 Aralık 2024',
      author: 'Dr. Mehmet Yılmaz',
      category: 'Sektör Haberi',
      readTime: '5 dk',
      content: `
        <p>Çimento endüstrisinin zorlu koşulları için özel olarak geliştirilen hardfacing çözümlerimiz, sektörde yeni standartlar belirliyor.</p>

        <h3>Çimento Sektörünün Zorlukları</h3>
        <p>Çimento üretim sürecinde ekipmanlar aşağıdaki zorlu koşullarla karşılaşır:</p>
        
        <ul>
          <li>Yüksek sıcaklık (800-1000°C)</li>
          <li>Aşındırıcı malzemeler</li>
          <li>Sürekli çalışma koşulları</li>
          <li>Kimyasal aşınma</li>
        </ul>

        <h3>Özel Çözümlerimiz</h3>
        <p>Bu zorlu koşullar için geliştirdiğimiz özel ürünler:</p>
        
        <ul>
          <li><strong>NAWEL Heat Resistant:</strong> Yüksek sıcaklık dayanımı</li>
          <li><strong>NAWEL Abrasion Plus:</strong> Gelişmiş aşınma direnci</li>
          <li><strong>NAWEL Composite:</strong> Çok amaçlı koruma</li>
        </ul>

        <h3>Başarı Hikayeleri</h3>
        <p>Türkiye'nin önde gelen çimento fabrikalarında gerçekleştirilen uygulamalarımızda %300'e varan ömür artışı sağladık.</p>
      `
    }
  };

  const article = newsData[slug];

  if (!article) {
    return <div>Haber bulunamadı</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">Anasayfa</Link>
            <span>/</span>
            <Link href="/haberler" className="hover:text-blue-600">Haberler</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{article.title}</span>
          </div>

          <Button asChild variant="outline" size="sm" className="mb-6">
            <Link href="/haberler">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Haberlere Geri Dön
            </Link>
          </Button>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="mb-8">
              <div className="relative h-64 lg:h-96 overflow-hidden rounded-t-lg">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <Badge className="bg-blue-600 text-white mb-2">{article.category}</Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {article.title}
                  </h1>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime} okuma</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: article.content }} />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between"
          >
            <Button variant="outline">
              <Share2 className="h-4 w-4 mr-2" />
              Paylaş
            </Button>
            
            <div className="flex space-x-2">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                PDF İndir
              </Button>
              <Button>
                İletişime Geç
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}