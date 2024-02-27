import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

const EmailSubscribe = lazy(() => import('@/pages/min/email-subscribe'));
const ImageGallery = lazy(() => import('@/pages/min/image-gallery'));
const LoginModal = lazy(() => import('@/pages/min/login-modal'));
const PricingCards = lazy(() => import('@/pages/min/pricing-cards'));
const ProductModal = lazy(() => import('@/pages/min/product-modal'));

const subRoutes: RouteObject[] = [
  { index: true, element: <Navigate to="/mini" /> },
  {
    path: 'mini',
    children: [
      { index: true, element: <Navigate to="email-subscribe" /> },
      { path: 'email-subscribe', element: <EmailSubscribe /> },
      { path: 'image-gallery', element: <ImageGallery /> },
      { path: 'login-modal', element: <LoginModal /> },
      { path: 'pricing-cards', element: <PricingCards /> },
      { path: 'product-modal', element: <ProductModal /> },
    ],
  },
  {
    path: 'something',
    element: <div>Something</div>,
  },
];

export default subRoutes;
