import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const root = createRoot(document.querySelector('#app')!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
