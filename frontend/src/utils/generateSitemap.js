const fs = require('fs');
const path = require('path');

const baseUrl = 'https://techtools.dev'; // Replace with your actual domain

// List all your routes
const routes = [
  '/',
  '/electronic-tools',
  '/signal-power-tools',
  '/communication-tools',
  '/developer-tools',
  '/about',
  '/privacy',
  '/terms',
  '/contact',
  // Electronic Tools
  '/electronic-tools/ohms-law',
  '/electronic-tools/led-resistor',
  '/electronic-tools/resistor-calculator',
  '/electronic-tools/capacitor-calculator',
  '/electronic-tools/voltage-divider',
  '/electronic-tools/rc-filter',
  '/electronic-tools/reactance',
  '/electronic-tools/pcb-trace',
  '/electronic-tools/battery-life',
  '/electronic-tools/voltage-regulator',
  // Developer Tools
  '/developer-tools/base-converter',
  '/developer-tools/crc-calculator',
  '/developer-tools/byte-converter',
  '/developer-tools/regex-tester',
  '/developer-tools/json-formatter',
  '/developer-tools/binary-viewer',
  '/developer-tools/color-picker',
  '/developer-tools/image-converter',
  '/developer-tools/ascii-table',
  '/developer-tools/terminal-controls',
  // Communication Tools
  '/communication-tools/serial-terminal',
  '/communication-tools/modbus-terminal',
  '/communication-tools/binary-viewer',
  '/communication-tools/ascii-table',
  '/communication-tools/crc-calculator',
  '/communication-tools/terminal-controls',
  // Signal & Power Tools
  '/signal-power-tools/rc-filter',
  '/signal-power-tools/pwm-dac',
  '/signal-power-tools/adc-calculator'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  fs.writeFileSync(
    path.join(__dirname, '../../public/sitemap.xml'),
    sitemap.trim()
  );
};

generateSitemap();
