import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Ehtisham Sarwar (ES TECH) | Senior Web Developer & Full-Stack Architect',
  description = 'Senior Web Developer & Full-Stack Architect with 5+ years experience building high-converting e-commerce, real estate portals, SaaS apps, and enterprise web solutions.',
  keywords = 'Ehtisham Sarwar, ES TECH, Web Developer, Senior Full Stack Developer, React Developer, TypeScript, Next.js, Web Development Services, Real Estate Web Development, E-Commerce Development',
  image = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  url = 'https://ehtishamsarwar.dev',
  type = 'website',
  author = 'Ehtisham Sarwar',
}) => {
  const fullTitle = title.includes('Ehtisham Sarwar') || title.includes('ES TECH')
    ? title
    : `${title} | Ehtisham Sarwar (ES TECH)`;

  return (
    <Helmet>
      {/* Standard Metadata Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* OpenGraph / Social Sharing Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="ES TECH • Ehtisham Sarwar Portfolio" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ehtisham_tech" />
    </Helmet>
  );
};
