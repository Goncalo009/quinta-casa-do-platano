import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Quinta Casa do Plátano - Criação de Ovelhas Mouton Vendéen',
  description = 'Especialistas na criação de ovelhas da raça Mouton Vendéen em Samora Correia. Oferecemos animais de alta qualidade e serviços especializados para criadores.',
  keywords = 'ovelhas mouton vendéen, criação ovelhas, samora correia, quinta casa do plátano, ovinocultura, animais reprodução, reprodutores ovinos',
  image = 'https://quintacasadoplatano.pt/logoOficial.webp',
  url = 'https://quintacasadoplatano.pt',
  type = 'website',
  structuredData
}) => {
  const fullTitle = title.includes('Quinta Casa do Plátano') ? title : `${title} | Quinta Casa do Plátano`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Quinta Casa do Plátano" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Portuguese" />
      <meta name="geo.region" content="PT" />
      <meta name="geo.placename" content="Samora Correia" />
      <meta name="geo.position" content="38.9547;-8.8164" />
      <meta name="ICBM" content="38.9547, -8.8164" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Quinta Casa do Plátano" />
      <meta property="og:locale" content="pt_PT" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;