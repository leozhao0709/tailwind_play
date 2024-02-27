import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import rootRoute from './root';

type RemixRouter = ReturnType<typeof createBrowserRouter>;

const router: RemixRouter = createBrowserRouter([rootRoute]);

export default router;
