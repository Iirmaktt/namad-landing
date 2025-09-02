import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://nanoweartech.com.tr';
  
  const staticPages = [
    '',
    '/urunler',
    '/urunler/plakalar',
    '/urunler/flux-cored-teller',
    '/urunler/tubular-elektrotlar',
    '/rehberler',
    '/hizmetler',
    '/hizmetler/danismanlik',
    '/hizmetler/kaynak',
    '/akademi',
    '/sektorler',
    '/sertifikalar',
    '/temsilcilikler',
    '/haberler',
    '/nereden-alinir',
    '/indir',
    '/hakkimizda',
    '/iletisim',
    '/kariyer',
    '/kvkk',
    '/cerez-politikasi',
    '/kullanim-kosullari'
  ];

  const productPages = [
    '/urunler/plakalar/ultrahard-65',
    '/urunler/plakalar/ultralight-65',
    '/urunler/plakalar/ultrahard-67t',
    '/urunler/plakalar/ultralight-67t',
    '/urunler/plakalar/ultrahard-70t',
    '/urunler/flux-cored-teller/nawel-abrasion',
    '/urunler/flux-cored-teller/nawel-impact',
    '/urunler/flux-cored-teller/nawel-rail',
    '/urunler/flux-cored-teller/nawel-tool',
    '/urunler/flux-cored-teller/nawel-corrosion',
    '/urunler/flux-cored-teller/nawel-cast',
    '/urunler/flux-cored-teller/nawel-buildup',
    '/urunler/flux-cored-teller/nawel-tungsten-carbide',
    '/urunler/tubular-elektrotlar/tubular-b',
    '/urunler/tubular-elektrotlar/tubular-c',
    '/urunler/tubular-elektrotlar/tubular-bnm',
    '/urunler/tubular-elektrotlar/tubular-nbs',
    '/urunler/tubular-elektrotlar/tubular-tic'
  ];

  const sectorPages = [
    '/sektorler/cimento',
    '/sektorler/madencilik',
    '/sektorler/agrega',
    '/sektorler/enerji',
    '/sektorler/celik',
    '/sektorler/genel-endustri'
  ];

  const newsPages = [
    '/haberler/egitim-yatirim-gerekliligi',
    '/haberler/kariyer-gelistim-projeleri',
    '/haberler/namad-teknoloji-haberleri',
    '/haberler/yeni-tungsten-carbide-serisi',
    '/haberler/cimento-sektoru-cozumleri',
    '/haberler/fcaw-akademi-egitim-programi',
    '/haberler/madencilik-sektoru-basari-hikayesi',
    '/haberler/yeni-iso-sertifikasi',
    '/haberler/agrega-sektoru-inovasyonu'
  ];

  const allPages = [...staticPages, ...productPages, ...sectorPages, ...newsPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}