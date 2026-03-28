import { MetadataRoute } from 'next';
import { coursesData } from '@/data/courses';
import { seoConfig } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.canonical;

  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/refunds',
    '/careers',
    '/recruiters',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic course routes
  const courseRoutes = coursesData.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...courseRoutes];
}
