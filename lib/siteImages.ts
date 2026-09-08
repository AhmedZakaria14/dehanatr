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
  pages: {
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
  blog: [
    img('blog-1'),
    img('service-decorative'),
    img('page-renovation'),
    img('service-wallpaper'),
    img('page-epoxy'),
    img('service-painting'),
  ],
  gallery: [
    img('hero'),
    img('problem-solution'),
    img('service-painting'),
    img('service-gypsum'),
    img('service-epoxy'),
    img('service-renovation'),
    img('service-wallpaper'),
    img('service-shelters'),
    img('service-tiles'),
    img('service-decorative'),
  ],
};

export default siteImages;
