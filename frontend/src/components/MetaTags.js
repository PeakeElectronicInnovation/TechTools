import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ 
  title = 'Tech Tools - Free Online Engineering & Developer Tools',
  description = 'Free online tools for electronics, signal processing, and software development. Calculate, convert, and analyze with our engineering utilities.',
  path = ''
}) => {
  const baseUrl = 'https://techtools.dev'; // Replace with your actual domain
  const url = `${baseUrl}${path}`;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Tech Tools" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Technical meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#1976d2" />
      
      {/* Keywords for search engines */}
      <meta name="keywords" content="electronics calculator, ohms law, LED calculator, resistor color code, PCB trace calculator, base converter, CRC calculator, engineering tools, developer utilities" />
    </Helmet>
  );
};

export default MetaTags;
