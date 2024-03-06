import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = createRoot(document.querySelector('#app')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

//  Cloudflare Web Analytics
if (import.meta.env.MODE === 'production') {
  const script = document.createElement('script');
  script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  script.defer = true;
  script.dataset['cfBeacon'] = '{"token": "67836df166b84f13bd687b698178a728"}';
  document.body.appendChild(script);
}
