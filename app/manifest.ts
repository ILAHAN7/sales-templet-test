import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gangeong - Artisan Soy Sauce',
    short_name: 'Gangeong',
    description: 'Premium handmade Korean soy sauce crafted with traditional fermentation methods',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5E6D3',
    theme_color: '#3E2723',
  };
}
