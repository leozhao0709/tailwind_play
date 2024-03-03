import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Loopstudios from '../../pages/loopstudios';

const EmailSubscribe = lazy(() => import('@/pages/mini/emailSubscribe'));
const ImageGallery = lazy(() => import('@/pages/mini/imageGallery'));
const LoginModal = lazy(() => import('@/pages/mini/loginModal'));
const PricingCards = lazy(() => import('@/pages/mini/pricingCards'));
const ProductModal = lazy(() => import('@/pages/mini/productModal'));
const Clipboard = lazy(() => import('@/pages/clipboard'));

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
    path: 'clipboard',
    element: <Clipboard />,
  },
  {
    path: 'loopstudios',
    element: <Loopstudios />,
  },
];

export default subRoutes;
