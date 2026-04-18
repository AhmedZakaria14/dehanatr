import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://dahanat-alriyadh.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://dahanat-alriyadh.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://dahanat-alriyadh.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://dahanat-alriyadh.com/services/painting', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://dahanat-alriyadh.com/services/gypsum', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://dahanat-alriyadh.com/services/epoxy', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://dahanat-alriyadh.com/services/renovation', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://dahanat-alriyadh.com/services/wallpaper', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/services/shelters', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/services/tiles', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/portfolio', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://dahanat-alriyadh.com/blog/limatha-yatashakkaq-aldahan', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/blog/joton-5000-vs-2000', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/blog/warraq-jidran-almatabikh', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/blog/limatha-tatahallak-almuthalah', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/blog/altarmim-am-aldahan-aljadid', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/blog/afdal-dahanat-lilmanatiq-alharrah', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://dahanat-alriyadh.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];
}
