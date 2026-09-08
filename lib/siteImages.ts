const img = (name: string) => `/images/site/${name}.webp`;

export const siteImages = {
  hero: img('hero'),
  problemSolution: img('problem-solution'),
  services: {
    painting: img('service-painting'),
    gypsum: img('service-gypsum'),
    epoxy: img('service-epoxy'),
    renovation: img('service-renovation'),
    wallpaper: img('service-wallpaper'),
    shelters: img('service-shelters'),
    tiles: img('service-tiles'),
    decorative: img('service-decorative'),
  },
  servicePages: {
    painting: img('page-painting'),
    gypsum: img('page-gypsum'),
    gypsumCeiling: img('page-gypsum-ceiling'),
    gypsumWall: img('page-gypsum-wall'),
    epoxy: img('page-epoxy'),
    renovation: img('page-renovation'),
    wallpaper: img('page-wallpaper'),
    shelters: img('page-shelters'),
    tiles: img('page-tiles'),
  },
  blog: {
    post1: img('blog-1'),
    post2: img('blog-2'),
    post3: img('blog-3'),
    post4: img('blog-4'),
    post5: img('blog-5'),
    post6: img('blog-6'),
  },
  gallery: [
    img('gallery-1'),
    img('gallery-2'),
    img('gallery-3'),
    img('gallery-4'),
    img('gallery-5'),
    img('gallery-6'),
    img('gallery-7'),
    img('gallery-8'),
    img('gallery-9'),
    img('gallery-10'),
  ],
};

export default siteImages;
