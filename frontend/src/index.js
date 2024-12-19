import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Only send web vitals if user has consented
reportWebVitals(metric => {
  const consent = localStorage.getItem('cookieConsent');
  const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
  if (consent === 'accepted' && measurementId) {
    ReactGA.event({
      category: 'Web Vitals',
      action: metric.name,
      value: Math.round(metric.value),
      label: metric.id,
      nonInteraction: true,
    });
  }
});